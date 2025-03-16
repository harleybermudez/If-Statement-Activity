let score = Number(prompt("Enter your score:")); //prompt to enter score

if (score >= 101) {
    console.log("You SURE?"); //if score is suspiciously high
}else if (score ===100) {//if score is perfect
    console.log("Perfect!"); 
} else if (score >= 90) { //when it is excellent
    console.log("Excellent");    
} else if (score >= 80) {  // when it is god
    console.log("Good");
} else if (score >= 70) {  //if score isfair
    console.log("Fair"); 
} else {
    console.log("Needs Improvement");
}