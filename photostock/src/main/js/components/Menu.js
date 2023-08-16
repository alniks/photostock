import React, {  Component } from "react";
import DateInput from "./DateInput";
import Countries from "./Countries";

import CameraTypes from "./CameraTypes";
import CameraProducers from "./CameraProducers";
import Lenses from "./Lenses";
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
                <a><Link to="./CameraProducers">Camera producers</Link></a>
                <a><Link to="./Lenses">Lenses</Link></a>
            
                
            
                </ul>
                
                <Routes>
                    <Route exact path="/DateInput" element={<DateInput/>}/>
                    <Route exact path="/Countries" element={<Countries/>}/>
                    <Route exact path="/CameraTypes" element={<CameraTypes/>}/>
                    <Route exact path="/CameraProducers" element={<CameraProducers/>}/>
                    <Route exact path="/Lenses" element={<Lenses/>}/>
                </Routes>
               
                
            </div>
            </Router>
            
            );

};

export default Menu;
