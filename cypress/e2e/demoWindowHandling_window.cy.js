/// <reference types="Cypress" />

describe('Handling new tab', function() 
{

it('Tab handling',function() {

cy.visit("http://qaclickacademy.com/practice.php")

cy.get('#opentab[href*=qaclick]').invoke('removeAttr','target').click()
// cy.wait(1000)
// cy.log('title of the page',cy.title())
cy.origin('https://www.qaclickacademy.com', () => {

cy.get('a>img[alt=Logo]').should('be.visible')
//going back to the previosu page
cy.go('back')

})
})
})