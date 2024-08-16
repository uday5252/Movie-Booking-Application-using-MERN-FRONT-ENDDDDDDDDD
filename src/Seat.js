
import { useState } from "react"
import { useSelector } from "react-redux"

function Seat(props) {

    const [seatsSelected, setSeatsSelected] = useState(props.seatCount)//3

    const [seatSelected, setSeatSelected] = useState(false)

    function handleSeatButton() {
        setSeatSelected(true)
    }


    return (
        <div>
            <button className={seatSelected == true ? 'seatbutton' : ''} onClick={handleSeatButton} style={{ border: "1px solid black", width: "30px", height: "30px", textAlign: "center" }}>
                {props.seatnumber}
            </button>
        </div>

    )
}

export default Seat