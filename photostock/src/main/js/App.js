import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import InputForm from "./components/InputForm";


//export class App extends Component {
    const App = () =>
    //render()
    {
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
                
            <div className="app">
            
            <form onSubmit={handleAdd}>
                    <h1>Welcome to React</h1>
                    {inputs.map((input)=>(
                <InputForm
                        key = {input.id}
                        {...input}
                        onChange = {onChange}
                        />
        ))}
                <button>Add</button>
                </form>
        </div>
    );
    };
    

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));