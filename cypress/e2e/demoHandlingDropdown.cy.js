/// <reference types="Cypress" />

describe('Scenario to handle a dropdown', function() 
{

it('Select the dropdown values',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // i get the dropdown using text linked to the dropdown option
    // cy.get("#dropdown-class-example").select('Option1')

    //get the dropdown using index value
    // cy.get("#dropdown-class-example").select(2)

    //looping and checking the attributes value and selecting from the dropdown
    cy.get("#dropdown-class-example").then(($dropdown)=>{
        const options = $dropdown.find('option')
        options.each((index, option)=>{
            cy.wrap(option).invoke('val').then((value)=>{
                cy.wrap($dropdown).select(value);
            })
        })
    })
})
})