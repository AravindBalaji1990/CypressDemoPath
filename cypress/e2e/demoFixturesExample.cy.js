/// <reference types="Cypress" />


describe('Fixtures demo', function() 
{
    before(function(){
        cy.fixture('data').then(function(datatotest){
            this.datatotest = datatotest;
        })
    })

it('Fixtures demo',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#name').scrollIntoView();
cy.get('#name').type(this.datatotest.name)
})
})