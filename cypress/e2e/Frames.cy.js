

describe('Handling frames',()=>{

    it('Approach1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
       let iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body').should('be.visible')
            .then(cy.wrap) 

            iframe.clear().type('Sherin {cmd+a}');
            cy.get("button[title='Bold']")

})

it('Approach2-by using custom command', ()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.getIframe('#mce_0_ifr')
    
   

})

it.only('Approach3-by using cypress iframe plugin', ()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr')

})
    })

 