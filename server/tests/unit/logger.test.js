const logger = require('../../src/middleware/logger');

describe('Logger Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { method: 'GET', path: '/api/users' };
    res = {
      statusCode: 200,
      on: jest.fn((event, callback) => {
        if (event === 'finish') callback();
      }),
    };
    next = jest.fn();
  });

  test('should call next', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('should set up finish listener', () => {
    logger(req, res, next);
    expect(res.on).toHaveBeenCalledWith('finish', expect.any(Function));
  });

  test('should log request details', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logger(req, res, next);
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
