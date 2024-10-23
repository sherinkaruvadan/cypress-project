
describe("Check UI Elements", ()=>{

    it("Checking Radio buttons", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
       cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')

        //selecting radio button
        cy.get('input#male').check()
        cy.get('input#male').should('be.checked')
        cy.get('input#female').should('not.be.checked') 

       /* cy.get('input#male').should('be.visible').check().should('be.checked')
        cy.get('input#female').should('be.visible').should('not.be.checked') */

        cy.get('input#female').check()
        cy.get('input#female').should('be.checked')
        cy.get('input#male').should('not.be.checked') 
    })

    it("Checkbox Selection", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility and selection of checkboxs
        cy.get('input#sunday').should('be.visible').check().should('be.checked')

        //unselecting checkbox
        cy.get('input#sunday').uncheck().should('not.be.checked')


        //selecting all checkboxes

        cy.get('input.form-check-input[type="checkbox"]').should('be.visible')
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')


        //selectinf first and last checkbox
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')



    })
})