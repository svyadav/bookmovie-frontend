import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import TheatreDetails from './Components/TheatreDetails'

import 'bootstrap/dist/css/bootstrap.min.css';

import Theatre from './Components/Theatre';
import Payment from './Components/Payment';
import Contact from './Components/Contact';
import Movies from './Components/Movies';
import AddMovie from './Components/AddMovie';
import EditMovie from './Components/EditMovie';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

function App() {
  return <>
  <BrowserRouter>

  <Routes>
  <Route path="/" element={<LandingPage/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* <Route path="/theatre" element={<Theatre/>}/> */}
    {/* <Route path="/theatre2" element={<NewBook/>}/> */}
    <Route path="/theatre/:id" element={<Theatre/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/theatreDetails" element={<TheatreDetails/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/addmovie" element={<AddMovie/>}/>
    <Route path="/editmovie/:id" element={<EditMovie/>}/>
    
    <Route path="*" element={<Navigate to={"/login"}/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
