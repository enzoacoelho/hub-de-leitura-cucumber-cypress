
class CadastroPage {
    get campoNome() { return cy.get('#name'); }
    get campoEmail() { return cy.get('#email'); }
    get campoTelefone() { return cy.get('#phone'); }
    get campoSenha() { return cy.get('#password'); }
    get campoConfirmaSenha() { return cy.get('#confirm-password'); }
    get termosUso() { return cy.get('#terms-agreement'); };
    get botaoRegistrar() { return cy.get('#register-btn'); };
    get msgEmail() { return cy.get('#register-form > :nth-child(2) > .invalid-feedback'); };
    get msgNome() { return cy.get(':nth-child(1) > .invalid-feedback'); };
    get msgSenha() { return cy.get(':nth-child(5) > .invalid-feedback'); };
    get msgAlerta() { return cy.get('#alert-container'); };
    get nomeBoasVindas() { return cy.get('#user-name'); };
    get nomeNoMenu() { return cy.get('.fw-bold'); };    

}

export default new CadastroPage();