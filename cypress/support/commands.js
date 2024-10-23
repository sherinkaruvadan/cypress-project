// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath"/>

require('cypress-iframe');

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
.its('0.contentDocument.body').should('be.visible')
.then(cy.wrap)
})

require('@4tw/cypress-drag-drop') //drag and drop

import 'cypress-file-upload'; //file upload



 
//custom commands for clicking the link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})


//Overwrite Contains function
/*Cypress.Commands.overwriteQuery('contains',(originalFn,subject,filter,text,options={})=>{

  // Check if the second argument is a string, then it's the text
if (typeof text === 'object') {
 options = text;
 text = filter;
 filter = undefined;
}
 // Set `matchCase: false` in the options
 options.matchCase = false;


// Call the original `cy.contains()` with modified options
return originalFn(subject,filter,text,options);
}) */


//Commands for LOGIN

Cypress.Commands.add('login',(email, password)=>{
  
})



