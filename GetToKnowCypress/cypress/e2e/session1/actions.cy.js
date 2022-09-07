/// <reference types="cypress" />

context('Actions', () => {

  it('just opens up a page', () => {
    cy.visit("/")
    cy.get('.nav-not-signedin-signin > .action').click()
  })

  
})
