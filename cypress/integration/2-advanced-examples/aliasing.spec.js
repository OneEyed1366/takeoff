/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/aliasing')
  })

  it('.as() - alias a DOM Element for later use', () => {
    // https://on.cypress.io/as

    // Alias a DOM Element for use later
    // We don't have to traverse to the Element
    // later in our code, we reference it with @

    cy.get('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn')

    // when we reference the alias, we place an
    // @ in front of its name
    cy.get('@firstBtn').click()

    cy.get('@firstBtn')
      .should('have.class', 'btn-success')
      .and('contain', 'Changed')
  })

  it('.as() - alias a route for later use', () => {
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment').its('response.statusCode').should('eq', 200)
  })
})
