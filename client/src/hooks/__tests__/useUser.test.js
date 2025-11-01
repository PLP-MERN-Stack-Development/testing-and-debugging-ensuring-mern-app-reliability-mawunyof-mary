const { renderHook, act, waitFor } = require('@testing-library/react');
const axios = require('axios');
const { useUser } = require('../useUser');

jest.mock('axios');

describe('useUser Hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch user data', async () => {
    const mockUser = { _id: '123', name: 'John', email: 'john@example.com' };
    axios.get.mockResolvedValue({ data: mockUser });

    const { result } = renderHook(() => useUser());

    await act(async () => {
      await result.current.fetchUser('123');
    });

    await waitFor(() => {
      expect(result.current.user).toEqual(mockUser);
    });
  });

  test('should handle fetch error', async () => {
    const error = new Error('Network error');
    axios.get.mockRejectedValue(error);

    const { result } = renderHook(() => useUser());

    await act(async () => {
      await result.current.fetchUser('123');
    });

    await waitFor(() => {
      expect(result.current.error).toBe('Network error');
    });
  });
});
