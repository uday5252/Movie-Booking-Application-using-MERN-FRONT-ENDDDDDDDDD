import React, { useState } from 'react'
import Axios from "axios"
import {useNavigate} from "react-router-dom"

function Movies(props) {

    // Welcome Raju(Username) --> Signed user

    const navigate = useNavigate()

    const [movieDetails, setMovieDetails] = React.useState([])

    

    // Logic to connect to back end(http://localhost:9000/fetch/all/movies)
    Axios.get("https://movie-booking-application-back-end.onrender.com/fetch/all/movies")
        .then(function (result) {
            setMovieDetails(result.data) //[ {}, {}, {} ]
        })
        .catch(function (error) {
            console.log(error)
        })

        function displayMovieDetails(details)
        {
            props.details(details)
            // Logic to display particular movie details
            navigate("/moviedetails")
        }

    return (

        <>
            { props.e ? <h2 style={{textAlign: "center", fontWeight: 700, fontFamily: "sans-serif", fontSize: "18px"}}>Welcome, {props.e} you are successfully logged in!</h2> : null }

            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px", flexWrap: "wrap" }}>
                {
                    movieDetails.map(function (i) {
                        return <div class="card" style={{ width: "20rem", margin: "10px" }} >
                            <img onClick={function()
                                {
                                    displayMovieDetails(i)
                                }
                            } src={i.image_url} style={{ height: "200px" }} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ fontWeight: 600, fontSize: "20px" }}>{i.movie_name}</h5>
                                <h5 class="card-title" style={{ fontWeight: 200, fontSize: "15px" }}>{i.genre}</h5>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Movies