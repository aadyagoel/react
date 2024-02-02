import './App.css';
import { useState, useEffect } from 'react';

//a react component
//prop(erties): just arguments you pass into components, via attributes
//state: plain js object used to represent info abt component's current situation

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    alert("you've changed the counter to" +counter);
  }, [counter]); //dependency array: when this var changes above code in usEeffect is called
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount) =>prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
