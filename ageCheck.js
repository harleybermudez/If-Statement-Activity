let age = prompt("Please enter your age:");

// converting input to integer
age = Number(age);


if (age < 13) {  //if the age is less than 13 it logs "You are a child."
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) { //if the age is between 13 and 19 it logs "You are a teenager."
    console.log("You are a teenager."); //and strict equality so age must be greater than or equal to 13 and less than or equal to 19
} else if (age >= 20 && age <= 59) { 
    console.log("You are an adult.");
} else if (age >= 60) {  
    console.log("YOUR A SENIOR na po."); //else when the age is greater than or equal to 60 
} else {
    console.log("Invalid age entered."); //if entered is not a number
}