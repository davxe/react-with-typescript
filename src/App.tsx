import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, UserInfo } from './component';
import { Simple } from './component/Simple/Simple';

function App() {
  const [isDisplayed,setIsDisplayed]=useState<boolean>(true);
  return (
    <div className="App">
      <h1>Welcome to React with typescript</h1>
      <div>
        <Counter/>
      </div>
      <div>
        <button type='button' onClick={()=>setIsDisplayed(x=>!x)}>Toggle</button>
      </div>
      <div id='user-info'>
        {isDisplayed && <UserInfo lastLogin='somedata'/>}
      </div>
      <div>
        <Simple name='prince'/>
        <Simple name='kaushal' age={23}/>
      </div>
    </div>
  );
}

export default App;
