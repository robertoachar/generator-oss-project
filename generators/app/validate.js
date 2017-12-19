module.exports.validateName = (value) => {
  if (value.length === 0) {
    return 'You need to enter your name';
  }

  return true;
};

module.exports.validateEmail = (value) => {
  if (value.length === 0) {
    return 'You need to enter your email';
  }

  return true;
};

module.exports.validateUsername = (value) => {
  if (value.length === 0) {
    return 'You need to enter your username';
  }

  return true;
};
