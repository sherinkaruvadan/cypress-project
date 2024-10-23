describe('CSSLocators', function(){
    //  it('Test1', function(){
    //     cy.visit('http://www.automationpractice.pl/index.php')
    //     cy.get('input#search_query_top').type('dress')
    //     cy.get('button[name = "submit_search"').click()
    //     cy.get('span.lighter').contains('dress')
    // })

    it('Test2', function(){
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    })
})