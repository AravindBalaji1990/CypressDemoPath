/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling Frames', function() 
{

it('Handling Frames in the webpage',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#mousehover').scrollIntoView()
//going into frame
cy.frameLoaded('#courses-iframe') 
cy.iframe().find('li>a[href=mentorship]').first().click()
cy.wait(2000)
cy.iframe().find('section.page-title h1').invoke('text').should('eq','Mentorship')
//coming out of frame
cy.get('a+button.btn.btn-primary').should('be.')
})
})