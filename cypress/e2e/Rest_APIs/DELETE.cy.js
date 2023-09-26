/// <reference types="cypress" />

describe('Delete requests APIs', () => {

    it('Delete request', () => {

        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
          
        })
            .its('status')
            .should('equal', 204)

    })
})