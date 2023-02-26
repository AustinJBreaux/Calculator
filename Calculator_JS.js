//Global Variables
let displayWindow = '';
let numberRegExp = [0-9];
let operatorRegExp = [/\+\/\*/i]
let displayWindowHTML = document.querySelector('.displayWindow');

//Button Functions
const testButtonClick = function testButtonClick(e){//Debug
    if(e.target.classList != 'testButton'){
        return
    }
    else if(e.target.classList == 'testButton'){
        let buttonPresses = '256*978+65412-69874/256';//Add here
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
        displayWindowHTML.innerHTML += toInsert;
    }
    
    else if(displayWindow[displayWindow.length-1] = numberRegExp){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`;
        displayWindowHTML.innerHTML += toInsert;
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
        displayWindowHTML.innerHTML += toInsert;
    }
}

const clearButtonClick = function clearButtonClick(e){
    if(e.target.classList != 'clearButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        displayWindow = ''
        displayWindowHTML.innerHTML = '';
        console.clear();
    }
}

const backspaceButtonClick = function backspaceButtonClick(e){
    if(e.target.classList != 'backspaceButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){//Working on this
        displayWindow = displayWindow.slice(0,-1);
        displayWindowHTML.innerHTML = displayWindowHTML.innerHTML.slice(0, -1);
    }
}

const signChangeButtonClick = function signChangeButtonClick(e){
    if(e.target.classList != 'signChangeButton'){
        return
    }
    
    else{
        console.log(' -');
        displayWindow = displayWindow + `e -`;
        displayWindowHTML.innerHTML += " -";
    }
 }

const decimalButtonClick = function decimalButtonClick(e){
    if(e.target.classList != 'decimalButton'){
        return
    }
    else if(displayWindow.noSuchProperty === undefined){
        let toInsert = e.target.innerText;
        displayWindow = displayWindow + `e${toInsert}`;
        displayWindowHTML.innerHTML += toInsert;
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
    finalEvaluations(displayWindowArray);
}
const combineNumbers = function combineNumbers(displayWindowArray){
    /*Note: 
        This function can cause an error if any single number is greater than 512 numbers long. 
        This character length can be extended by increasing the number after the
        "displayWindowArray.length+___" below (currently 100), but this shouldn't be a problem
    */
    for(let counter = 0; counter < displayWindowArray.length+100; counter++){
        displayWindowArray.forEach((element, index) => {
            let test1 = Number.isInteger(Number.parseInt(element));
            let test2 = Number.isInteger(Number.parseInt(displayWindowArray[index+1]));
            let combine = "";
            if(test1 && test2){
                combine = combine.concat(displayWindowArray[index]);
                combine = combine.concat(displayWindowArray[index+1]);
                displayWindowArray.splice(index, 1, combine);
                displayWindowArray.splice((index+1), 1);
           }
           else if(test1 && (displayWindowArray[index+1] == undefined)){
                combine = combine.concat(displayWindowArray[index]);
                displayWindowArray.splice(index, 1, combine)
           }
           else {
            combineNumbers
           }
        });
    }
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
const finalEvaluations = function finalEvaluations(displayWindowArray){
    do{
        let replace = 0;
        if(displayWindowArray[1] == "/"){
            replace = Number.parseFloat(displayWindowArray[0]) / Number.parseFloat(displayWindowArray[2]);
            replace = +replace.toFixed(2);
            displayWindowArray.splice(0, 1, replace);
            displayWindowArray.splice(1, 2);
        }
        else if(displayWindowArray[1] == "*"){
            replace = Number.parseFloat(displayWindowArray[0]) * Number.parseFloat(displayWindowArray[2]);
            replace = +replace.toFixed(2);
            displayWindowArray.splice(0, 1, replace);
            displayWindowArray.splice(1, 2);
        }
        else if(displayWindowArray[1] == "+"){
            replace = Number.parseFloat(displayWindowArray[0]) + Number.parseFloat(displayWindowArray[2]);
            replace = +replace.toFixed(2);
            displayWindowArray.splice(0, 1, replace);
            displayWindowArray.splice(1, 2);
        }
        else if(displayWindowArray[1] == "-"){
            replace = Number.parseFloat(displayWindowArray[0]) - Number.parseFloat(displayWindowArray[2]);
            replace = +replace.toFixed(2);
            displayWindowArray.splice(0, 1, replace);
            displayWindowArray.splice(1, 2);
        }
        else return
        
    }
    while(
        displayWindowArray != 1
    );
    console.log(displayWindowArray);
}


//Event Listeners
document.addEventListener("click", numberClick);
document.addEventListener("click", operatorClick);
document.addEventListener("click", clearButtonClick);
document.addEventListener("click", backspaceButtonClick);
document.addEventListener("click", signChangeButtonClick);
document.addEventListener("click", decimalButtonClick);
document.addEventListener("click", enterButtonClick);
document.addEventListener("click", testButtonClick);