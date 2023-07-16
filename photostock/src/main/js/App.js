import React, { useState, Component } from "react";
import ReactDOM from "react-dom";


import Menu from "./components/Menu";


//export class App extends Component {
    const App = () =>
    //render()
    {
        
        return (
                 
            <div className="app">
    
    <Menu/> 
    
    
             
         </div>  
    );
    };
    

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));