/// <reference types="cypress" />

describe('Post requests APIs', () => {

    it('User Create Request', () => {
        cy.fixture('user').then((userData) => {
            const RequestBody = userData
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: RequestBody
            })
                .then((responce) => {
                    expect(responce.status).to.eq(201)
                    expect(responce.body.name).to.eq(RequestBody.name)
                    expect(responce.body.job).to.eq(RequestBody.job)
                })
        })
    })
    it('User Register Successful Request', () => {
        cy.fixture('register').then((userRegister) => {
            const RequestBody = userRegister
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/register',
                body: RequestBody
            })
                .then((responce) => {
                    expect(responce.status).to.eq(200)

                })
        })


    })
    it('User Register Unsuccessful Request', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                "email": "sydney@fife"
            }
        })
            .then((responce) => {
                expect(responce.status).to.eq(400)
                expect(responce.body.error).to.eq("Missing password")

            })

    })
    it('User Register Successful Request', () => {
        cy.fixture('login').then((loginData) => {
            const RequestBody = loginData
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: RequestBody
            })
                .then((responce) => {
                    expect(responce.status).to.eq(200)

                })
        })

    })
    it('User Register Successful Request', () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "peter@klaven"
            }
        })
            .then((responce) => {
                expect(responce.status).to.eq(400)

            })


    })

})