import React, {  Component } from "react";
import DateInput from "./DateInput";
import Countries from "./Countries";

import CameraTypes from "./CameraTypes";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

const Menu = () => {
//export default class Menu extends Component{
    
    return (
            <Router>
            <div className="header">
                
                <ul className="menu">
                
                <a><Link to="./DateInput">Date</Link></a>
                <a><Link to="./Countries">Countries</Link></a>
                <a><Link to="./CameraTypes">Camera types</Link></a>
            
                
            
                </ul>
                
                <Routes>
                    <Route exact path="/DateInput" element={<DateInput/>}/>
                    <Route exact path="/Countries" element={<Countries/>}/>
                    <Route exact path="/CameraTypes" element={<CameraTypes/>}/>
                </Routes>
               
                
            </div>
            </Router>
            
            );

};

export default Menu;
