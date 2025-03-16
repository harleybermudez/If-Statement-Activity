
// Prompt to user
let day = prompt("Enter a day of the week:");

//converts the input to lowercase to match cases
day = day.toLowerCase();


switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments and MCO.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is:  Review for Exam.");
        break;Attend
    case "wednesday":
        console.log("Your task for Wednesday is: Review.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: EXAM.");
        break;
    case "friday":
        console.log("Your task for Friday is: Exam.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Matulog? mag valorant.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: mag valorant.");
        break;
    default:
        console.log("Invalid day entered. Please enter a day of the week.");
        break;
    }
