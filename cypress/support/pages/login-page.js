
class LoginPage {
    get emailInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#password'); }
    get loginBtn() { return cy.get('#login-btn'); }
    get errorFeedback() { return cy.get('.invalid-feedback'); }
    get alertContainer() { return cy.get('#alert-container'); }
    get msgErroEmail() { return cy.get(':nth-child(1) > .invalid-feedback'); };

}

export default new LoginPage();