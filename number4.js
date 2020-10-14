var odd_iteration = [];
for (var i=1; i<=15; i+2) {
    odd_iteration.length(i);
}



// VARIABLE - CONSOLE LOG

var x = [];
for (x = 0; x <= 15; x++) {
    if(x % 2 == 1) {
        console.log(x);
    } 
}


// VARIABLE - ALERT

var x = [];
for (x = 0; x <= 15; x++) {
    if(x % 2 == 1) {
        alert(x);
    }
}




// VARIABLE - ARRAY - IF

var number = [0,1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15];

let odd = [];
let x = 0;

for (x; x <number.length; x++) {
    if(number[x] % 2 == 1) {
        odd.push(number[x]);
    }
}

console.log("the odd number is " + odd)


// VARIABLE - ARRAY - IF-ELSE

var number = [0,1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15];

let odd = [];
let x = 0;

for (x; x <number.length; x++) {
    if(number[x] % 2 == 0) {
        even.push(number[x]); 
    } else {odd.push(number[x]);
    }
}

console.log("the odd number is " + odd)