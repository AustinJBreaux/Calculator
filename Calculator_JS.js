/*
Notes:
Create all calculator operations:
    
    Operate - Takes the first number, and interacts with the operator 
    and the second number
        Add
        Subtract
        Multiple
        Divide
    Clear - Clear all data stored
    Decimals (Round to the 10th place, and only allow one per number)
    Equals
    Positive/negative integers
    Storage of the display value for the operate button
    users should be able to string operators (like 5 + 4 + 3 etc)
    First number should interact directly with the second, no order of operations 
        bullshit (So 5 + 5 - 2 * 3 = 24)
    If an operator is called without a second number, delete the operator
        and display the first number
        Snarky message if someone tries to divide by 0
    Toggle button for allowing keyboard controls
    Backspace button

Pseudocode:


(=)
    addEventListener 
        splice every ' '
        parseInt or regex number/operator on splices
        result = firstNumber operator secondNumber
        displayWindow = result
        if operator = % and secondNumber = 0
            zeroErrorCounter ++
            if zeroErrorCounter > 1 cheekyZeroMessage
            cheekyZeroMessage
                pick random number between 1-10, each causes a different message
                ex. "Instructions unclear, universe accidentally destroyed"
        firstNumber operator secondNumber = answer
        Math.floor(answer)
        displayWindow = answer


(.)
    addEventListener
    if firstNumber exists,
        decimalNumber = ''
        firstNumber = ${firstNumber}+'.'+'decimalNumber

*/
//Global Variables
let displayWindow = '';
let numberRegExp = [0-9];

//Button Functions
const numberClick = function numberClick(e){
    if(e.target.classList != 'numberButton'){
        return
    }
    else if (displayWindow === undefined || displayWindow.length == 0){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`;
        console.log(toInsert);
    }
    
    else if(displayWindow[displayWindow.length-1] = numberRegExp){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`;
        console.log(toInsert);
    }
    
    else console.log('Nope')
}

const operatorClick = function operatorClick(e){
    if(e.target.classList != 'operatorButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`
        console.log(toInsert);
    }
}

const clearButtonClick = function clearButtonClick(e){
    if(e.target.classList != 'clearButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        displayWindow = ''
    }
}

const parenthesisButtonClick = function parenthesisButtonClick(e){
    if(e.target.classList != 'parenthesisButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`
        console.log(toInsert);
    }
}

const backspaceButtonClick = function backspaceButtonClick(e){
    if(e.target.classList != 'backspaceButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        displayWindow = displayWindow.slice(0,-1);
    }
}

 const signChangeButtonClick = function signChangeButtonClick(e){
    if(e.target.classList != 'signChangeButton'){
        return
    }
    
    else{
        console.log('*(-1)');
        displayWindow = displayWindow + `e*(-1)`;
    }
 }

 const enterButtonClick = function enterButtonClick(e){
    if(e.target.classList != 'enterButton'){
        return
    }
    else if(displayWindow === ''){
        return
    }
    else if(displayWindow != undefined || ''){
        let newDisplayWindow = '';
        newDisplayWindow = displayWindow.replace(/e/g, '');
        console.log(newDisplayWindow);
    }
}

 const decimalButtonClick = function decimalButtonClick(e){
    if(e.target.classList != 'decimalButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}"`
        console.log(toInsert);
    }
 }


//Event Listeners
document.addEventListener("click", numberClick);
document.addEventListener("click", operatorClick);
document.addEventListener("click", clearButtonClick);
document.addEventListener("click", parenthesisButtonClick);
document.addEventListener("click", backspaceButtonClick);
document.addEventListener("click", signChangeButtonClick);
document.addEventListener("click", decimalButtonClick);
document.addEventListener("click", enterButtonClick);