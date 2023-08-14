/// <reference types="Cypress" />

describe('View port', function() 
{

it('view port ',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // cy.viewport(550, 750) // Set viewport to 550px x 750px
    cy.viewport('iphone-6') // Set viewport to 375px x 667px
})
})
