
// SWITCH CASE

let day = prompt ("What day is it?");
    alert(`Today is ${day}`);

switch(day) {
    case "Monday":
        alert("Tomorrow is Tuesday");
        break;
    case "Tuesday":
        alert("Tomorrow is Wednesday");
        break;
    case "Wednesday":
        alert("Tomorrow is Thursday");
        break;
    case "Thursday":
        alert("Tomorrow is Friday");
        break;
    case "Friday":
        alert("Tomorrow is Saturday");
        break;
    case "Saturday":
        alert("Tomorrow is Sunday");
        break;
    case "Sunday":
        alert("Tomorrow is Monday");
        break;
    default:
        alert("It's your vacation time!")
}


// FUNCTION & IF-ELSE

function working_time(day) {
    if(day === "Monday") {
        console.log("Tomorrow is Tuesday");
    } else if(day === "Tuesday") {
        console.log("Tomorrow is Wednesday");
    } else if (day === "Wednesday") {
        console.log("Tomorrow is Thursday");
    } else if(day === "Thursday") {
        console.log("Tomorrow is Friday");
    } else if(day === "Friday") {
        console.log("Tomorrow is Saturday");
    } else if(day === "Saturday") {
        console.log("Tomorrow is Sunday");
    } else if(day === "Sunday") {
        console.log("Tomorrow is Monday");
    } else {
        console.log("It's your vacation time!");
    }
}

console.log(working_time("Holiday"))