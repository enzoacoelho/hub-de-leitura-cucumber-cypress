import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../pages/login-page'

Given('que acesso a tela de login', () => {
    cy.visit('login.html')
    cy.get('.text-xl').should('contain', 'Faça seu login para explorar seu universo literário.')
    cy.get('.login-header > h2').should('contain', 'Entre com sua conta')
});

When("eu tento logar como {string}", (tipoUsuario) => {
    cy.fixture('usuarios').then((dadosUsuario) => {
        const dados = dadosUsuario[tipoUsuario];
        loginPage.emailInput.type(dados.email);
        loginPage.passwordInput.type(dados.senha);
        loginPage.loginBtn.click();
    })
});

When('eu tento logar com o usuário {string} e a senha {string}', (usuario, senha) => {
    if (usuario) {
        loginPage.emailInput.clear().type(usuario)
    }

    if (senha) {
        loginPage.passwordInput.clear().type(senha)
    }

    loginPage.loginBtn.click()

});

Then('devo ser autenticado com sucesso', () => {
    loginPage.alertContainer.should('contain', 'Login realizado com sucesso!')
});

Then('o sistema deve exibir {string} e {string} na página inicial e menu do topo', (msgBoasVindas, nomeUsuario) => {
    switch (nomeUsuario) {
        case 'Bibliotecário Admin':
            cy.url().should('include', 'admin-dashboard');
            cy.get('.admin-header > h1').should('contain', msgBoasVindas)
            cy.get('.fw-bold').should('contain', nomeUsuario)
            break

        case 'Usuário Padrão':
            cy.url().should('include', 'dashboard');
            cy.get('h4').should('contain', msgBoasVindas)
            cy.get('.fw-bold').should('contain', nomeUsuario)
            break
    }
});

Then('não devo ser autenticado', () => {
    cy.url().should('not.include', 'dashboard');
    loginPage.loginBtn.should('be.visible');
});

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
    if (mensagem) {
        switch (mensagem) {
            case 'Email ou senha incorretos.':
                loginPage.alertContainer.should('contain', mensagem)
                //loginPage.passwordInput.should('have.class', 'is-invalid');
                break

            case 'Por favor, insira um email válido.':
                loginPage.msgErroEmail.should('contain', mensagem)
                loginPage.emailInput.should('have.class', 'is-invalid');
                break
        }

    }

});


