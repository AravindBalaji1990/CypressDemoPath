/// <reference types="Cypress" />


describe('Fixtures demo', function() 
{
it('Fixtures demo',function() {      
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// scroll to the specific element in webpage
cy.get('#name').scrollIntoView();
// get the data from fixture
cy.fixture('data').then(function(testdata){
    cy.get('#name').type(testdata.name)
    cy.wait(2000)
    cy.get('#name').clear()
    cy.wait(2000)
    cy.get('#name').type(testdata.demo)
})
})
})