import React, { useState, useEffect } from "react";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import Modal from "./Modal";


const Countries = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {number:"1", countries:"Russia"},
        {number:"2", countries:"America"},
        {number:"3", countries:"China"}
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
        console.log(newRow);
        fetch('/admin/countries', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({name: newRow.countries})
                })
                .then((response) => console.log(response));
        rowToEdit === null ?
        setRows([...rows, newRow]):
                setRows(rows.map((currRow, idx) => {
                    if(idx !== rowToEdit) return currRow;
                    return newRow;
                }));
    };
    
    const fetchData = () => {
        fetch('/admin/countries')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
            <div>
    
    <button className="btn" onClick={()=> setModalOpen(true)}>Add</button>
    
    
            {modalOpen && <Modal closeModal={()=>{setModalOpen(false); setRowToEdit(null);}}  onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]}/>}
            <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th className="expand">Countries</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                {rows.map((row,idx)=>{
                    return <tr key={idx}>
                                <td>{row.number}</td>
                                <td className="expand">{row.countries}</td>
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

export default Countries;
