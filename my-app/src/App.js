import React from 'react';
import './App.css';
import Home from  "./components/home";
import Buy from  './components/buy.js'
import Sell from  "./components/sell";
import Labour from  "./components/labour";
import Contact from  "./components/contact";
import Header from  "./components/header";
import Accountholders from "./components/accountholders";
import Login from "./components/login";
import Signup from "./components/signup";
import Labourdb from  "./components/labourdb";


import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
     
<Router>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/buy" element={<Buy/>}/>
<Route path="/sell" element={<Sell/>}/>
<Route path="/accountholders" element={<Accountholders/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/labour" element={<Labour/>}/>
<Route path="/labourdb" element={<Labourdb/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/signup" element={<Signup/>}/>
</Routes>
</Router>

</div>


  
  )}
 


export default App;
