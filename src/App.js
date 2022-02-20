import React from 'react';
import './App.css';

function App() {
  const [numberAsString, setNumberAsString] = React.useState("");
  const [numberIsValid, setNumberIsValid] = React.useState(true);
  const [result, setResult] = React.useState();

  const onClickConvert = () => {
    console.log("hello")
  }
  
  return (
    <div className="App">
      <input type="text" placeholder='Write your number here...' value={numberAsString} onChange={e=>setNumberAsString(e.target.value)}/>
      <button onClick={onClickConvert}>Convert</button>
      {!numberIsValid && <p>Please use just number digit</p>}
      <p>{result}</p>
       
    </div>
  );
}

export default App;
