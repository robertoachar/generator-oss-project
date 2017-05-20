module.exports.validateName = (value) => {
  if (value.length === 0) {
    return 'You have to provide your name';
  }

  return true;
};

module.exports.validateEmail = (value) => {
  if (value.length === 0) {
    return 'You have to provide your email';
  }

  return true;
};

module.exports.validateUsername = (value) => {
  if (value.length === 0) {
    return 'You have to provide your username';
  }

  return true;
};
