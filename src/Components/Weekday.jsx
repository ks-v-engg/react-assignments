import React from "react";

const Weekday = () => {

const [weekid,updateWeek] = React.useState('');

const weekday = ["Sunday","Monday","Tuesday","Webnesday","Thusday","Friday","Saturday"];

const onweekChange = (event) => {
        updateWeek(event.target.value);
};

const calculateweekday = () => {
    if (weekid >0 && weekid<=7) {
    return  'Week day is '+ weekday[weekid-1];
    } else {
    return 'Enter a valid weekday number';
    }
};

return  <div>

<h2> ReactJS Task 1c - If the user enter 1 then we need say its week </h2>

<label>Enter a day of week to</label>

<input 
    type="number" 
    id="weekvalue" 
    name="weekvalue" 
    placeholder="Enter day of the week" 
    value={weekid}
    onChange={onweekChange}
    min={1}
    max={7}
    >
   </input><br />
   
    <h3>{calculateweekday()}</h3>

</div>

}

export default Weekday

