/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling Webtables', function() 
{

it('Handling Webtables in the webpage',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#product').first().scrollIntoView();
cy.get("tr td:nth-child(2)").each(($el, index, text)=>{
    const data = $el.text()
    if(data.includes("JMETER")){
        cy.get(     "tr td:nth-child(2)").eq(index).next().then(function(price)
        {
            const pricetext = price.text()
            expect(pricetext).to.equal('25')
            
        })
    }
})
})
})