describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
   
    cy.log('url opened : ', cy.url())
    cy.title().should('contains','Google')
    // claer the text box
    cy.get('div[class=a4bIc]>style+div+textarea').clear()
    // typed the data
    cy.get('div[class=a4bIc]>style+div+textarea').type('css selectors')
    //clicking the button
    // cy.get('input[value*=Google][data-ved$=CAk]').click()
    cy.wait(5000)
    cy.xpath('//input[@name="btnK" and contains(@data-ved,"CAk")]').click()
  })
})