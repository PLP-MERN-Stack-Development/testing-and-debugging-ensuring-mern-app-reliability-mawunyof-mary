const errorHandler = require('../../src/middleware/errorHandler');

describe('Error Handler Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  test('should handle errors with status code', () => {
    const error = new Error('Bad Request');
    error.status = 400;

    errorHandler(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  test('should default to 500 status', () => {
    const error = new Error('Server Error');

    errorHandler(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
