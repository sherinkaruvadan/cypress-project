describe('File Uploads',()=>{
    
    it.skip('Single file upload',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('example.json') //uploading file should be in fixtures folder
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('div>h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain','example.json')
    })

    it.skip('File Upload - Rename', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'example.json', fileName:'myfile.pdf'}) //uploading file should be in fixtures folder
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('div>h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain','myfile')

    })

    it.skip('File Upload - Drag and Drop', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('example.json',{subjectType:'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('example.json')
    })

    it.skip('Multiple File Uploads',()=>{

         cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
         cy.get('#filesToUpload').attachFile(["example.json","test.pdf"])
    })

    it.only('File Upload - Shadow DOM',()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(' .smart-browse-input', {includeShadowDom:true}).attachFile('example.json')
        cy.wait(3000)

        cy.get('.smart-item-name',{includeShadowDom:true}).should('contain','example.json')
    })
})