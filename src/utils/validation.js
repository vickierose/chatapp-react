import validator from 'validator';

export {
    isNotEmpty,
    isEmail,
    validateLength,
}

function isNotEmpty(value){
    return !validator.isEmpty(value)
}

function isEmail(field){
    return validator.isEmail(field);
}

function validateLength(value) {
  return validator.isLength(value, { min: 3 });
}