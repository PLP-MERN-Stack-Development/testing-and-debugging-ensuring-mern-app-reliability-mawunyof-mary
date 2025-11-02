const { validateEmail, validatePassword, validateName } = require('../../src/utils/validation');

describe('Validation Utils', () => {
  describe('validateEmail', () => {
    test('should validate correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('should reject invalid email', () => {
      expect(validateEmail('invalid.email')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('should validate correct password', () => {
      expect(validatePassword('SecurePass123')).toBe(true);
    });

    test('should reject short password', () => {
      expect(validatePassword('pass')).toBe(false);
    });
  });

  describe('validateName', () => {
    test('should validate correct name', () => {
      expect(validateName('John Doe')).toBe(true);
    });

    test('should reject invalid name', () => {
      expect(validateName('')).toBeFalsy();
    });
  });
});
