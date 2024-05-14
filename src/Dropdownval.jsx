import React, { useRef } from "react";
import { useState, useEffect } from 'react';


const Dropdownval = () => {

    const refcontry = React.useRef();

    const [contryselected,setCountryselected] = useState('india');
    const [satelist,setstatelist] = useState([]);
    
   const options = [
        {
          label: "India",
          value: "india",
        },
        {
          label: "Srilanka",
          value: "srilanka",
        },
      ];

      const indiastates = [
        {
          label: "Delhi",
          value: "delhi",
        },
        {
          label: "Chennai",
          value: "chennai",
        },
        {
            label: "Mubmbai",
            value: "mumbai",
          },
      ];

      const srilankastates = [
        {
          label: "Colombo",
          value: "colombo",
        },
        {
          label: "Kandy",
          value: "kandy",
        },
        {
            label: "Jaffna",
            value: "jaffna",
          },
      ];
      const handlecountrychange = (event) => {
              setCountryselected(event.target.value);
      }
      useEffect(()=>{
        (contryselected === 'india' ? setstatelist(indiastates) : setstatelist(srilankastates));
     },[contryselected]); 

    return <div>
    <h3> Dropdown list values </h3>

    <select value={contryselected} onChange={handlecountrychange} id="country">
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
    </select>

    <select>
            {satelist.map((option) => (
              <option  key={option.value}  value={option.value}>{option.label}</option>
            ))}
    </select>  
    
    </div>
} 

export default Dropdownval;

