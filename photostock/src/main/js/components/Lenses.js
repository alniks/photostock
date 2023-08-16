import React, { useState } from "react";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import CameraProducers from "./CameraProducers";


const Lenses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const[checkedValues, setValues] = useState([]);
    
    const Checkbox = () => {
        
    }
    
    function handleChange(event) {
        const {value, checked} = event.target;
        if(checked){
            setValues(pre =>[...pre,value]);
        } else(
           setValues(pre =>{
               return[...pre.filter(skill => skill!==value)];
           })     
                   );
    };
    
    return (
            <div>
      
      
            <CameraProducers/>
                <div className="checkbox">
                    <input type="checkbox" value="zoom" onChange={ handleChange} className="ch"/> 
                    <label className="checkboxLabel"> Zoom</label>
                </div>
            </div>
            );
};

export default Lenses;
