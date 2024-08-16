import { useState } from 'react';
import Movies from './Movies';
import Navbar from './Navbar';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import MovieDetails from './MovieDetails';
import LocationAndTheatre from './LocationAndTheatre';
import SeatLayout from './SeatLayout';
import BookSeats from './BookSeats';
import BookingHistory from './BookingHistory';


function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [particularMovieDetails, setparticularMovieDetails] = useState("")
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies e={email} details={setparticularMovieDetails} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin e={email} p={password} se={setEmail} sp={setPassword} />}></Route>
        <Route path="/moviedetails" element={<MovieDetails info={particularMovieDetails} />}></Route>
        <Route path="/locationandtheatre" element={<LocationAndTheatre seatFunction={setSelectedSeatsCount} />}></Route>
        <Route path="/seatlayout" element={<SeatLayout count={selectedSeatsCount}/>}></Route>
        <Route path="/bookseats" element={<BookSeats func={setSelectedSeatsCount}/>}></Route>
        <Route path="/bookings" element={<BookingHistory/>}></Route>
      </Routes>
    </>
  );
}

export default App;
