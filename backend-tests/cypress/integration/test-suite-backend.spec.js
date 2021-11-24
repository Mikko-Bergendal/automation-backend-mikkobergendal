/// <reference types="cypress" />

import * as clientHelpers from '../helpers/clientHelpers'

describe('testing auth', function(){
  it ('test case 1', function(){
      cy.authenticateSession().then((response =>{
          cy.request({
            method: "GET",
            url: 'http://localhost:3000/api/clients',
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
          }).then((response =>{
              cy.log(response.body[0].id)
              cy.log(response.body[0].created)
              cy.log(response.body[0].name)
              cy.log(response.body[0].email)
              cy.log(response.body[0].telephone)
          }))
      }))
  })

  // POST request to create client
  it.only ('test case 2', function(){
      cy.authenticateSession().then((response =>{
          let fakeClientPayload = clientHelpers.createRandomClientPayload()
          cy.request({
              method: "POST",
              url: 'http://localhost:3000/api/client/new',
              headers: {
                  'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                  'Content-Type': 'application/json'
              },
              body: fakeClientPayload
          }).then((response  =>{
              const responseAsString = JSON.stringify(response)
              expect(responseAsString).to.have.string(fakeClientPayload.name)
          }))
          // GET request to fetch all clients
          cy.request({
            method: "GET",
            url: 'http://localhost:3000/api/clients',
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
          }).then((response =>{
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(fakeClientPayload.name)
            expect(responseAsString).to.have.string(fakeClientPayload.email)
            expect(responseAsString).to.have.string(fakeClientPayload.telephone)
          }))
      }))
  })
})





