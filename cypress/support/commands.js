// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import cadastroPage from '../support/pages/cadastro-page'

Cypress.Commands.add('preencherCadastro', (nome, email, telefone, senha, confirmarSenha) => {
    cadastroPage.campoNome.type(nome)
    cadastroPage.campoEmail.type(email)
    cadastroPage.campoTelefone.type(telefone)
    cadastroPage.campoSenha.type(senha)
    cadastroPage.campoConfirmaSenha.type(confirmarSenha)
    cadastroPage.termosUso.check()
    cadastroPage.botaoRegistrar.click()   
    cy.wait(100)
})

