//Global Variables
let displayWindow = '';
let numberRegExp = [0-9];
let operatorRegExp = [/\+\/\*/i]

//Button Functions
const testButtonClick = function testButtonClick(e){//Debug
    if(e.target.classList != 'testButton'){
        return
    }
    else if(e.target.classList == 'testButton'){
        let buttonPresses = '100*2658';//Add here
        let splitTest = buttonPresses.split('');
        splitTest.forEach((element, index) => {
            splitTest.splice(index, 1, `e${element}`)
        });
        displayWindow = splitTest.join('');
        console.log(`Pressing ${buttonPresses}`);
    }
    else return
}
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
    
    else return
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
        console.clear();
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
        let displayWindowArray = displayWindow.split('e');
        displayWindowArray = displayWindowArray.filter(displayWindowArray => displayWindowArray != "");
        checkDividingByZero(displayWindowArray);
        dataFunctions(displayWindowArray);
        for(let counter = 0; counter < 10; counter++){//Replace with do while length != 1

        }
         
    console.log(displayWindowArray);
    }
 }

 //Error Functions
 //All error functions have been removed, rely on the user to figure out why it's erroring
 //They're in a notepad in the calculator folder
 
const checkDividingByZero = function dividingByZero(displayWindowArray){
    displayWindowArray.forEach((element, index) => {
        if(element == "/" && displayWindowArray[index+1] == "0"){
            console.log("Error - Division by zero");
            return
        }
    });
}

//Data Functions
const dataFunctions = function dataFunctions(displayWindowArray){
    combineNumbers(displayWindowArray);
    placeholderForDecimal(displayWindowArray);
    combineDecimalNumbers(displayWindowArray);
    signChange(displayWindowArray);
    signChange(displayWindowArray);
    //mergeBetweenParenthesis(displayWindowArray);
    //finalEvaluations(displayWindowArray);
}

const combineNumbers = function combineNumbers(displayWindowArray){
    displayWindowArray.forEach((element, index) => {
        let previous = Number.isInteger(Number.parseInt(displayWindowArray[index-1]));
        let current = Number.isInteger(Number.parseInt(displayWindowArray[index]));
        let next = Number.isInteger(Number.parseInt(displayWindowArray[index+1]));
        if(!previous && current){
            return
        }
        else if(previous && current){
            let combined = displayWindowArray[index].concat(displayWindowArray[index+1]);
            displayWindowArray.splice(index, 1, combined);
            displayWindowArray.splice(index+1, 1);
        }
        else if(current && next){
            let combined = 
        }
        else if(current && !next){
            let combined = displayWindowArray[index-1].concat(displayWindowArray[index]);
            displayWindowArray.splice(index-1, 1, combined);
            displayWindowArray.splice(index, 1);
        }
       
    });
    
    
    /*Works for 2 consecutive
    
    displayWindowArray.forEach((element, index) => {
        if(testNumber.includes(element) && testNumber.includes(displayWindowArray[index+1])){
            let combined = element.concat(displayWindowArray[index+1]);
            displayWindowArray.splice(index, 1, combined);
            displayWindowArray.splice(index+1, 1);
        }
        else if(testNumber.includes(element.split('')) &&
        testNumber.includes(displayWindowArray[index+1])){
            console.log(element.split());
        }
    });
    */
}
const placeholderForDecimal = function placeholderForDecimal(displayWindowArray){
    displayWindowArray.forEach((element, index) => {
        if(element == "." && !Number.isInteger(Number.parseInt(displayWindowArray[index-1]))){
            displayWindowArray[index] = element.replace(".", "0.");
        }
    });
}
const combineDecimalNumbers = function combineDecimalNumbers(displayWindowArray){
    displayWindowArray.forEach((element, index) => {
        switch(element){
            case ".":
                if(Number.isInteger(Number.parseInt(displayWindowArray[index-1]))
                && Number.isInteger(Number.parseInt(displayWindowArray[index+1]))){
                    let combined = displayWindowArray[index-1].concat(displayWindowArray[index]);
                    combined = combined.concat(displayWindowArray[index+1]);
                    displayWindowArray.splice(index-1, 1, combined);
                    displayWindowArray.splice(index, 2);
            }
                else return
                break

            case "0.":
                if(Number.isInteger(Number.parseInt(displayWindowArray[index+1]))){
                    let combined = displayWindowArray[index].concat(displayWindowArray[index+1]);
                    displayWindowArray.splice(index, 1, combined);
                    displayWindowArray.splice((index+1), 1);
            }
            else return
            break
        }
    });
}
const signChange = function signChange(displayWindowArray){
    displayWindowArray.forEach((element, index) => {
        let signChangeTest = [" -"];
        if(signChangeTest.includes(element)){
            let combined = displayWindowArray[index].concat(displayWindowArray[index+1]);
            displayWindowArray.splice(index, 2, combined);
        }
    });
}
const mergeBetweenParenthesis = function mergeBetweenParenthesis(displayWindowArray){
    let parenthesisStart = undefined;
    let testOpenParen = (element) => {element == "("}
    let skipValue = 0;
    let parenthesisEnd = "";
    parenthesisStart = displayWindowArray.findIndex(testOpenParen);
    console.log(parenthesisStart);
    for(let position = parenthesisStart+1; position < displayWindowArray.length; position++){
        console.log(position);
        if(displayWindowArray[position] == "("){
            skipValue++;
            return
        }
        else if(skipValue > 0 && displayWindowArray[position] == ")"){
            skipValue--;
            return
        }
        else if(skipValue < 1 && displayWindowArray[position] == ")"){
            parenthesisEnd = position;
            let toCombineLength = parenthesisEnd - parenthesisStart;
            let combined = "";
            for(let mergeCounter = 1; mergeCounter < toCombineLength; mergeCounter++){
                combined = displayWindowArray[parenthesisStart].concat(
                    displayWindowArray[parenthesisStart+mergeCounter]
                )
                displayWindowArray.splice(parenthesisStart, 0, combined);
                displayWindowArray.splice(parenthesisStart, 1);
            }
        }
        else{
            return
        }
    }
}

const finalEvaluations = function finalEvaluations(displayWindowArray){
    /*
    let accumulator = displayWindowArray[0];
    let operator = displayWindowArray[1];

    if(initialvalue != Undefined){
        const finalDisplayWindow = displayWindowArray.reduce(
        (first, accumulator) => {
            first `${operator}` accumulator, initialValue
        }
    )
    }
    else if(initialValue == undefined){
        let initialValue = 0;
        const finalDisplayWindow = displayWindowArray.reduce(
        (first, accumulator) => {
            first `${operator}` accumulator, initialValue
        }
    }
    */
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
document.addEventListener("click", testButtonClick)