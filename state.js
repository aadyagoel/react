import './App.css';
import { useState, useEffect } from 'react';

//a react component
//prop(erties): just arguments you pass into components, via attributes
//state: plain js object used to represent info abt component's current situation

const App = () => {
  const [counter, setCounter] = useState(0);
  const name = 'AG';
  const isNameShowing = false;

  useEffect(()=> {
    setCounter(100);
  }, []); //dependency array 
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount) =>prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=>prevCount+1)}>+</button>
      <h1> {isNameShowing ? name : 'Anonymous'} </h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ): (
        <>
        <h1>!test</h1>
        <h2>Anonymous!</h2>
        </>
      )}
    </div>
  );
}

export default App;