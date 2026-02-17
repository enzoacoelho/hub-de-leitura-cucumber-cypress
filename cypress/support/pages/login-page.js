
class LoginPage {
    get emailInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('#password'); }
    get loginBtn() { return cy.get('#login-btn'); }
    get errorFeedback() { return cy.get('.invalid-feedback'); }
    get alertContainer() { return cy.get('#alert-container'); }

}

export default new LoginPage();