import React, { useState } from "react";

const Modal_CameraProducers = ({closeModal, onSubmit, defaultValue}) => {
  const [formState, setFormState] = useState(defaultValue ||{
      number:"",
      cameraProducers:""
  });
  const [errors, setErrors] = useState("");
  
  const validateForm = () => {
      if(formState.number && formState.cameraProducers){
          setErrors("");
          return true;
      } else {
          let errorFields = [];
          for(const [key, value] of Object.entries(formState)){
              if(!value){
                  errorFields.push(key);
              }
          }
          setErrors(errorFields.join(", "));
          return false;
      }
  };
  
  const handleChange = (e) => {
      setFormState({
                  ...formState,
                  [e.target.name]: e.target.value
      });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      if(!validateForm()) return;
      onSubmit(formState);
      closeModal();
  };
    
    return (
            <div className="modal-container" onClick={(e)=>{
                if(e.target.className === "modal-container" ) closeModal();
            }}>
            <div className="modal">
                    <form>
                        <div className="form-group">
                        <label htmlFor="number">№</label>
                        <input name="number" value={formState.number} onChange={handleChange}/>
                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="cameraProducers">Camera Producers</label>
                        <input name="cameraProducers" value={formState.cameraProducers} onChange={handleChange}/>
                        
                        </div>
                        {errors && <div className="error">{`Please include: ${errors}`}</div>}
                        <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                    </form>
            </div>
            </div>
            );
};

export default Modal_CameraProducers;


