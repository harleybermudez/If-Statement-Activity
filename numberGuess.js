const correctNumber = 6; // number to be guessed
let guess = 0; //the starting placeholder must not = to the correct number 

while (guess !== correctNumber) { // since 0 is not equal to the correctnumber it will start the loop until user gueesed the correct number.
    guess = Number(prompt("Guess a number between 1 and 10:"));
    
    if (guess < correctNumber) {
        console.log("higher teh!");
    } else if (guess > correctNumber) {
        console.log("lower teh!");
    } else {
        console.log("Correct!");
    }
}