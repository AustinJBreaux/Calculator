//Global Variables
let displayWindow = '';
let numberRegExp = [0-9];
let operatorRegExp = [/\+-\/\*/]

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
        console.log('*(-1)');
        displayWindow = displayWindow + `e*-1`;
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
        //Error Functions
        checkLeadingOperator(newDisplayWindow);
        checkLaggingOperator(newDisplayWindow);
        checkLaggingDecimal(newDisplayWindow);
        /*
            else if(checkLaggingDecimal){
                console.log("Error - Lagging Decimal");
            }
            else if(checkConsecutiveOperators){
                console.log("Error - Consecutive Operators");
            }
            else if(checkParenthesis){
                console.log(`Error - Incorrect use of ${incorrectParenthesis} parenthesis`);
            }
            else if(checkSignChange){
                console.log("Error: Incorrect sign-change usage");
            }
            */
        //Data Functions
        for(let counter = 0; counter < 10; counter++){//Replace with do while length != 1
            /*
            }
            combineNumbers(newDisplayWindow);
            combineDecimalNumbers(newDisplayWindow);
            signChange(newDisplayWindow);
            mergeParenthesis(newDisplayWindow);
            finalEvaluations(newDisplayWindow); Use reduce() for this
            */
        }
         
    console.log(newDisplayWindow);
    }
 }

//Data Functions
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

const checkConsecutiveOperators = function consecutiveOperators(){
    //
}
const checkParenthesis = function parenthesis(){
    //if(#openParenthesis > closedParenthesis){
        //let incorrectParenthesis = closed;
        //return true
        //}
    //else if(#closedParenthesis > openParenthesis){
        //let incorrectParenthesis = open;
        //return true
        //}
}
const checkSignChange = function signChange(){
    //for each find signchange, if true and previous dne number, error. If false return
}
const combineNumbers = function combineNumbers(){
    //
}
const combineDecimalNumbers = function combineDecimalNumbers(){
    //
}
const signChange = function signChange(){
    //
}
const mergeParenthesis = function mergeParenthesis(){
    //
}
const finalEvaluations = function finalEvaluations(){
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