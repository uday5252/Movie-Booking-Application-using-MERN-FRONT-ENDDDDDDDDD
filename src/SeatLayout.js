import Axios from 'axios'
import React, { useState } from 'react'
import "./App.css"
import Seat from './Seat'
import { useNavigate } from 'react-router-dom'

function SeatLayout(props) {

    const navigate = useNavigate()

    const [seatsSelected, setSeatsSelected] = useState(props.count)

    const [rowCount, setRowCount] = useState(10)
    // rowCount = 10
    const [colCount, setColCount] = useState(15)
    // colCount = 15

    const totalSeats = rowCount * colCount

    const seatGrid = []

    for (let i = 1; i <= totalSeats; i++) {
        seatGrid.push(<Seat seatnumber={i} seatCount={props.count} />)
    }

    const [count, setCount] = useState(0)

    function collect() {
        setCount(count + 1)
    }

    // 150 RS

    function pleaseMakeThePayment() {
        Axios.post("https://movie-booking-application-back-end.onrender.com/create/order", { amount: seatsSelected * 150 })
            .then(function (result) {
                handlePaymentVerify(result.data.output)
            })
    }

    async function handlePaymentVerify(recievedData)
    {
        console.log("Hi")
        // Logic to do the verification
        const options = {
            key: "rzp_test_lHlNdrDCdx5Dmf",
            amount: recievedData.amount,
            currency: recievedData.currency,
            name: "Raju",
            description: "Openheimer",
            order_id: recievedData.id,
            handler: async function(output)
            {
                // Logic for verification
                console.log(output)
            }
        }

        new window.Razorpay(options).open()
        navigate("/bookings")

    }

    return (
        <>
            <h3 style={{ textAlign: "center" }}>PRICE: 150</h3>
            {seatsSelected == count ? <>
                <div onClick={collect} className='disable' id='parent' style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 50px)`, gridGap: "10px", marginTop: "100px", marginLeft: "50px" }}>
                    {seatGrid}
                </div></> : <div onClick={collect} className='parent' style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 50px)`, gridGap: "10px", marginTop: "100px", marginLeft: "50px" }}>
                {seatGrid}
            </div>}
            <button className='btn btn-success' onClick={pleaseMakeThePayment}>Make Payment</button>
        </>
    )
}

export default SeatLayout

// Razorpay --> Payment Gateway --> Card, UPI, Applications, .................. --> Dummy Payment