describe('My Test Suite',()=>{

    it('Data Driven Test',()=>{

        cy.fixture('orangehrm2.json').then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
             
            data. forEach((userdata)=>{

                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if(userdata.username=='Admin' && userdata.password == 'admin123'){

                    cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains(userdata.expected)

                    //logout after entering valid credential 
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.get(".oxd-dropdown-menu > li:last-child").click();


                }

                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").contains(userdata.expected)
                }

            })
        })
    })
})