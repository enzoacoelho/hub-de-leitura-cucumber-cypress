import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import cadastroPage from '../pages/cadastro-page';

let nomeGerado;

Given('que acesso a tela de cadastro do Hub de Leitura', () => {
    cy.visit('register.html');
});

When('eu preencho todos os campos obrigatórios com dados válidos', () => {
    nomeGerado = faker.person.fullName()
    let email = faker.internet.email()
    let senha = faker.internet.password()
    cy.preencherCadastro(nomeGerado, email, 998767, senha, senha)
    
});

Then('o sistema deve exibir a mensagem de cadastro {string}', (mensagem) => {
    cadastroPage.msgAlerta.should('contain', mensagem)
});

Then('devo ser redirecionado para o dashboard', () => {
    cy.url().should('include', 'dashboard')
});

Then('o sistema deve exibir a saudação personalizada com o meu nome', () => {
    cadastroPage.nomeBoasVindas.should('contain', nomeGerado)
});

When('eu tento me cadastrar com um email já existente', () => {   
    cy.fixture('usuarios').then((massa) => {
        let emailExistente = massa.admin.email
        let senha = massa.admin.senha
        cy.preencherCadastro(nomeGerado, emailExistente, 998767, senha, senha)
    }) 
    
});

When('eu tento me cadastrar com senha e confirmar senha diferentes', () => {
    nomeGerado = faker.person.fullName()
    let email = faker.internet.email()
    let senha = faker.internet.password()
    let confirmarSenha = faker.internet.password()
    cy.preencherCadastro(nomeGerado, email, 998767, senha, confirmarSenha)
});

Then("o sistema deve alertar abaixo do campo senha {string}",  (mensagem) => {
    cadastroPage.msgSenha.should('contain', mensagem)
});

When('eu tento me cadastrar com campos obrigatórios vazios', () => {
    cadastroPage.botaoRegistrar.click()
});

Then('o sistema deve exibir a mensagem {string} e {string}', (erroNome, erroEmail) => {
    cadastroPage.msgNome.should('contain' , erroNome)
     cadastroPage.msgEmail.should('contain' , erroEmail)
});

Then('os campos de senha e termos obrigatórios devem ficar inválidos', () => {
    cadastroPage.campoSenha.should('have.class', 'is-invalid');
    cadastroPage.termosUso.should('have.class', 'is-invalid');
});

When('eu tento me cadastrar com um email no formato inválido', () => {
    cy.preencherCadastro("Enzo", "email.com", 998767, "1234@Teste", "1234@Teste")
});

Then("o sistema deve alertar no campo e-mail {string}", (mensagem) => {
    cadastroPage.msgEmail.should('contain', mensagem)
});