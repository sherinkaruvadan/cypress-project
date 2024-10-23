describe('Handle tab', ()=>{

    it('Approach1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows') //parent window

       // cy.get("a[href='/windows/new']").click()

       //cy.get('.example>a').click()

       cy.get('.example>a').invoke('removeAttr', 'target').click() //to open the window in same tab
       cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //child window

       //operations
       // cy.get("div[class='example'] h3").should('have.text', 'New Window')
        cy.get('div.example > h3').should('have.text', 'New Window')
        cy.wait(3000)

       cy.go('back') //back to parent tab
    })

    it.only('Approach2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows') //parent window
        
        cy.get('.example>a').then(e=>{
            let url = e.prop('href' )
           // cy.wait(2000)
            cy.visit(url)
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //child window
        cy.wait(3000)

       cy.go('back') //back to parent tab

    })
})