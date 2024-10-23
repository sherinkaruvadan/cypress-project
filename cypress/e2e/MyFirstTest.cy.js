
describe('My First Test', () => {
  it('Visits the Facebook login and login', () => {
    cy.visit('www.facebook.com')
    cy.get('[data-testid="royal_email"]').should('be.visible').should('be.enabled').type('sherimolk@gmail.com')
    cy.get('[data-testid="royal_pass"]').should('be.visible').should('be.enabled').type('etaiecs050')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.url().should('include', 'facebook')
    cy.title().should('eq', 'Facebook')
  })
})
describe('My First Test', function () {
  it('test1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
    cy.get('[name = "username"]').should('be.visible').type('Admin')
    cy.get('input[name = "password"]').should('be.visible').type('admin123')
    cy.get('[type = "submit"]').click()
    cy.url().should('contain', 'dashboard')

  })

  // it('test2', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.title().should('contain', 'Orange')

  // })
})
