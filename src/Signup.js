import React from 'react';
import './Signup.css';
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate()

  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")



  function collectEmail(event) {
    setEmail(event.target.value)
  }

  function collectUsername(event) {
    setUsername(event.target.value)
  }

  function collectPassword(event) {
    setPassword(event.target.value)
  }

  function collectConfirmPassword(event) {
    setConfirmPassword(event.target.value)
  }

  function sendSignupData() {
    // Logic to send all the 4 details to express appn --> create that data inside the database(mongodb)
    Axios.post("https://movie-booking-application-back-end.onrender.com/signup", {
      myUsername: username,
      myEmail: email,
      myPassword: password,
      myConfirmPassword: confirmPassword
    })
      .then(function (output) {
        if(output.data.message == "Registration successfull!")
        {
           navigate("/signin")
        }
        else
        {
          navigate("/signup")
        }
      })
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">


              <h3 className="card-title text-center mb-4">Signup</h3>

              <div className="form-group">
                <label>Enter Username:</label>
                <input type="text" className="form-control" name="username" onChange={collectUsername} />
              </div>
              <div className="form-group">
                <label>Enter Email:</label>
                <input type="email" className="form-control" name="email" onChange={collectEmail} />
              </div>
              <div className="form-group">
                <label>Enter Password:</label>
                <input type="password" onChange={collectPassword} className="form-control" name="password" />
              </div>
              <div className="form-group">
                <label>Enter Confirm Password:</label>
                <input type="password" className="form-control" name="confirmpassword" onChange={collectConfirmPassword} />
              </div>
              <button type="submit" onClick={sendSignupData} className="btn btn-primary btn-block">Signup</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
