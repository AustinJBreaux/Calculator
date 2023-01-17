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
        displayWindow = displayWindow + `e${toInsert}"`
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
        newDisplayWindow = displayWindow.split('e');
        //newDisplayWindow.forEach(removeSpaces());
        originalLength = newDisplayWindow.length
        do {
            switch(displayWindow){
                case checkLeadingOperator:
                    console.log("Error - Leading operator");
                    break
                case checkLaggingOperator:
                    console.log("Error - Lagging operator");
                    break
                case checkLaggingDecimal:
                    console.log("Error - Lagging Decimal");
                    break
                case checkConsecutiveOperators:
                    console.log("Error - Consecutive Operators");
                    break
                case checkParenthesis:
                    //if(#openParenthesis > closedParenthesis){
                    console.log("Error: Unclosed parenthesis");
                    //}
                    //else if(#closedParenthesis > openParenthesis){
                    console.log("Error: Unopened parenthesis");
                    //}
                    break
                case checkSignChange:
                    console.log("Error: Incorrect sign-change");
            }
            combineNumbers(newDisplayWindow);
            combineDecimalNumbers(newDisplayWindow);
            signChange(newDisplayWindow);
            mergeParenthesis(newDisplayWindow);
            finalEvaluations(newDisplayWindow);

        while (counter != originalLength);
       console.log(newDisplayWindow);
        /*
        
        Use a while/switch loop for the below
        New plan: For each data management activity, only interact with that
            activity- aka, if you're trying to merge numbers, skip everything
            that isn't two numbers, then keep iterating thrpugh each action
        Actions:
            Combine numbers
            Decimal
            Sign-change
            Errors
                Two operators, dividing by zero, unclosed/open parenthesis,
                lagging operator, lagging decimal, leading operator
            Merge parenthesis
            Evaluate
        switch (newDisplayWindow){
            case{ //Errors 
                if  position != number
                leading operator
                    if 1 = operator
                lagging operator
                    if -1 = operator
                lagging decimal
                    if -1 = decimal
                consecutive operators
                    let current = counter
                    let previous = counter -1
                    let next = counter + 1
                    if previous && current are operators, error
                    if counter and next are operators
                unclosed/unopened parenthesis
                    Search for open parenthesis
                    search for closed parenthesis
                    if number of open > closed log unclosed
                    if closed > open log unopened
                sign change not proceeded by a number
                    search for *-1, if previous != number log error
            }
            case{
                combine consecutive numbers
                combine decimal and numbers
            }
            case{
                multiply previous number by *-1
            }
            case{
                combine everything between open and closed parenthesis
            }
            case{
                evaluate
            }
        }
        */
    }
}

//Data Functions
const checkLeadingOperator = function leadingOperator(){
    newDisplayWindow[1] = operatorRegExp;
}
const checkLaggingOperator = function checkLaggingOperator(){
    //
}
const checkLaggingDecimal = function checkLaggingDecimal(){
    //
}
const checkConsecutiveOperators = function consecutiveOperators(){
    //
}
const checkParenthesis = function parenthesis(){
    //
}
const checkSignChange = function signChange(){
    //
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