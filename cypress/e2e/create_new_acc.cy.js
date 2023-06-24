const exp = require('constants');
const fs = require('fs');

describe('End-to-End Test', () => {
  beforeEach(() => {
    cy.visit('https://www.tutorialspoint.com/market/login.asp');
  });

  it('completes the specified tasks', () => {
    cy.contains('Sign Up').click()

    // Fill in the registration form
    cy.get('#textRegName').type('Joe Doe');
    cy.get('#country_code').type('+55');
    cy.get('#phone').type('61999999999');
    const randomEmail = getRandomEmail();
    cy.get('#textSRegEmail').type(randomEmail);
    const randomPassword = getRandomAlphanumericPassword(8);
    cy.get('#validate_email_id').click()
    const randomOTP = getRandomAlphanumericPassword(4);
    cy.get('#txtEmailValidateOTP').type(randomOTP)
    cy.get('#validateEmailOtp').click()
    cy.get('#user_password').type(randomPassword);
    cy.get('#chkPromotionalEmail').check();
  });

  // Helper function to generate a random alphanumeric character
  function generateRandomCharacter() {
    const regex = /[a-zA-Z0-9]/;
    const characters = [];
    for (let code = 48; code <= 122; code++) {
      const char = String.fromCharCode(code);
      if (regex.test(char)) {
        characters.push(char);
      }
    }
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  // Helper function to generate a random alphanumeric password of the specified length
  function getRandomAlphanumericPassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += generateRandomCharacter();
    }
    return password;
  }

  // Helper function to construct a random email using a random number
  function getRandomEmail() {
    const randomNumber = getRandomAlphanumericPassword(9);
    return `test${randomNumber}@test.com`;
  }
});
