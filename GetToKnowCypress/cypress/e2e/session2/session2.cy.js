/// <reference types="cypress" />

describe('Actions', () => {

  before(()=>{
    console.log("this is before")
  })

  beforeEach(()=>{
    console.log("this is before each")
  })

  it.only('just opens up a page', () => {
    cy.visit("/")
    
    // Simple Login
    // cy.get('#user-name').type("standard_user")
    // cy.get('#password').type("secret_sauce")

    // Login with aliases
    // cy.get('#user-name').as('alpha')
    // cy.get('#password').as('beta')
    // cy.get('@alpha').type('standard_user')
    // cy.get('@beta').type('secret_sauce')
    // cy.get('#login-button').click()


    // // Dropdowns
    // cy.get('.header_secondary_container .title').should('have.text', 'Products')
    // cy.get('.product_sort_container').select("Price (low to high)")


    // Use of within()
    // cy.get('.inventory_list').contains('Sauce Labs Backpack').within(() => {
    //   cy.get('.btn_inventory').click()
    // })

    // Use of each()
    // cy.get('.inventory_item_price').each(($el, index)=>{
    //   const prices = ['$7.99', '$9.99', '$15.99','$15.99', '$29.99', '$49.99']
    //   expect($el).to.contain(prices[index])
    //   console.log($el.text())
    // })

  })

  it('test case 2', () =>{
    cy.visit("/")
  })

  

  
})
