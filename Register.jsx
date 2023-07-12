import { Login } from "./Login"
import React,{useState} from "react"
export const Register = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(email);
    }
  return(
    <div className="homee">
      <h2>Registeration page</h2>
      <form onSubmit={handleSubmit} className="Register">
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="your name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="your email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="************"/>
        <button style={{color: "red"}} type="submit">Register</button>
      </form>
       <button className="navigator" onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login here</button>
    </div>
    
  )
}