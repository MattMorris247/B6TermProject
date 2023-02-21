import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import RemoveMovie from "./components/RemoveMovie";
import BookTickets from "./components/BookTickets";
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import AdminPanel from "./components/AdminPanel";
import AddPromotion from "./components/AddPromotion";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addmovie' element={<AddMovie/>}/>
        <Route path='/removemovie' element={<RemoveMovie/>}/>
        <Route path='/booktickets' element={<BookTickets/>}/>
        <Route path='/registrationconfirmation' element={<RegistrationConfirmation/>}/>
        <Route path='/adminpanel' element={<AdminPanel/>}/>
        <Route path='/addpromotion' element={<AddPromotion/>}/>
      </Routes>
    </div>
  );
}

export default App;
