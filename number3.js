
// VARIABLE - CONSOLE LOG

var x = [];
for (x = 0; x <= 20; x++) {
    if(x % 2 == 0) {
        console.log(x);
    } 
}


// VARIABLE - ALERT

var x = [];
for (x = 0; x <= 20; x++) {
    if(x % 2 == 0) {
        alert(x);
    }
}




// VARIABLE - ARRAY

var number = [0,1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let even = [];
let x = 0;

for (x; x <number.length; x++) {
    if(number[x] % 2 == 0) {
        even.push(number[x]);
    }
}

console.log("the even number is " + even)