/// <reference types="Cypress" />

describe('Handling new window', function() 
{

it('new window handling',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#openwindow').as('newwindowbutton');
cy.get('@newwindowbutton').click();
cy.visit('http://www.qaclickacademy.com/', { newTab: true });
cy.contains('h1', 'QAClick').should('be.visible');
// cy.get('#some-element-id').click();
// ... continue with other interactions and assertions in the new window


// cy.window().then((win) => {
//     // The "win" variable holds a reference to the new window
//     // Set the new window as the subject in the Cypress chain
//     cy.wrap(win).as('newWindow');
//   });
  
// cy.get('@newWindow').then((win) => {
//     // Now you have access to the new window in the Cypress chain
//     // You can use it to interact with elements or perform assertions
//     // For example, you can check the title of the new window
//     cy.wrap(win.document).its('title').should('contain', 'QAClick');
//   });
    

  
})
})