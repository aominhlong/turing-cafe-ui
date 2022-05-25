context('Homepage', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
  
    it('should have a title', () => {
        cy.get('.app-title').contains('Turing Cafe Reservations')
    })

    it('should have input fields', () => {
        cy.get('[placeholder="Name"]').should("exist")
        cy.get('[placeholder="Date(mm/dd)"]').should("exist")
        cy.get('[placeholder="Time"]').should("exist")
        cy.get('[placeholder="Number of guests"]').should("exist")
    })

    it('should have reservations', () => {
        cy.get('.allRes').children().should('exist')
    })

    it('should keep the value of the input fields', () => {
        cy.get('[placeholder="Name"]').type("Nick")
        cy.get('[placeholder="Date(mm/dd)"]').type("1/02")
        cy.get('[placeholder="Time"]').type("2:30")
        cy.get('[placeholder="Number of guests"]').type("2")

        cy.get('[placeholder="Name"]').should("have.value", "Nick")
        cy.get('[placeholder="Date(mm/dd)"]').should("have.value", "1/02")
        cy.get('[placeholder="Time"]').should("have.value", "2:30")
        cy.get('[placeholder="Number of guests"]').should("have.value", "2")
    })

    it('should add a new reservation to the page', () => {
        cy.get('[placeholder="Name"]').type("Nick")
        cy.get('[placeholder="Date(mm/dd)"]').type("1/02")
        cy.get('[placeholder="Time"]').type("2:30")
        cy.get('[placeholder="Number of guests"]').type("2")
        cy.get('.resy-container > :nth-child(1) > button').click()

        cy.get('.allRes > :nth-child(10)').should('exist')
    })
})