const userController = require('../../src/controllers/userController');
const User = require('../../src/models/User');
const { generateToken } = require('../../src/utils/auth');

jest.mock('../../src/models/User');
jest.mock('../../src/utils/auth');
jest.mock('bcryptjs');

describe('User Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  describe('createUser', () => {
    test('should create a user with valid data', async () => {
      const userData = {
        _id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'hashedPassword',
      };

      req.body = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123',
      };

      User.findOne.mockResolvedValue(null);
      User.create.mockResolvedValue(userData);
      generateToken.mockReturnValue('token123');

      await userController.createUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test('should fail with missing fields', async () => {
      req.body = { name: 'John Doe' };

      await userController.createUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('getUser', () => {
    test('should get user by ID', async () => {
      const userData = {
        _id: '123',
        name: 'John Doe',
        email: 'john@example.com',
      };

      req.params = { id: '123' };
      User.findById.mockResolvedValue(userData);

      await userController.getUser(req, res, next);

      expect(res.json).toHaveBeenCalled();
    });

    test('should return 404 for non-existent user', async () => {
      req.params = { id: '999' };
      User.findById.mockResolvedValue(null);

      await userController.getUser(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteUser', () => {
    test('should delete user successfully', async () => {
      req.params = { id: '123' };
      User.findByIdAndDelete.mockResolvedValue({ _id: '123' });

      await userController.deleteUser(req, res, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
