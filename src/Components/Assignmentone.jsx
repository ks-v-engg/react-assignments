import React from "react";

const Onandoff = () => {

    const [state,setState] = React.useState("lightblue");
    
    const customstyle = {
        boxSizing : "border-box",
        background : state,
        border : "1px solid black",
        margin : "5px",
        width : "200px", 
        height : "300px"
    };
    
    return <div>
       <h2>ReactJS Task 1a - Sub Task 1: Switch on and off a bulb</h2>
       <div
        style={customstyle}>
            </div>
            <button onClick ={() => setState('green')} > On </button>
            <button onClick={()=>setState('red')}> Off </button>
            <button onClick={()=>setState('lightblue')}> Reset </button>
            </div>
        }

export default Onandoff