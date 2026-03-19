
import Model from "./Model";
import { useState } from "react";

import "./fromInput.css";

export default function FromInput (){
    let [errorMessage , seterrorMessage] = useState("");
    let [showModal , setshowModel] = useState(false)
    let [datainput , setdatainput] = useState({
        name:"",
        phone:"",
        age:0,
        employee:false,
        salary:"less than 500$"
    })
    function handeleFormSubmit (event){
        event.preventDefault();
        setshowModel(true);
        handeleerrorMessage();
        console.log(datainput);
    }
    function handeleformClick (){
        if(showModal){
            setshowModel(false);
        };
    }
    function handeleerrorMessage (){
        seterrorMessage(null)
        if(datainput.age < 18 || datainput.age > 100){
            seterrorMessage("The age is not allowed");
        }else if (datainput.phone.length < 10 || datainput.phone.length > 12) {
            seterrorMessage("phone Number fromat Is Incorrect");
    }
}
    let disabled = !datainput.name || !datainput.phone || !datainput.age;
    return(
            <form onClick={handeleformClick}>
            <h1>Requesting a loan</h1>
            <hr />
            <label>Name</label>
            <input type="text" value={datainput.name} onChange={(event)=>{setdatainput({...datainput , name: event.target.value})}}/>
            <label>Phone Number</label>
            <input type="text"  value={datainput.phone} onChange={(event)=>{setdatainput({...datainput , phone: event.target.value})}}/>
            <label>Age</label>
            <input type="text" value={datainput.age} onChange={(event) =>{setdatainput({...datainput , age:event.target.value})}}/>
            <label>Are you an employee?</label>
            <input type="checkbox" checked={datainput.employee} onChange={(event)=>{setdatainput({...datainput , employee:event.target.checked})}} />
            <label>Salary</label>
            <select value={datainput.salary} onChange={(event)=>{setdatainput({...datainput , salary:event.target.value})}}>
            <option value="less than 500$">less than 500$</option>
            <option value="between 500$ and 2000$">between 500$ and 2000$</option>
            <option value="above 2000$">above 2000$</option>
            </select>
            <button type="submit" 
            onClick={handeleFormSubmit}
                disabled={disabled}
                className={`submit-btn ${disabled? "disabled" : ""}`}
            > Submit</button>

            <Model isVisible={showModal} errorMassage={errorMessage} />
            </form>
            
        
    )
}