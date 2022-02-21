import React from 'react';


function App() {
  const [numberAsString, setNumberAsString] = React.useState("");
  const [numberIsValid, setNumberIsValid] = React.useState(true);
  const [result, setResult] = React.useState();

  // Array of numbers until 20
  const numberUntil20 = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  // Array of tens numbers
  const tens = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

  //Array of numbers bigger then tens
  const hundreds = [" ", "thousand", "million"];

  //Validation of the user input
  const onClickConvert = (string) => {

    let stringArr = [...string].every(char =>"0123456789".includes(char))

    if(stringArr){
      setNumberIsValid(true);
      numberToString(string);
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
  }

  const numberToString = (input) => {

    //Handle zero
    if(parseInt(input) === 0 ) {
      return setResult("zero");
    }

    // Split the string/number 3 digit pieces
    let stringIntoGroup = [];
    let stringLength = input.length;

    let numGroups = parseInt(stringLength/3);
    
    //Handle the too big number
    if(numGroups > hundreds.length){
      return setResult("Too long number");
    }

    let remainder = stringLength % 3;

    if(remainder > 0){
      stringIntoGroup.push(input.substring(0, remainder));
    }

    for(let i = 0; i < numGroups; i++){
      stringIntoGroup.push(input.substring(i*3+remainder, (i+1)*3+remainder));
    }

    if(remainder > 0){
      numGroups+=1;
    }

    let tempResult = "";

    for(let i = 0; i < numGroups; i++){
      let temp = getWords(stringIntoGroup[i]);
      
      tempResult += temp;

      if(numGroups > 1 && temp.trim() !== ""){
        tempResult += " " + hundreds[numGroups-i-1] + " ";
      }
    }
    return setResult(tempResult);
  };

  const getWords = (piece) => {
    let digits = piece.split("");
    let words = "";
    
    //Handle the pieces of the group based on their length
    if(digits.length === 3){
      words = numberUntil20[parseInt(digits[0])];

      if(digits[0] !== "0"){
        words += " hundred";
        if(digits[1] + digits[2] !== "00"){
          words += " and ";
        }
      }

      if(parseInt(digits[1]) < 2) {
        words += numberUntil20[parseInt(digits[1])*10 + parseInt(digits[2])];
      }
      else{
        words += tens[parseInt(digits[1])];
        if(parseInt(digits[2]) !== 0){
          words += "-" + numberUntil20[parseInt(digits[2])];
        }
      } 
    }
    else if(digits.length === 2){
      if(parseInt(digits[0]) < 2) {
        words = numberUntil20[parseInt(digits[0])*10 + parseInt(digits[1])];
      }
      else{
        words = tens[parseInt(digits[0])];
        if(parseInt(digits[1]) !== 0){
          words += "-" + numberUntil20[parseInt(digits[1])];
        }
      }
    }
    else{
      words = numberUntil20[parseInt(digits[0])];
    }
    return words;
  }

  
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
