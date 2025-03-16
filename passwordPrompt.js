const correctPassword = "696969"; // the correct password
let userPassword;
do { // do while so, users prompted at least once
    userPassword = prompt("Enter your password:");
    if (userPassword !== correctPassword) { // when password is incorrect 
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);  //while condition executes "access granted" when password mathces.
 
console.log("Access granted.");