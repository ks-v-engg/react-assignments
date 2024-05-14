import React from "react";
const Loginref = () => {

const username = React.useRef();
const password = React.useRef();
const h3tag = React.useRef();

const [result,setResult] = React.useState('');

const loginvalidate = () => {

    if (username.current.value === 'test@gmail.com' && password.current.value === '12345678') 
        {
            setResult('Login Sucessful');
            username.current.value = '';
            password.current.value = '';
            h3tag.current.style.color = 'green';          
        } else {
            setResult('Login Unsucessful');
            username.current.value = '';
            password.current.value = '';
            h3tag.current.style.color = 'red';
        }
}

return <div>
    <h3>Login using Ref</h3>
    
    <input 
        type="text" 
        ref={username}
        name="email" 
        placeholder="Enter email" 
       /> <br />
    <input 
        type="password" 
        ref={password}
        name="password" 
        id="password" 
        placeholder="Enter password" 
        /> <br />
    <input 
        type="button" 
        value="Submit"
        onClick={loginvalidate}/>
    <br />
    <h3 ref={h3tag}>{result}</h3>
   
</div>

}

export default Loginref;