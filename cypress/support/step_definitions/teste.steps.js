const { Given, When, Then, link } = require('@badeball/cypress-cucumber-preprocessor')

Given('que acesso o site do Cucumber.io', () => {
	cy.visit('https://cucumber.io/');
});

When('clicar no link Documentation', () => {
  cy.get('.theme-layout-navbar-left > [href="/docs"]').click();
});

Then('deve exibir o título Introduction na página', () => {
  cy.get('h1').should('contain', 'Introduction');
});


When(`clicar no link Learn`, () => {
   cy.get('[href="/learn"]').click();
});

Then(`deve exibir o título Learn na página`, () => {
   cy.get('h1').should('contain', 'Learn BDD and Cucumber');
});




