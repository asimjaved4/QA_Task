/// <reference types="cypress" />

describe('Put requests APIs', () => {

    it('Update request', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body:
            {
                "name": "asim",
                "job": "SQA"
            }
        })
            .its('status')
            .should('equal', 200)

    })
})