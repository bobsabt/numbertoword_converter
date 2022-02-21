import React from 'react';


function App() {
  const [numberAsString, setNumberAsString] = React.useState("");
  const [numberIsValid, setNumberIsValid] = React.useState(true);
  const [result, setResult] = React.useState();
  const numberToString = require("./numberToString");

  //Validation of the user input
  const onClickConvert = (string) => {

    let stringArr = [...string].every(char =>"0123456789".includes(char))

    if(stringArr){
      setNumberIsValid(true);
      setResult(numberToString(string));
    }
    else{
      setNumberIsValid(false);
    } 
  };

  //Handle Enter
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      onClickConvert(numberAsString);
    }  
  };
  
  return (
    <div className="App">
      <div className='container'>
        <h1>Number Converter</h1>
        <div className='input-box'>
          <p>Enter the number</p>
          <input type="text" placeholder='Write your number here...' value={numberAsString} onChange={e=>setNumberAsString(e.target.value)} onKeyUp={handleEnter}/>
        </div>
        <button onClick={()=>onClickConvert(numberAsString)}>Convert</button>
        <div className="message-box">
          <p>Result</p>
          <div>
          {!numberIsValid ? 
            <p>Please write whole numbers only</p> 
          : 
            <p>{result}</p>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
