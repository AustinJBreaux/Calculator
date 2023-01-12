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
        displayWindow = displayWindow + `e*(-1)`;
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
        newDisplayWindow.forEach(removeSpaces());
            
        /*
        
        Use a while/switch loop for the below
        New plan: For each data management activity, only interact with that
            activity- aka, if you're trying to merge numbers, skip everything
            that isn't two numbers, then keep iterating thrpugh each action
        Actions:
            Remove placeholder
            Combine numbers
            Decimal
            Sign-change
            Errors
                Two operators, dividing by zero, unclosed/open parenthesis,
                lagging operator, lagging decimal, leading operator
            Merge parenthesis
            Evaluate

        if 0 position != number log error
        if 0 = number
            iterate
                if counter = (
                    find ), combine all between to ( string
                    if ) dne
                        log error
            iterate
                remove e placeholder
            iterate
                if 0 && 1 = Number
                    combine
            iterate
                if counter = Number && counter+1 = decimal && counter+2 = NaN
                    log error
                else if counter = Number && counter+1 = decimal && counter+2 = Number
                    combine 
            iterate
                if counter = Number && counter+1 = *(-1)
                    Multiply counter by -1, remove *(-1), and replace coutner with 
                        sign changed number
            iterate
                if 0 = Number && 1 = operator && 2 = NaN
                    log error
                else if 0 = Number && 1 = operator && 2 = Number
                    combine 0+1+2
        */
       //let displayWindow = newDisplayWindow;
        console.log(newDisplayWindow);
    }
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