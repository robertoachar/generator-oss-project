const validateName = (value) => {
  if (value.length === 0) {
    return 'Enter your name';
  }

  return true;
};

const validateEmail = (value) => {
  if (value.length === 0) {
    return 'Enter your email';
  }

  return true;
};

const validateUsername = (value) => {
  if (value.length === 0) {
    return 'Enter your username';
  }

  return true;
};

export { validateEmail, validateName, validateUsername };
