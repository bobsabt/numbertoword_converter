import React from 'react';
import './App.css';

function App() {
  const [numberAsString, setNumberAsString] = React.useState("");
  const [numberIsValid, setNumberIsValid] = React.useState(true);
  const [result, setResult] = React.useState();

  const onClickConvert = (string) => {
    if(!string.includes(".")){
      //console.log("true");
      setNumberIsValid(true);
      numberToString(string)


    }
    else{
      //console.log("false");
      setNumberIsValid(false);
    }
    
  }

  const numberToString = (string) => {

    if( parseInt( string ) === 0 ) {
      setResult("zero");
    }

    //Array of numbers until 20
    const numberUntil20 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    //Array of tens numbers
    const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

    //Array of numbers bigger then tens
    const hundreds = ["thousand", "million", "billion", "trillion"];
  }
  
  return (
    <div className="App">
      <input type="number" placeholder='Write your number here...' value={numberAsString} onChange={e=>setNumberAsString(e.target.value)}/>
      <button onClick={()=>onClickConvert(numberAsString)}>Convert</button>
      {!numberIsValid && <p>Please write a whole number</p>}
      <p>{result}</p>
       
    </div>
  );
}

export default App;
