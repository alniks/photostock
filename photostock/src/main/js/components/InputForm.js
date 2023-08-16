import React from "react";

const InputForm = (props) => {
    const {label, onChange, id,  ...inputProps} = props;
    
    return (
            <div className="formInput">
                <label className="label">{label}</label>
                <input {...inputProps} onChange={onChange} className="input"/>
                
            </div>
            );
};

export default InputForm;
