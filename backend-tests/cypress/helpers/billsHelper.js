const faker = require('faker')
const ENDPOINT_GET_BILLS = 'http://localhost:3000/api/bills'
const ENDPOINT_GET_BILL  = 'http://localhost:3000/api/bill/'
const ENDPOINT_POST_BILL = 'http://localhost:3000/api/bill/new'

function createBillRequestAndDelete(cy){
    cy.authenticateSession().then((response =>{
        const fakeBillPayload = {
        "value": faker.datatype.number(),
        "paid": faker.datatype.boolean()
        }
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_BILL,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: fakeBillPayload
        }).then((response  =>{
            const responseAsString = JSON.stringify(response)
            expect(responseAsString).to.have.string(fakeBillPayload.value)
        }))
       
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_BILLS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
          }).then((response =>{
            let lastId = response.body[response.body.length -1].id
            cy.request({
                method: "DELETE",
                url: ENDPOINT_GET_BILL+lastId,
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                }
            }).then((response =>{
                const responseAsString = JSON.stringify(response.body)
                expect(responseAsString).to.have.string('true')
            }))
          }))
    }))

}

module.exports = {
    createBillRequestAndDelete
}