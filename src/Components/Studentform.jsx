import React from "react";

const Studentform = () => {

    return <div>
        <label> Name : </label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter name"/> <br />
        <label> Age: </label>
        <input 
            type="text"
            id="age"
            name="age"
            placeholder="Enter Age"
        /> <br />
        <label>Date of birth : </label>
        <input 
            type="text"
            id="dob"
            name="dob"
            placeholder="Enter DOB"/> <br />
        <label>Language : </label>

        <input type="checkbox" id="l1" name="l1" value="english"/>
            <label for="l1">English</label> <br />
        <label>City</label>
        <select name="city">
            <option value="chennai">Chennai</option>
        </select>
        
     </div>
}
export default Studentform;
