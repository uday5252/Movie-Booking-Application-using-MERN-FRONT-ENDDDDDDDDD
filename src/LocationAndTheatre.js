import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./App.css"
import { useNavigate } from 'react-router-dom';
import { addSeatNumber } from './redux';
import { useDispatch } from "react-redux"

function LocationAndTheatre(props) {

    const navigate = useNavigate()

    const [locationsAndTheatresInfo, setLocationandTheatreInfo] = useState([]);
    const [locationName, setLocationName] = useState('');
    const [dates, setDates] = useState([]);

    const [displayTheatresInfo, setDisplayTheatresInfo] = useState(false)

    const [enteredDayName, setEnteredDayName] = useState("")

    

    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('https://movie-booking-application-back-end.onrender.com/locations')
            .then((output) => {
                setLocationandTheatreInfo(output.data.info);
            });
    }, []);

    function collectLocation(event) {
        setLocationName(event.target.value);
    }

    useEffect(() => {
        let info = [];
        for (let i = 0; i < 4; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);

            const dayName = currentDate.toLocaleString('default', { weekday: 'short' });
            const monthName = currentDate.toLocaleString('default', { month: 'short' });
            const date = currentDate.getDate();

            info.push({
                dayName: dayName,
                monthName: monthName,
                date: date,
            });
        }
        setDates(info);
    }, []);

    function dateClicked(recievedDayName) {
        setEnteredDayName(recievedDayName)
        // Logic to change boolen to true
        setDisplayTheatresInfo(true)
    }

    function collectSeatCount(recievedSeatCount) {
        dispatch(addSeatNumber(recievedSeatCount))
        props.seatFunction(recievedSeatCount)
    }

    function bookTheSeat()
    {
        navigate("/bookseats")
    }

    return (
        <div className="container mt-3">
            {locationName ? (
                <div className="d-flex gap-10 border border-danger p-3 m-2">
                    {dates.map((i, index) => (
                        <div style={{ cursor: "pointer" }} onClick={function () {
                            dateClicked(i.dayName)
                        }
                        } className={enteredDayName == i.dayName ? "apply" : null}>
                            <h3>{i.dayName.toUpperCase()}</h3>
                            <h3>{i.date}</h3>
                            <h3>{i.monthName.toUpperCase()}</h3>
                        </div>
                    ))}
                </div>
            ) : null}

            <div className="row">
                <div className="col-12 text-end">
                    <select onChange={collectLocation} className="form-select w-auto d-inline-block">
                        {locationsAndTheatresInfo.map((i, index) => (
                            <option key={index} value={i.location}>{i.location}</option>
                        ))}
                    </select>
                </div>
            </div>

            {
                displayTheatresInfo == true ? <>
                    <div style={{ marginTop: '20px' }}>
                        {locationsAndTheatresInfo.map((j, index) => {
                            if (locationName === j.location) {
                                return j.theatres.map((k, index) => (
                                    <div key={index} className="card mb-3" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{k.theatreName}</h5>
                                            <ul className="list-inline" style={{ display: "flex" }}>
                                                {k.showTimes.map((l, index) => (
                                                    
                                                            
                                                        
                                                        <button key={index} style={{ marginRight: '10px' }} 
                                                        onClick={bookTheSeat}
                                                        className="btn btn-outline-success">{l}</button>
                                                    

                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ));
                            }
                            return null;
                        })}
                    </div></> : null
            }
        </div>
    );
}

export default LocationAndTheatre;



// booststrap js, popper js, jquery 