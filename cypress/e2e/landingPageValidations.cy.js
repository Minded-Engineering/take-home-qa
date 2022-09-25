describe('Landing Page Validations', () => {
  
    beforeEach(() => {
      cy.visit('/')
    })
  
  
    it('CASE 1 - navigate to our landing page located on https://www.tryminded.com/', () => {  
      //validate that the site is fully loaded - implicit by complete visit method
      cy.url()
      .should('be.equal',`${Cypress.config("baseUrl")}/`)
    })
  
  
    it('CASE 2 - scroll to the bottom of the page.', () => {    
      cy.scrollTo('bottom')
    })
  
    
    it('CASE 3 - Close the banner "Get your first month for just $25"', () => {
      cy.get('.ico-close')
      .click()
      
      cy.contains('Get your first month for just $25')
      .should('not.be.visible')
    })
  
  
    it('CASE 4 - unfold the Diagnosis "Anxiety", located in the "What we treat." section and validate the user can read the description', () => {
      cy.get('.ico-close')
      .click()
      
      cy.get('.faq1_question')
      .contains('Anxiety')
      .should('be.visible')
      .click()
      
      cy.get('.faq1_answer')
      .should('be.visible')
      .contains('Generalized anxiety disorder')
    })
  
  
    it('CASE 5 - navigate to the "Locations" section (by clicking the option on the menu)', () => {
      cy.get('.mi-div-2-nav-links')
      .contains('Locations')
      .click()
  
      cy.url()
      .should('be.equal',`${Cypress.config("baseUrl")}/locations`)
    })
    
  })