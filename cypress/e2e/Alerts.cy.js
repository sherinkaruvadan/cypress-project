
describe('Alerts Test', ()=>{


    //1 Javascript alert

    it('JS Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:alert', (t)=>{
             expect(t).to.contain('I am a JS Alert') //validating text on alert window
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert') //alert window closed and verify the messasg
    })

    //2 Confirmation Alert

    it('Confirmation Alert - OK button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm') 
        })
        cy.get('#result').should('have.text', 'You clicked: Ok') //cypress automatically close alert window using ok button
        
    })

    it('Confirmation Alert - CANCEL button', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contain('I am a JS Confirm') 
            return false;
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel') //cypress automatically close alert window using cancel button
        
    })

    //3 Prompt Alert

    it ('Prompt Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome')
        })
        
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: welcome')


    })

    it('Prompt Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then(win=>{
            cy.stub(win, 'prompt').returns(null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: null')

    })

    //4 Authenticated Alert

     it.only('Authenticated Alert', ()=>{

        //cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username:'admin', password:'admin'}})

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('div[class="example"] p').should('have.contain','Congratulations!')
     })
})