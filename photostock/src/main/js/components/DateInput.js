import React, { useState, Component } from "react";

//import InputForm from "./InputForm";

const DateInput = () => {
    
    const [values, setValues] = useState({
            date: ""
        });
        const inputs = [
            {
                id:1,
                name:"date",
                type:"date",
                placeholder:"Date",
                label:"Date"
                
            }
        ];
        //const dataRef = useRef();
        const handleAdd = (e) =>{
            e.preventDefault();
            
        };
        const onChange = (e) => {
            setValues({...values, [e.target.name]:e.target.value});
        };
    
    return (
            <div className="date">
            <form onSubmit={handleAdd}>
                    <h1>Welcome to React</h1>
                    <label>Date</label>
                <input type="date" onChange={onChange}/>
                                            
                <button>Add</button>
                </form>
                
                </div>
            );
};

export default DateInput;
