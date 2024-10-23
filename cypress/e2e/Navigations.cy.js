describe('Navigation',()=>{

    it('Navigation Test',()=>{

        cy.visit("https://www.google.com/")
        cy.get("a[aria-label='Gmail ']").click()
        cy.get('.header__aside__buttons > .button--medium').contains('Sign in')
        cy.go('back')
        cy.go('forward')
    })
})