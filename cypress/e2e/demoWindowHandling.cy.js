/// <reference types="Cypress" />

describe('Javascript message box handling', function() 
{

it('Javascript box handling',function() {

cy.visit("http://qaclickacademy.com/practice.php")

cy.get('#alertbtn').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})



cy.get('[value="Confirm"]').click()
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

// cy.get('#opentab[href*=qaclick]').invoke('removeAttr','target').click()
// // cy.wait(1000)
// // cy.log('title of the page',cy.title())
// cy.get('a>img[alt=Logo]').should('be.visible')

// cy.go('back')

}  )
}  )