import React from 'react';
import './App.css';

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

  const numberToString = (input) => {
    let word;

    if(parseInt(input) === 0 ) {
      return setResult("zero");
    }

    

    // Split the string/number 3 digit pieces
    let stringIntoGroup = [];
    let stringLength = input.length;

    let numGroups = parseInt(stringLength/3);
    
    if(numGroups > hundreds.length){
      return setResult("Too long number")
    }

    let remainder = stringLength % 3;
    console.log(remainder)

    if(remainder > 0){
      stringIntoGroup.push(input.substring(0, remainder))
    }
    for(let i = 0; i < numGroups; i++){
      stringIntoGroup.push(input.substring(i*3+remainder, (i+1)*3+remainder))
    }

    if(remainder > 0){
      numGroups+=1;
    }

    let tempResult = "";

    for(let i = 0; i < numGroups; i++){
      let temp = getWords(stringIntoGroup[i]);
      
      tempResult += temp;
      //console.log(numGroups)

      if(numGroups > 1 && temp.trim() !== ""){
        tempResult += " " + hundreds[numGroups-i-1] + " ";
        console.log(tempResult)
      }
      



    }
    //console.log(stringIntoGroup)
    return setResult(tempResult);

  }

  const getWords = (piece) => {
    let digits = piece.split("");
    let words = "";
    
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














  //   // Split the string/number 3 digit pieces
  //   let stringLength = input.length;
  //   let stringIntoGroup = [];
  //   let stringReverse = input.split("").reverse().join("");
  //   console.log(stringReverse)
    








  //   for(let i = 0; i < stringLength; i=i+3){
  //     let temp = stringReverse.substring(i,i+3);
  //     stringIntoGroup.push(temp)
  //   }
  //   //console.log(stringIntoGroup)

  //   // Check: is there enough bigger numbers thens tens
  //   let stringIntoGroupLength = stringIntoGroup.length;
  //   if(stringIntoGroupLength > hundreds.length){
  //     return setResult("Sorry, it is too big number");
  //   }


  //   /// jobbról balra egy tömbbe hármasával és akkor utána azt a tömböt balról jöbbra feldolgozni

  //   let tempResults = [];
  
  //   for(let i = 0; i < stringIntoGroupLength; i++ ){

  //       let onePieceOfNumber = parseInt(stringIntoGroup[i]);
  //       //console.log(onePieceOfNumber)
  
  //       if(onePieceOfNumber){

  //         // Split onePieceOfNumber individual digits 
  //         let digits = stringIntoGroup[i].split('').reverse().map(parseFloat);
  //         //console.log(digits)
          
  //         // If tens
  //         if(digits[1] === 1){
  //           digits[0] += 10;
  //         }
  //         console.log(digits)

  //         if( (word = hundreds[i]) ){
  //           tempResults.push(word)
  //         }
          
  //         if( (word = numberUntil20[digits[i]]) ){
  //           tempResults.push(word)
  //         }

  //         if( (word = tens[digits[i]]) ){
  //           tempResults.push(word)
  //         }

  //         if(digits[0] || digits[1]){
  //           if((digits[2]) || (!i && stringIntoGroupLength)){
  //             tempResults.push("and")
  //           }
  //         }
  //         if((word = numberUntil20[digits[2]])){
  //           tempResults.push(word + "hundred")
  //         }

  //       }
  //   }
  //   setResult(tempResults.reverse().join(""))
  // }
  
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
