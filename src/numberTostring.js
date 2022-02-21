// Array of numbers until 20
const numberUntil20 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

// Array of tens numbers
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

//Array of numbers bigger then tens
const hundreds = ["", "thousand", "million", "billion"];

function numberToString(input){
    let tempResult = "";

    //Handle zero
    if(parseInt(input) === 0 ) {
      return tempResult ="zero";
    }

    // Split the string/number 3 digit pieces
    let stringIntoGroup = [];
    let stringLength = input.length;

    let numGroups = parseInt(stringLength/3);
    
    //Handle the too big number
    if(input.length > 12){
      return tempResult = "Too long number";
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

    for(let i = 0; i < numGroups; i++){
        let temp = getWords(stringIntoGroup[i]);
      
        tempResult += temp;
        
        if(numGroups > 1 && temp.trim() !== "" ){
            tempResult += " " + hundreds[numGroups-i-1] + " ";
        }
    }

    if(tempResult.includes("  ")){
      tempResult = tempResult.replace(/  /g," ");
    }

    if(tempResult.substring(tempResult.length-1,tempResult.length) === " "){
      tempResult = tempResult.slice(0,-1);
    }

    return tempResult;
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

      if(digits[0] === "0"){
        if(digits[0] === "0" && digits[2] !=="0"){
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
};

module.exports = numberToString;

 
