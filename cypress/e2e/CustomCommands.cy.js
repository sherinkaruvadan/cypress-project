
//click on liks using label
//overwriting existing commands
//reusable custom command


describe('Custom Commands',()=>{

    it.skip('handling Links',()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        //direct method- without using custom command
        //cy.get('ul>li:nth-child(2) a').click();

        //using custom command
        cy.clickLink('Add/Remove Elements  ')
        cy.url().should('contain','add_remove_elements/')
    })


    it.skip ('Overwrite Existing Commands',()=>{

        cy.clickLink('add/remove elements  ') 
        cy.url().should('contain','add_remove_elements/')

    })

    it('Custom command for login',()=>{
     
    })
})