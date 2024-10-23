describe("Handle dropdwons", ()=>{

    it.skip('dropdown with select', ()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        
        cy.get('#zcf_address_country')
        .select('India')
        .should('have.value','India')
    })


    it.skip('dropdown without select', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{enter}')

        //cy.get('#select2-billing_country-container').should('have.text', 'India')
        cy.get('#select2-billing_country-container').should('contain.text', 'India')
        
        
    })

    it.skip('Auto suggested dropdown', ()=>{

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Islam')
        cy.get('.suggestions-dropdown').should('be.visible')
        cy.get('.suggestion-link').should('have.length', 6)
        cy.get('.suggestion-link').contains('Islamophobia').click()
        cy.title().should('contain','Islamophobia')
        
        
    })

    it('Dynamic dropdown', ()=>{

        cy.visit('https://www.google.com/')
        cy.get('textarea.gLFyf#APjFqb').type('Islam')
        cy.wait(3000)
       // cy.get('div.wM6W7d>span').contains('islamic calendar').click()
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text() == 'islamic calendar'){
                cy.wrap($el).click()
            }
        })
        cy.get('textarea.gLFyf#APjFqb').should('contain','islamic calendar')
        
    })
})