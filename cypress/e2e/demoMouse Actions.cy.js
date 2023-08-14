/// <reference types="Cypress" />

describe('Mouse actions', function() 
{

it('Mouse actions ',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#autocomplete').rightclick()

    
})
})
