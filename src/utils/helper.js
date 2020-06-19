/**
 * Validates fullname
 * @param {string} fullName
 */
const validateFullname = (fullName) =>
  fullName.split(' ').length === 2 && fullName.length >= 2;

/**
 * Validates email
 * @param {string} email
 */
const validateEmail = (email) => {
  const checkEmailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return checkEmailInput.test(email);
};

/**
 * Validates phone number
 * @param {string} phone
 */
const validatePhone = (phone) => {
  const subString = phone && phone.slice(0, 3);
  if (
    subString === '+234' ||
    (subString !== '090' &&
      subString !== '080' &&
      subString !== '081' &&
      subString !== '070') ||
    phone.length !== 11
  ) {
    return false;
  }
  return true;
};

/**
 * Validates password
 * @param {string} password
 */
const validetePassword = (password) => {
  const checkCapitalLetter = /[A-Z]/g;
  const checkNumber = /\d/g;
  const specialCharacterRegex = /[^a-zA-Z0-9]/g;

  return (
    checkCapitalLetter.test(password) &&
    checkNumber.test(password) &&
    password.length >= 6 &&
    specialCharacterRegex.test(password)
  );
};

/**
 * Validates confirm password
 * @param {string} password
 * @param {string} comfirmPassword
 */
const validateConfirmPasswoerd = (password, comfirmPassword) =>
  password === comfirmPassword;

/**
 * Validates pin
 * @param {string} pin
 */
const validatePin = (pin) => /\d/.test(Number(pin)) && pin.length === 4;

export {
  validateFullname,
  validateEmail,
  validatePhone,
  validateConfirmPasswoerd,
  validetePassword,
  validatePin,
};
