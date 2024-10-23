
describe("Assertions demo", ()=>{

    it("Implicit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should and

        /* cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm') */

        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm') */

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm') 
        .and('not.contain', 'orangeHRM')


        cy.title().should('include','Orange')
        .and('not.eq','orange')
        .and('eq','OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('exist')
        .should('be.visible') //logo exist

       // cy.xpath('//a').should('have.length','5') //number of links using anchor


        cy.get('input[placeholder = "Username"]').type("Admin") // provide text to username field
        cy.get('input[placeholder = "Username"]').should('have.value','Admin') //verify the text is same

    })


    //Explicit Assertion

    it("Explicit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //expect assert

        cy.get('input[placeholder = "Username').type("Admin")
        cy.get('input[placeholder = "Password"]').type("admin123")
        cy.get('.oxd-button').click()
        
        let expName = 'thien Landa1';

        //let expName = cy.get('.oxd-userdropdown-name')

        cy.get('.oxd-userdropdown-name').then((x)=>{

            let actName = x.text()

            expect(actName).to.equal(expName) //BDD
            //expect(actName).to.not.equal(expName)

            //assert.equal(actName,expName) //TDD
        })
    })
})