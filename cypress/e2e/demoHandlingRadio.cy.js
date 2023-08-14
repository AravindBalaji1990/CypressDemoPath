/// <reference types="Cypress" />

describe('Scenario to handle a radio button', function() 
{

it('click on a radio button',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get("input[value='radio1']").should('be.visible').and('have.length','1').click()
cy.get(".radioButton").should('have.length.at.least',2)
cy.get("label[for='radio1']").invoke('text').should('eq','\n                 Radio1\n                ')
cy.get("label[for='radio1']").invoke('attr','for').should('eq','radio1')
}  )
}  )