/// <reference types="cypress" />
describe('Get requests APIs', () => {

    it('Get List Users', () => {
        const queryParameter = { page: 2 }
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParameter

        })
            .then((responce) => {
                expect(responce.status).to.eq(200)
                expect(responce.body.page).to.eq(2)
            })


    })
    it('Get Single Users', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        })
            .then((responce) => {
                expect(responce.status).to.eq(200)
                expect(responce.body.data).have.property('id', 2)
            })

    })
    it('Get Single User Not Found', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        })
            .then((responce) => {
                expect(responce.status).to.eq(404)

            })

    })
    it('Get List of Resource', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown'
        })
            .then((responce) => {
                expect(responce.status).to.eq(200)

            })

    })
    it('Get Single Resource', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2'
        })
            .then((responce) => {
                expect(responce.status).to.eq(200)

            })

    })
    it('Get Single Resource Not Found', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        })
            .then((responce) => {
                expect(responce.status).to.eq(404)

            })

    })
    it('Get Delayed Response', () => {
        const queryParameter = { delay: 3 }
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParameter
        })
            .then((responce) => {
                expect(responce.status).to.eq(200)

            })

    })
})