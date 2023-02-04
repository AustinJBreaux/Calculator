//Global Variables
let displayWindow = '';
let numberRegExp = [0-9];
let operatorRegExp = [/\+\/\*/i]

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

const openParenthesisButtonClick = function parenthesisButtonClick(e){
    if(e.target.classList != 'openParenthesisButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`
        console.log(toInsert);
    }
}

const closedParenthesisButtonClick = function parenthesisButtonClick(e){
    if(e.target.classList != 'closedParenthesisButton'){
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
        console.log(' -');
        displayWindow = displayWindow + `e -`;
    }
 }

const decimalButtonClick = function decimalButtonClick(e){
    if(e.target.classList != 'decimalButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`;
        console.log(toInsert);
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
        let newDisplayWindow = displayWindow.split('e');
        newDisplayWindow = newDisplayWindow.filter(newDisplayWindow => newDisplayWindow != "");
        checkDividingByZero(newDisplayWindow);
        dataFunctions(newDisplayWindow);
        for(let counter = 0; counter < 10; counter++){//Replace with do while length != 1

        }
         
    console.log(newDisplayWindow);
    }
 }

 //Error Functions
 //All error functions have been removed, rely on the user to figure out why it's erroring
 //They're in a notepad in the calculator folder
 
const checkDividingByZero = function dividingByZero(newDisplayWindow){
    newDisplayWindow.forEach((element, index) => {
        if(element == "/" && newDisplayWindow[index+1] == "0"){
            console.log("Error - Division by zero");
            return
        }
    });
}

//Data Functions
const dataFunctions = function dataFunctions(newDisplayWindow){
    combineNumbers(newDisplayWindow);
    combineDecimalNumbers(newDisplayWindow);
    signChange(newDisplayWindow);
    signChange(newDisplayWindow);
    mergeParenthesis(newDisplayWindow);
    finalEvaluations(newDisplayWindow);
}

const combineNumbers = function combineNumbers(newDisplayWindow){
    //
}
const combineDecimalNumbers = function combineDecimalNumbers(newDisplayWindow){
    //
}
const signChange = function signChange(newDisplayWindow){
    //
}
const mergeParenthesis = function mergeParenthesis(newDisplayWindow){
    //
}
const finalEvaluations = function finalEvaluations(newDisplayWindow){
    //
}

//Event Listeners
document.addEventListener("click", numberClick);
document.addEventListener("click", operatorClick);
document.addEventListener("click", clearButtonClick);
document.addEventListener("click", openParenthesisButtonClick);
document.addEventListener("click", closedParenthesisButtonClick);
document.addEventListener("click", backspaceButtonClick);
document.addEventListener("click", signChangeButtonClick);
document.addEventListener("click", decimalButtonClick);
document.addEventListener("click", enterButtonClick);