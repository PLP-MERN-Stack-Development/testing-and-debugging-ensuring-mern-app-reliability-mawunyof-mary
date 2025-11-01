const { generateToken, verifyToken } = require('../../src/utils/auth');

describe('Auth Utils', () => {
  describe('generateToken', () => {
    test('should generate a valid JWT token', () => {
      const userId = '123';
      const token = generateToken(userId);
      
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
    });
  });

  describe('verifyToken', () => {
    test('should verify a valid token', () => {
      const userId = '123';
      const token = generateToken(userId);
      const decoded = verifyToken(token);
      
      expect(decoded).toBeDefined();
      expect(decoded.userId).toBe(userId);
    });

    test('should return null for invalid token', () => {
      const invalidToken = 'invalid.token.here';
      const decoded = verifyToken(invalidToken);
      
      expect(decoded).toBeNull();
    });
  });
});
