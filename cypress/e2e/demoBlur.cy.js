// <reference types="Cypress" />

describe('View port', function() 
{

it('view port ',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#name').focus().type('javascript').blur()
})
})
