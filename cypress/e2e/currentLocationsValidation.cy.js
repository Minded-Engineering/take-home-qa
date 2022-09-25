describe('Current Locations Validations', () => {
  
    beforeEach(() => {
      cy.visit('/locations')
    })


    it('CASE 6 - re order the state list by "Name (Z-A)"', () => {
        cy.get('select')
        .select('Name (Z-A)')
        .should('have.value','name-desc')
      })  
  
      
    it('CASE 7 - Texas navigation Validation', () => {  
      cy.contains('Texas')
      .should('be.visible')
      .click()
      
      cy.url()
      .should('be.equal',`${Cypress.config("baseUrl")}/location/texas`)
    })
    
  })