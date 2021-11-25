/// <reference types="cypress" />

import * as billsHelpers from '../helpers/billsHelper'
import * as clientHelpers from '../helpers/clientHelpers'
import * as roomsHelpers from '../helpers/roomsHelper'

describe('test suite 1', function(){
  

  // POST request to create client
    it ('Create a new client', function(){
        clientHelpers.createClientRequest(cy)
    })

  // GET request to fetch all clients
    it ('Get all clients', function(){
        clientHelpers.getAllClientsRequest(cy)
    })

    it ('Create a client and delete it', function(){
        clientHelpers.createClientRequestAndDelete(cy)
    })

    it ('Create a bill and delete it', function(){
        billsHelpers.createBillRequestAndDelete(cy)
    })

    it ('Create a room and delete it', function(){
        roomsHelpers.createRoomRequestAndDelete(cy)
    })
})





