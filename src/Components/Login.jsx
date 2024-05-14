import React from "react";
const Login = () => {
const [email,Setemail] = React.useState('');
const [passowrd,Setpassword] = React.useState('');

const [result,setResult] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();
   
   if (email === 'test@gmail.com' && passowrd === '12345678') 
    {
        setResult('Login Sucessful');
    } else {
        setResult('Login Unsucessful');
    }
    
}

return <div>
    <h3>Login</h3>
    <form onSubmit={onSubmit}>
    <input 
        type="text" 
        value={email} 
        name="email" 
        id="email" 
        placeholder="Enter email" 
        onChange={(e) => Setemail(e.target.value)}/> <br />
    <input 
        type="password" 
        value={passowrd} 
        name="password" 
        id="password" 
        placeholder="Enter password" 
        onChange={(e) => Setpassword(e.target.value)}/> <br />
    <input 
        type="submit" 
        value={"Login"}/>
    <br />
    <h3>{result}</h3>
    </form>
</div>

}

export default Login