import Validator from 'validator';

export default data => {
  let errors = {};

  let firstNameRegex = /^([a-zA-Z]+)$/;
  if (!firstNameRegex.test(data.firstName)) {
    errors.firstName = 'FirstName allows only characters';
  }

  let lastNameRegex = /^([a-zA-Z]+)$/;
  if (!lastNameRegex.test(data.lastName)) {
    errors.lastName = 'LastName allows only characters';
  }

  let passwordRegex = /^([a-zA-Z0-9]+)$/;
  if (!passwordRegex.test(data.password)) {
    errors.password = 'Password allows only characters and numbers';
  }

  if (!Validator.isLength(data.firstName, { min: 1, max: 30 })) {
    errors.firstName = 'Name must be between 1 and 30 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'Name field is required';
  }

  if (!Validator.isLength(data.lastName, { min: 1, max: 30 })) {
    errors.lastName = 'Name must be between 1 and 30 characters';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Name field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 40 })) {
    errors.password = 'Password should be more than 8 characters';
  }

  return {
    errors
  };
};
