import React, { useState } from "react";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import Modal_CameraTypes from "./Modal_CameraTypes";

const CameraTypes = () => {
    
    
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {number:"1", cameraTypes:"action"},
        {number:"2", cameraTypes:"drone"},
        {number:"3", cameraTypes:"mirroless"},
        {number:"4", cameraTypes:"DSLR"},
        {number:"5", cameraTypes:"bridge"}
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
    
    
            {modalOpen && <Modal_CameraTypes closeModal={()=>{setModalOpen(false); setRowToEdit(null);}}  onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]}/>}
            <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th className="expand">Camera Types</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                {rows.map((row,idx)=>{
                    return <tr key={idx}>
                                <td>{row.number}</td>
                                <td className="expand">{row.cameraTypes}</td>
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


export default CameraTypes;
