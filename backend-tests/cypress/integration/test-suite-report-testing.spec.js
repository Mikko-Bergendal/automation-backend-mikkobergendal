
import * as billsHelpers from '../helpers/billsHelper'
import * as clientHelpers from '../helpers/clientHelpers'
import * as roomsHelpers from '../helpers/roomsHelper'
import * as reservationHelpers from '../helpers/reservationsHelper'

describe('Mochawesome-merge test suite', function(){
  
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

    it ('Create a reservation and delete it', function(){
        reservationHelpers.createReservationRequestAndDelete(cy)
    })
})
