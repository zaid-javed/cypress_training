/// <reference types="cypress" />

describe('Actions', () => {

  before(()=>{
    console.log("this is before")
  })

  beforeEach(()=>{
    console.log("this is before each")
  })

  it('just opens up a page', () => {
    cy.visit("/")
    // cy.get('#user-name').type("standard_user")
    // cy.get('#password').type("secret_sauce")

    cy.get('#user-name').as('khurram')
    cy.get('#password').as('furqan')
    cy.get('@khurram').type('standard_user')
    cy.get('@furqan').type('secret_sauce')
    cy.get('#login-button').click()


    cy.get('.header_secondary_container .title').should('have.text', 'Products')
    cy.get('.product_sort_container').select("Price (low to high)")


    // cy.get('.inventory_list').contains('Sauce Labs Backpack').within(() => {
    //   cy.get('.btn_inventory').click()
    // })

    cy.get('.inventory_item_price').each(($el, index)=>{
      const prices = ['$7.99', '$9.99', '$15.99','$15.99', '$29.99', '$49.99']
      expect($el).to.contain(prices[index])
      console.log($el.text())
    })

  })

  it('test case 2', () =>{
    cy.visit("/")
  })

  

  
})
