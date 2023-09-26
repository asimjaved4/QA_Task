/// <reference types="cypress" />

describe('Patch requests APIs', () => {

    it('Update request', () => {

        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            body:
            {
                "name": "asim",
                "job": "Sr. SQA"
            }
        })
            .its('status')
            .should('equal', 200)

    })
})