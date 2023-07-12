import React,{useState} from "react"
//import { Register } from "./Register";
export const Login = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="homee">
            <h2>Login page</h2>
            <form onSubmit={handleSubmit} className="Login">
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="your email" />
                <label htmlFor="password">Password:</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="************"/>
                <button type="submit">Login</button>
            </form>
            <button className="navigator" onClick={()=>props.onFormSwitch('register')}>dont have an account? Register here</button>
        </div>
    )
}