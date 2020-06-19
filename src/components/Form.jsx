import React, { useState, useEffect } from 'react';
import {
  validateFullname,
  validateEmail,
  validatePhone,
  validetePassword,
  validateConfirmPasswoerd,
  validatePin,
} from '../utils/helper';

/**
 * Form component
 * @param {Object} param0
 */
const Form = ({ handleValidForm }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [validCreditCard, setValidCreditCard] = useState(false);
  const [date, setDate] = useState('');
  const [validDate, setValidDate] = useState(false);
  const [pin, setPIn] = useState('');
  const [disable, setDisable] = useState(true);

  /**
   * Handles credit card validation
   * @param {string} creditCardNumber
   */
  const handleSetCreditCard = (creditCardNumber) => {
    const creditCardLength = creditCardNumber.replace(/\s/g, '').length;
    let check = true;
    if (creditCard.length > creditCardNumber.length) {
      check = false;
    }
    if (creditCardLength > 16) {
      return setValidCreditCard(true);
    }
    if (creditCardLength % 4 === 0 && creditCardLength <= 16 && check) {
      setCreditCard(
        creditCardLength !== 16 ? creditCardNumber + ' ' : creditCardNumber
      );
      if (creditCardLength === 16) {
        return setValidCreditCard(true);
      }
      setValidCreditCard(false);
    } else {
      setCreditCard(creditCardNumber);
      setValidCreditCard(false);
    }
  };

  /**
   * Handles date validation
   * @param {string} date
   */
  const handleSetDate = (date) => {
    if (Number.isNaN(Number(date)) && !/\W/.test(date)) {
      return setDate(`${date.slice(0, date.length - 1)}`);
    }
    if (date.length > 2 && !/\W/.test(date)) {
      setDate(
        `${
          Number(date.slice(0, 2)) < 1 || Number(date.slice(0, 2)) > 12
            ? '01'
            : date.slice(0, 2)
        } / ${date.slice(2)}`
      );

      setValidDate(false);
    }
    if (date.replace(/\W/g, '').length === 4) {
      return setValidDate(true);
    } else {
      setDate(date);
      setValidDate(false);
    }
  };

  useEffect(() => {
    if (
      validateFullname(fullName) &&
      validateEmail(email) &&
      validatePhone(phoneNumber) &&
      validetePassword(password) &&
      validateConfirmPasswoerd(password, confirmPassword) &&
      validDate &&
      validCreditCard &&
      validatePin(pin)
    ) {
      setDisable(false);
    }
  }, [
    fullName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    validDate,
    validCreditCard,
    pin,
  ]);

  return (
    <div className='form-contianer'>
      <form>
        <input
          name='fullName'
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='full name'
        />
        <input
          name='email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='email'
        />
        <input
          name='phoneNumber'
          type='number'
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder='phone number'
        />
        <input
          name='password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='password'
        />
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder='comfirm password'
        />
        <input
          name='creditCard'
          type='text'
          value={creditCard}
          onChange={(event) => handleSetCreditCard(event.target.value.trim())}
          placeholder='enter credit card number'
        />
        <input
          type='text'
          name='expirationDate'
          onChange={(event) => handleSetDate(event.target.value.trim())}
          value={date}
          placeholder='MM/YY'
        />
        <input
          name='pin'
          type='password'
          value={pin}
          onChange={(event) => setPIn(event.target.value)}
          placeholder='pin'
        />
        <button type='submit' disabled={disable} onClick={handleValidForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
