const userController = require('../../src/controllers/userController');
const User = require('../../src/models/User');
const { generateToken } = require('../../src/utils/auth');
const bcryptjs = require('bcryptjs');

jest.mock('../../src/models/User');
jest.mock('../../src/utils/auth');
jest.mock('bcryptjs');

describe('User Controller - Additional Coverage', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  test('should call next on createUser database error', async () => {
    req.body = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'SecurePass123',
    };

    User.findOne.mockResolvedValue(null);
    User.create.mockRejectedValue(new Error('Database error'));

    await userController.createUser(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('should call next on getUser database error', async () => {
    req.params = { id: '123' };
    User.findById.mockRejectedValue(new Error('Database error'));

    await userController.getUser(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('should call next on updateUser database error', async () => {
    req.params = { id: '123' };
    req.body = { name: 'Jane Doe' };
    User.findByIdAndUpdate.mockRejectedValue(new Error('Database error'));

    await userController.updateUser(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('should call next on deleteUser database error', async () => {
    req.params = { id: '123' };
    User.findByIdAndDelete.mockRejectedValue(new Error('Database error'));

    await userController.deleteUser(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
