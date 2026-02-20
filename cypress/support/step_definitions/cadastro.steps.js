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
    cy.preencherCadastro(nomeGerado, email, 998767, senha, senha, 1)
    
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

When('eu tento me cadastrar com {string}', (cenarioInvalido) => {
    nomeGerado = faker.person.fullName()

    const emailValido = faker.internet.email()
    const senhaValida = '1234@Teste'

    switch (cenarioInvalido) {

        case 'email já existente':
            cy.fixture('usuarios').then((massa) => {
                cy.preencherCadastro(
                    nomeGerado,
                    massa.admin.email,
                    998767,
                    massa.admin.senha,
                    massa.admin.senha,
                    1
                )
            })
            break

        case 'senha e confirmar senha diferentes':
            cy.preencherCadastro(
                nomeGerado,
                emailValido,
                998767,
                senhaValida,
                'SenhaDiferente123',
                1
            )
            break

        case 'campos obrigatórios vazios':
            cadastroPage.botaoRegistrar.click()
            break

        case 'email em formato inválido':
            cy.preencherCadastro(
                nomeGerado,
                'email.com',
                998767,
                senhaValida,
                senhaValida,
                1
            )
            break

        default:
            throw new Error(`Cenário inválido não mapeado: ${cenarioInvalido}`)
    }
})

Then('o sistema deve exibir a {string} no cadastro', (mensagemErro) => {

    switch (mensagemErro) {

        case 'Erro ao criar conta. Tente novamente.':
            cadastroPage.msgAlerta.should('contain', mensagemErro)
            break

        case 'Senhas não coincidem':
            cadastroPage.msgSenha.should('contain', mensagemErro)
            break

        case 'Nome deve ter pelo menos 2 caracteres':
            cadastroPage.msgNome.should('contain' , mensagemErro)
            break

        case 'Email válido é obrigatório':
            cadastroPage.msgEmail.should('contain' , mensagemErro)
            break

        default:
            throw new Error(`Cenário inválido não mapeado: ${mensagemErro}`)
    }
   
});

Then(`os {string} devem ser marcados como inválidos`, (campo) => {
     switch (campo) {

        case 'fica_invalido_senhas':
            cadastroPage.campoConfirmaSenha.should('have.class', 'is-invalid');
            break

        case 'fica_invalido_obrigatorios':
            cadastroPage.termosUso.should('have.class', 'is-invalid');
            cadastroPage.campoSenha.should('have.class', 'is-invalid');
            break
            
    }
});



