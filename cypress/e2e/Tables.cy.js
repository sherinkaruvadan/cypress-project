describe('Handling tables', ()=>{

    beforeEach('Visit page',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    //Checking number of rows and columns

    it('Check number of rows and columns',()=>{
        cy.get("table#productTable>tbody>tr").should('have.length','5')
        cy.get("table#productTable>thead>tr>th").should('have.length','4')
    })

    //checking cell data from specific row and column

    it('Check cell data from specific row and column',()=>{

        cy.get("table#productTable>tbody>tr:nth-child(4)>td:nth-child(2)")
        .contains("Smartwatch")
    })

    //read all row and column in first page

    it('Read all row and column in first page', ()=>{
        cy.get("table#productTable>tbody>tr")
        
        .each(($row,index,$rows)=>{

            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })

        })
    })

    //Pagination number

    // it('Pagination',()=>{

    //     cy.get(".pagination>li").then(($pages)=>{
    //         const totalPages = $pages.length
    //         cy.log(totalPages) //total number of pages
    //     })

    // })

    //pagination content

    it.only('Pagination data', ()=>{

        // let totalPages;
        // cy.get(".pagination>li").then(($pages)=>{
        //     const totalPages = $pages.length
        //     cy.log(totalPages) //total number of pages
        // })

        let totalPages = 4
        for(let p=1;p<=totalPages;p++){

            //check if more than one page exist
            if(totalPages>1){

                cy.log("Active page is ------"+p)
            // cy.get(`ul#pagination>li:nth-child(${p})`).click()
            cy.get("ul#pagination>li:nth-child("+p+")").click()
                cy.wait(1000)

                //reading
                cy.get("table#productTable>tbody>tr")
                .each(($row,index,$rows)=>{

                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(2)").then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })

            }
        }
    })
})