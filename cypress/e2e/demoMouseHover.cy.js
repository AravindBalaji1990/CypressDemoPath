/// <reference types="Cypress" />

describe('Mouse hover handling', function() 
{

it('Mouse hover handling',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#mousehover').scrollIntoView()
cy.get('#mousehover').click()
cy.get('a[href$=top]').should('be.visible')
cy.get('a[href$=top]').click()


})
})