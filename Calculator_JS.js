/*
Notes:
Create all calculator operations:
    Add
    Subtract
    Multiple
    Divide
    Operate - Takes an operator (like the above) and 2 numbers, then uses that
        operator on those numbers
    Clear - Clear all data stored
    Decimals (Round to the 10th place, and only allow one per number)
    Equals
    Positive/negative integers
    Storage of the display value for the operate button
    users should be able to string operators (like 5 + 4 + 3 etc)
    First number should interact directly with the second, no order of operations 
        bullshit (So 5 + 5 - 2 * 3 = 24)
    If an operator is called without a following number, delete the operator
        and display the first number
        Snarky message if someone tries to divide by 0
    Toggle button for allowing keyboard controls
    Backspace button

Pseudocode:
displayWindow = '' initially
Add event listener if target = button 
        let firstNumber = Button string
        displayWindow = displayWindow + firstNumber + ' '
    if displayWindow contains +-*%
        let secondNumber = button string
        displayWindow = displayWindow + secondNumber + ' '
    else return
If displayWindow != ''
        displayWindow = displayWindow + operator
    else if operator is clicked, replace old operator with new
    else return
addEventListener clearbutton
    let displayWindow = ''
    let firstNumber = ''
    let operator = ''
    let secondNumber = ''
addEventListener backspace
    invert displayWindow
    splice every ' '
    remove lastChild
addEventListener =
    splice every ' '
    parseInt or regex number/operator on splices
    result = firstNumber operator secondNumber
    displayWindow = result
    if decimal math.floor
    if operator = % and secondNumber = 0
        zeroErrorCounter ++
        if zeroErrorCounter > 1 cheekyZeroMessage
        cheekyZeroMessage
            pick random number between 1-10, each causes a different message
            ex. "Instructions unclear, universe accidentally destroyed"
addEventListener +/-
    operator = *
    secondNumber = -1
*/