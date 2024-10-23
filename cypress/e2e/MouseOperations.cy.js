describe('Mouse Operations',()=>{

    it.skip('Mouse Hover',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        // Trigger the mouseover first and wait for the dropdown content to be visible
        cy.get("button.dropbtn").trigger('mouseover');

        cy.wait(1000)
        
        // Assert that the dropdown content becomes visible
        cy.get('div.dropdown-content').should('be.visible');
        
        // Then click the dropdown button (if required)
        cy.get("button.dropbtn").click(); 
        
        // Assert that the dropdown links are visible
        cy.get('div.dropdown-content>a').should('be.visible');
    })

    it.skip('Right click',()=>{

        //Approach 1
        cy.visit("https://vinothqaacademy.com/mouse-event/")
        cy.get('button#rightclick').trigger('contextmenu')
        cy.get('div#myDiv').should('be.visible')
        cy.get('ul>center>a').first().should('contain','Registration Form')

        //Approach2

        cy.visit("https://vinothqaacademy.com/mouse-event/")
        cy.get('button#rightclick').rightclick()
        cy.get('div#myDiv').should('be.visible')
        cy.get('ul>center>a').first().should('contain','Registration Form')

    })

    it.skip('Double click',()=>{

        cy.visit("https://vinothqaacademy.com/mouse-event/")
        cy.get('button#dblclick').trigger('dblclick')
        cy.wait(3000)
        cy.get('#demo').should('be.visible')
        cy.get('#demo').should('have.text', 'Double Click Action is Performed')
    })

    it.skip('Drag and Drop',()=>{

        cy.visit("https://vinothqaacademy.com/mouse-event/")
        cy.get('#draggableElement').drag('#droppableElement') //drag and adrop

    })
        //another drag and drop
       it.skip('Another drag and drop',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(2000);
        cy.get('#draggable').should('be.visible')
        cy.get('#droppable').should('be.visible')

        cy.get('#draggable').drag('#droppable',{force:true})

       })
        
 

    it.only('Scrolling',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(2000)
       cy.get("#colors>option[value='white']").scrollIntoView()
       cy.get("#colors>option[value='white']").should('be.visible')
       cy.wait(2000)
        cy.get("#colors>option[value='blue']").scrollIntoView({duration:2000}).should('be.visible') //controllling the speed of scroll
       


    })
})