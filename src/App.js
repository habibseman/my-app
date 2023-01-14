import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const name = "";
function App() {
    
    const onClick = () => {
	alert("hey this is me")
    }
  return (
    <div className="App">
	  <h1>hello react!</h1>
	  <button onClick={onClick}>SEND DATA</button>
	  <h2>my name is {name}</h2>
    </div>
  );
}

export default App;
