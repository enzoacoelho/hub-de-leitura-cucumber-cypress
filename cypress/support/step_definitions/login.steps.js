import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../pages/login-page'

Given('que acesso a tela de login', () => {
    cy.visit('login.html')
    cy.get('.text-xl').should('contain', 'Faça seu login para explorar seu universo literário.')
    cy.get('.login-header > h2').should('contain', 'Entre com sua conta')
});

When('eu tento logar com o usuário {string}', (tipoUsuario) => {
    cy.fixture('usuarios').then((massa) => {
        const dados = massa[tipoUsuario];
        loginPage.emailInput.type(dados.email);
        loginPage.passwordInput.type(dados.senha);
        loginPage.loginBtn.click();
    });
});

Then('devo ser autenticado com sucesso', () => {
    loginPage.alertContainer.should('contain', 'Login realizado com sucesso!')
});

Then('o sistema deve exibir o Painel Administrativo', () => {
    cy.url().should('include', 'admin-dashboard');
    cy.get('.admin-header > h1').should('contain', 'Painel Administrativo')
    cy.get('.fw-bold').should('contain', 'Bibliotecário Admin')
});

Then('o sistema deve exibir Olá, usuário padrão!', () => {
    cy.url().should('include', 'dashboard');
    cy.get('h4').should('contain', 'Olá, Usuário Padrão!')
    cy.get('.fw-bold').should('contain', 'Usuário Padrão')
});

When('eu tento logar com o e-mail {string} e a senha vazia', (email) => {
    loginPage.emailInput.type(email);
    loginPage.loginBtn.click();
});

Then('não devo ser autenticado', () => {
    cy.url().should('not.include', 'dashboard');
    loginPage.loginBtn.should('be.visible');
});

Then('o campo de senha deve ser destacado com erro', () => {
    loginPage.passwordInput.should('have.class', 'is-invalid');
    loginPage.errorFeedback.should('exist').and('contain', 'Por favor, insira a senha.');
});

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
    loginPage.alertContainer.should('contain', mensagem)
});

When('eu tento logar com o usuário {string} mas com a senha {string}', (tipoUsuario, senha) => {
    cy.fixture('usuarios').then((massa) => {
        const dados = massa[tipoUsuario];
        loginPage.emailInput.type(dados.email);
        loginPage.passwordInput.type(senha);
        loginPage.loginBtn.click();
    });
});














