//before 
//after
//beforeEach
//afterEach

describe('My Test Suite',()=>{

    before(()=>{
        cy.log("----Lauch App-----")
    })

    after(()=>{
        cy.log("---close app----")
    })

    beforeEach(()=>{
        cy.log("---Login----")
    })

    afterEach(()=>{
        cy.log("---Logout---")
    })

    it('Search',()=>{
        cy.log("**** searching ****")
    })

    it('Advanced Search',()=>{
        cy.log("**** advanced searching ****")
    })

    it('Listing Products',()=>{
        cy.log("**** listing ****")
    })
})