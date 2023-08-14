/// <reference types="Cypress" />

describe('Javascript message box handling', function() 
{

it('Javascript box handling',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// Intercept the JavaScript alert
cy.on('window:alert', (message) => {
  // Print the alert message (optional)
  console.log('Alert message:', message);

  // Click "OK" on the alert
  cy.get('body').then(($body) => {
    if ($body.find('button').contains('OK').length > 0) {
      cy.contains('OK').click();
    } else {
      cy.get('button').contains('OK').click();
    }
  });

}  )
}  )
})ax` `

/** Visit the webpage with a JavaScript alert
cy.visit('https://example.com');

// Intercept the JavaScript alert
cy.on('window:alert', (message) => {
  // Print the alert message (optional)
  console.log('Alert message:', message);

  // Click "OK" on the alert
  cy.get('body').then(($body) => {
    if ($body.find('button').contains('OK').length > 0) {
      cy.contains('OK').click();
    } else {
      cy.get('button').contains('OK').click();
    }
  });
});**/