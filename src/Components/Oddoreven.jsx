import React from "react";
const Oddoreven = () => {

const [count,setCount] = React.useState(0);

return <div>
<h2>ReactJS Task 1b: Find whether the incremented number is even or odd </h2>
<button onClick={() => setCount(count + 1)}> Increment</button>
<button onClick={() => setCount(count -1)}> Decrement </button>


<h3>Count is {count} </h3>

{ (Math.abs(count)%2) === 0 ? "Result is even" : "Result is Odd"}


</div>
}

export default Oddoreven