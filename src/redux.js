
import { createStore } from "redux"


const initialData = {
    seatNumber: 0
}

export function addSeatNumber(seatNo)
{
    return{
        type: "ADD_SEAT_NUMBER",
        payload: seatNo
    }
}

const seatReducer = (state = initialData, action) =>
{
    if(action.type == "ADD_SEAT_NUMBER")
    {
        // Logic to add the seat number to the redux store
        console.log({ seatNumber: action.payload })
        return { seatNumber: action.payload }
    }
    return state
}

export const myStore = createStore(seatReducer)