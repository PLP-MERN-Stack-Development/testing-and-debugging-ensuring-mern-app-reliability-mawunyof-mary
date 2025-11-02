const { renderHook, act, waitFor } = require('@testing-library/react');
const axios = require('axios');
const { useUser } = require('../useUser');

jest.mock('axios');

describe('useUser Hook - Additional Coverage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with null user', () => {
    const { result } = renderHook(() => useUser());
    expect(result.current.user).toBeNull();
  });

  test('should update user successfully', async () => {
    const updatedUser = { _id: '123', name: 'Jane', email: 'jane@example.com' };
    axios.put.mockResolvedValue({ data: updatedUser });

    const { result } = renderHook(() => useUser());

    let updateResult;
    await act(async () => {
      updateResult = await result.current.updateUser('123', { name: 'Jane' });
    });

    expect(updateResult).toEqual(updatedUser);
  });

  test('should handle update error and re-throw', async () => {
    const error = new Error('Update failed');
    axios.put.mockRejectedValue(error);

    const { result } = renderHook(() => useUser());

    await act(async () => {
      try {
        await result.current.updateUser('123', { name: 'Jane' });
      } catch (err) {
        expect(err.message).toBe('Update failed');
      }
    });
  });
});
