exports.validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

exports.validatePassword = (password) => {
  return password && password.length >= 6;
};

exports.validateName = (name) => {
  return name && typeof name === 'string' && name.trim().length > 0;
};
