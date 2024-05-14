import React from "react";
import { Cltof } from "../context/cltofhcontext";


const Cltofhincontext = () => {

const cltoflcontext = React.useContext(Cltof);


    
const updatecelsius = (event) => {
    const currfieldvalue = event.target.value;
    cltoflcontext.setcl(currfieldvalue);
    cltoflcontext.setfl((currfieldvalue * 9/5)+32);
}

const updatefaranheit = (event) => {
    const currfieldvalue = event.target.value;
    cltoflcontext.setfl(currfieldvalue);
    cltoflcontext.setcl((currfieldvalue-32)*5/9);
}

const checkwaterboil = () => {
    if (cltoflcontext.cl >=38) {
        return 'Water will boil'
    } else {
        return 'Water will not boil'
    }

}

    return <div>
        <h2>Celsius to Faranheit Convertor using context</h2>
        <label>Enter Temperature in Celsius</label>
        <input type="number" id="cl" name="cl" value={cltoflcontext.cl} onChange={updatecelsius}/> <br />
        <label>Enter Temperature in Faranheit</label>
        <input type="number" id="fh" name="fh" value={cltoflcontext.fl} onChange={updatefaranheit}/>
        <h3>{checkwaterboil()}</h3>
    </div>
}

export default Cltofhincontext;