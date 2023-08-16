import React, { useState } from "react";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import Modal_CameraProducers from "./Modal_CameraProducers";

const CameraProducers = () => {
    
    
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {number:"1", cameraProducers:"Canon"},
        {number:"2", cameraProducers:"Fujifilm"},
        {number:"3", cameraProducers:"Nikon"},
        {number:"4", cameraProducers:"Sony"},
        {number:"5", cameraProducers:"Panasonic"}
    ]);
    
    const [rowToEdit, setRowToEdit] = useState(null);
    
    const handleDeleteRow = (targetIndex)=>{
        setRows(rows.filter((_, idx)=>idx !==targetIndex));
    };
    
    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };
    
    const handleSubmit = (newRow) => {
        rowToEdit === null ?
        setRows([...rows, newRow]):
                setRows(rows.map((currRow, idx) => {
                    if(idx !== rowToEdit) return currRow;
                    return newRow;
                }));
    };
    return (
            <div>
    
    <button className="btn" onClick={()=> setModalOpen(true)}>Add</button>
    
    
            {modalOpen && <Modal_CameraProducers closeModal={()=>{setModalOpen(false); setRowToEdit(null);}}  onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]}/>}
            <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th className="expand">Camera Producers</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                {rows.map((row,idx)=>{
                    return <tr key={idx}>
                                <td>{row.number}</td>
                                <td className="expand">{row.cameraProducers}</td>
                                <td><span className="actions">
                                  <BsFillTrashFill onClick={()=>handleDeleteRow(idx)}/>
                                  <BsFillPencilFill onClick={()=>handleEditRow(idx)}/>
                            </span>
                        </td>
                            </tr>
                })
                }
                    
                   
            
                </tbody>
            </table>
            </div>
            
            </div>
    
    );
};


export default CameraProducers;
