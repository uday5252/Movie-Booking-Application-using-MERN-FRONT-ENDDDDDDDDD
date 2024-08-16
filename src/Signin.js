import { useState } from 'react';
import './Signin.css';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signin(props) {

    const navigate  = useNavigate()

    const [ message, setMessage ] = useState("")

    const handleEmailChange = (e) => {
        props.se(e.target.value);
    };

    const handlePasswordChange = (e) => {
        props.sp(e.target.value);
    };

    function pleaseSignin() {
        // Logic to send email and password to the express.
        Axios.post("https://movie-booking-application-back-end.onrender.com/signin",
            {
                myEmail: props.e,
                myPassword: props.p
            }

        )
            .then(function (result) {
                if(result.data.message == "Login successfull!")
                {
                    navigate("/movies")
                }
                else
                {
                    navigate("/signin")
                }
            })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            { message ? message : null }
                            <h3 className="card-title text-center mb-4">Signin</h3>

                            <div className="form-group">
                                <label>Enter Email:</label>
                                <input type="email" className="form-control" name="email" onChange={handleEmailChange} />
                            </div>
                            <div className="form-group">
                                <label>Enter Password:</label>
                                <input type="password" className="form-control" name="password" onChange={handlePasswordChange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={pleaseSignin}>Signin</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
