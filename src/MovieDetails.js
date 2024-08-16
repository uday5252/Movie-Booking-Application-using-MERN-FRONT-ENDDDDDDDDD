import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieDetails(props) {

    const navigate = useNavigate()

    function goToLocationAndTheatre()
    {
        navigate("/locationandtheatre")
    }

    return (
        <div>
            <div class="card mb-3" style={{ "max-width": "540px;" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={props.info.image_url} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" style={{fontSize: "25px", marginTop: "15px"}}>{props.info.movie_name}</h5>
                            <p style={{marginTop: "15px", fontSize: "22px"}} class="card-text">{props.info.description}</p>
                            <h4 style={{marginTop: "15px", fontWeight: 600, fontSize: "17px"}} class="card-title">{props.info.genre}</h4>
                            <h4 style={{marginTop: "15px", fontWeight: 600, fontSize: "17px"}} class="card-title">{props.info.censor}</h4>
                            <h4 style={{marginTop: "15px", fontWeight: 600, fontSize: "17px"}} class="card-title">{props.info.director}</h4>
                            {
                                props.info.cast.map(function (i) {
                                    return <div class="card" style={{"width": "18rem;"}}>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{i}</li>
                                        </ul>
                                    </div>
                                })
                            }
                            <button onClick={goToLocationAndTheatre} className='btn btn-danger' style={{marginTop: "20px"}}>Book Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails

// Some Locations
// Each location we will have some theatres
// Each theatre will have some timings
