import { useState } from 'react';
import './App.css'
import Welcome from './components/Welcome';
import Guset from './components/Guset';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element;
/*
  if(isLoggedIn){
    element = <h1>Im loggedIn</h1>
  }
  else{
    element = <h1>Im not loggedIn</h1>
  }
    */
  return(
    <div className="App">
      <button onClick={() => {
        setIsLoggedIn(true)
      }}>Login</button>

      {isLoggedIn ? <Welcome name="ahmad" /> : <Guset/> }
      {element}
    </div>
  );
}

export default App;