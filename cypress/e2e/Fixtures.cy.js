describe('My Test Suite',()=>{


    //Direct Access
   /* it('FixturesDemoTest',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.wait(2000)
            cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains(data.expected)

        })
    }) */

    //Access through hook - for multiple it blocks

    let userdata;
    before(()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata = data;
        })
    })

    it('Fixture Demo',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            cy.wait(2000)
            cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains(userdata.expected)


    })
})