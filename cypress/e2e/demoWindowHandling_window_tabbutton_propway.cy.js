/// <reference types="Cypress" />

describe('Handling new tab', function() 
{

it('Tab handling',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// cy.get('#opentab[href*=qaclick]').invoke('removeAttr','target').click({timeout: 5000})

cy.get('#opentab[href*=qaclick]').then((tabopening =>{
    const hrefprop = tabopening.prop('href')

    cy.visit(hrefprop)
    cy.get(".preloader").should('not.be.visible')
cy.get('a>img[alt=Logo]').should('be.visible')
//going back to the previosu page
cy.go('back')
}))
})
})