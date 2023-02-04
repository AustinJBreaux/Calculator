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
        errorFunctions(newDisplayWindow);
        dataFunctions(newDisplayWindow);
        for(let counter = 0; counter < 10; counter++){//Replace with do while length != 1
        }
         
    console.log(newDisplayWindow);
    }
 }

 //Error Functions
 const errorFunctions = function errorFunctions(newDisplayWindow){
    checkLeadingOperator(newDisplayWindow);
    checkLaggingOperator(newDisplayWindow);
    checkLaggingDecimal(newDisplayWindow);
    checkParenthesis(newDisplayWindow);
    checkConsecutiveOperators(newDisplayWindow);
    checkForLaggingParenthesisNumber(newDisplayWindow);
    //checkSignChange(newDisplayWindow);
    //checkDividingByZero
 };
 const checkLeadingOperator = function leadingOperator(newDisplayWindow){
    let testPosition = (newDisplayWindow.slice(0,1)).toString();
    let testType = "Leading Operator";
    switch(testPosition){
        case "+":
            console.log(`Error: ${testType} "${testPosition}"`)
            break
        case "-":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
        case "*":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
        case "/":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
    }
}

const checkLaggingOperator = function checkLaggingOperator(newDisplayWindow){
    let testPosition = newDisplayWindow[newDisplayWindow.length-1];
    let testType = "Lagging Operator";
    switch(testPosition){
        case "+":
            console.log(`Error: ${testType} "${testPosition}"`)
            break
        case "-":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
        case "*":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
        case "/":
            console.log(`Error: Leading Operator "${testPosition}"`)
            break
    }
}

const checkLaggingDecimal = function checkLaggingDecimal(newDisplayWindow){
    let testPosition = newDisplayWindow[newDisplayWindow.length-1];
    testType = "Lagging Decimal";
    switch(testPosition){
        case ".":
            console.log(`Error: ${testType} "${testPosition}"`)
            break
    }
}

const checkConsecutiveOperators = function consecutiveOperators(newDisplayWindow){
    for(let counter = 0; counter < newDisplayWindow.length; counter++){
    let operators = ["*", "/", "+"];
    let test1 = newDisplayWindow[counter];
    let test2 = newDisplayWindow[counter+1];
    if(operators.includes(test1) && operators.includes(test2)){
        console.log("Error - Consecutive operators found");
    }
    }
}
const checkParenthesis = function parenthesis(newDisplayWindow){
    let numberOpenParenthesis = 0;
    let numberClosedParenthesis = 0;
    newDisplayWindow.forEach(element => {
        if(element == "("){
            numberOpenParenthesis++;
        }
        else return
    });
    newDisplayWindow.forEach(element => {
        if(element == ")"){
            numberClosedParenthesis++;
        }
        else return
    })
    if(numberOpenParenthesis > numberClosedParenthesis){
        console.log(`Error: Incorrect ) placement (Missing closed parenthesis)`);
    }
    else if(numberClosedParenthesis > numberOpenParenthesis){
        console.log(`Error: Incorrect ( placement (Missing open parenthesis)`);
    }
}

const checkForLaggingParenthesisNumber = function laggingParenthesisNumber(newDisplayWindow){
    for(let counter = 0; counter < newDisplayWindow.length; counter++){
        console.log(counter);
        if(newDisplayWindow[counter] == ")"){
            console.log(`Found at ${counter}`);
            /*
            if(newDisplayWindow[counter-1] !== Number){
                console.log("Error - The last character of a parenthesis must be a number or a closed parenthesis");
            }
            else if (newDisplayWindow[counter-1] !== ")"){
                console.log("Error - The last character of a parenthesis must be a number or a closed parenthesis");
            }
            else return
            */
        }
        else return
    }
}
const checkSignChange = function signChange(newDisplayWindow){
    //Find sign change index, and next character
        //if next != number, error
        //else
            //
}
const checkDividingByZero = function dividingByZero(newDisplayWindow){
    //
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