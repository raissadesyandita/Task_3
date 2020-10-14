
// FUNCTION & IF-ELSE

function score(x) {
    if(x > 100) {
        console.log("Whoa! Did you cheat?")
    } else if(x >= 90) {
        console.log("You got A!");
    } else if(x >= 75) {
        console.log("You got B!");
    } else if (x >= 60) {
        console.log("You got C!");
    } else if(x >= 50) {
        console.log("You got D!");
    } else {
        console.log("You need to take the test again.");
    }
}

console.log(score(90))