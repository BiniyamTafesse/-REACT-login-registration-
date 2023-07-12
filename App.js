import Reacat,{useState} from 'react';
import './App.css';
import {logo} from './logo.svg';
import { Register } from './Register';
import { Login } from './Login';


function App() {
  const [currentForm, setCurrentForm]= useState('Login');
  const toggleForm=(forName)=>{
    setCurrentForm(forName);
  }
  return(
    <div className='App'>
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />  
      }
    </div>
  );
}

export default App;
