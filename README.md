This repository contains automated end-to-end tests using Cypress for a web application. The goal of these tests is to ensure key functionalities of the cypress commands as expected.

Technologies:
-------------  
Cypress: End-to-end testing framework  
JavaScript: Scripting language for test logic  
Mocha: Test runner (default with Cypress)  


Prerequisites:
--------------  
Node.js: Ensure that Node.js is installed on your machine.  
Cypress: This project uses Cypress for automated testing.

Setup and Installation:  
----------------------- 
Clone the repository: git clone https://github.com/sherinkaruvadan/cypress_tests.git  
cd cypress_tests  

Install dependencies: npm install  
Open Cypress test runner: npx cypress open  
Run tests via CLI: You can run all tests in headless mode with: npx cypress run  

## Folder Structure:
cypress_peoject/ │ ├── cypress/ │ ├── fixtures/ # Test data (e.g., mock responses) │ ├── e2e/ # Actual test cases │ │ └── MyFirstTest.cy.js # Example test file for login functionality │ └── support/ # Reusable functions and commands │ ├── cypress.config.js # Cypress configuration file ├── package.json # Project dependencies and scripts └── package-lock.json # Project documentation



