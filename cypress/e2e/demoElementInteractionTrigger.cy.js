/// <reference types="Cypress" />

describe('Facebok Registration', () => {
  it('Facebook create account', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.trigger-input-range').invoke('val', 25).trigger('change').get('input[type=range]').siblings('p').should('have.text', '25')
}),
it.only('Juice Feedback', () => {
  cy.visit('https://juice-shop.herokuapp.com/')
  cy.get('img.logo+span').invoke('text').should('eq', ' OWASP Juice Shop ')
  cy.get('button[class=\'mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted\']').click();
  cy.get('a[aria-label=\'dismiss cookie message\']').click()
  cy.get('button[mattooltipposition=\'below\'][class=\'mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base\']').click();
  cy.get('mat-nav-list[role=\'navigation\']>a[routerlink=\'/contact\']>span>span[class=\'menu-text truncate\']').click();
  cy.get('#rating span').invoke('val', '2★').trigger('change',{force: true})
})
})