import React from "react";

const Cltofh = () => {

    const [celsius,setcelsisus] = React.useState(0);
    const [faranheit,setfaranheit] = React.useState(32);
    
    const updatecelsius = (event) => {
        const currfieldvalue = event.target.value;
        setcelsisus(currfieldvalue);
        setfaranheit((currfieldvalue * 9/5)+32);
    }
    
    const updatefaranheit = (event) => {
        const currfieldvalue = event.target.value;
        setfaranheit(currfieldvalue);
        setcelsisus((currfieldvalue-32)*5/9);
    }

    const checkwaterboil = () => {
        if (celsius >=38) {
            return 'Water will boil'
        } else {
            return 'Water will not boil'
        }

    }

    return <div>
        <h2>Celsius to Faranheit Convertor</h2>
        <label>Enter Temperature in Celsius</label>
        <input type="number" id="cl" name="cl" value={celsius} onChange={updatecelsius}/> <br />
        <label>Enter Temperature in Faranheit</label>
        <input type="number" id="fh" name="fh" value={faranheit} onChange={updatefaranheit}/>
        <h3>{checkwaterboil()}</h3>
    </div>
}

export default Cltofh;