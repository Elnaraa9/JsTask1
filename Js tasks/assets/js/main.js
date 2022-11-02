//First task

// let A=prompt('Please enter the value');
// let B=prompt('Please enter the second value');

// console.log(`${A/B}`,`Remainder: ${A%B}`);

//2nd task

// let A=prompt('Enter the first variable:');
// let B=prompt('Enter the second variable:');
// let temp=A;
// A=B;
// B=temp;
// console.log(`The value of A after swapping: ${A}`,`The value of B after swapping: ${B}`);

//2nd way

// let A=+prompt('Enter the first variable:');
// let B=+prompt('Enter the second variable:');
// A=A+B;
// B=A-B;
// A=A-B;
// console.log(`The value of A after swapping: ${A}`,`The value of B after swapping: ${B}`);

//3rd task

// let A = +prompt('Enter the first variable:');
// while (A == 0 && A == "") {
//     A = +prompt('Values must not be zero or empty! Please try again');
// }

// let B = +prompt('Enter the second variable:');
// while (B == 0 || B == "") {
//     B = +prompt('Values must not be zero or empty! Please try again');
// }
// let C = +prompt('Enter the third variable:');
// while (C == 0 || C == "") {
//     C = +prompt('Values must not be zero or empty! Please try again');
// }

// let X = (C - B) / A;
// console.log(`Answer: ${X}`);

//4th task
// let A = +prompt('Enter the first variable:');
// let B = +prompt('Enter the second variable:');
// if (A > B) {
//     console.log(`Answer: ${A + B}`);
// } else if (A == B) {
//     console.log(`Answer: ${A * B}`);
// }
// else {
//     console.log(`Answer: ${A - B}`);
// }

//5th task

// let A = +prompt('Enter the first variable:');
// let B = +prompt('Enter the second variable:');
// let C = +prompt('Enter the third variable:');
// let root1;
// let root2;

// const D=B*B-4*A*C;
// if (D>0) {
//     root1=(-B+Math.sqrt(discriminant))/2*A;
//     root2=(-B-Math.sqrt(discriminant))/2*A;
//     console.log()
// }
// else if (D==0) {
//     root1=root2=-B/2*A;
//     console.log(`The roots are equal: ${root1}, ${root2}`);
// }
// else {
//      console.log(`no solution`);
// }

//6th task

// let A = prompt('Please enter the value');
// let firstPart;
// let secondPart;
// if (A.length !== 2) {
//     alert("You must enter two-digit number!");
// }
// else {
//     if (A == 10) {
//         console.log("ten");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 11) {
//         console.log("eleven");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 12) {
//         console.log("twelve");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 13) {
//         console.log("thirteen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 14) {
//         console.log("fourteen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 15) {
//         console.log("fifteen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 16) {
//         console.log("sixteen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 17) {
//         console.log("seventeen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 18) {
//         console.log("eighteen");
//         firstPart = "";
//         secondPart = "";
//     }
//     if (A == 19) {
//         console.log("nineteen");
//         firstPart = "";
//         secondPart = "";
//     }

//     if (A.startsWith("2")) {
//         firstPart = "twenty";
//         secondPart = "";
//     }
//     if (A.startsWith("3")) {
//         firstPart = "thirty";
//         secondPart = "";
//     }
//     if (A.startsWith("4")) {
//         firstPart = "forty";
//         secondPart = "";
//     }
//     if (A.startsWith("5")) {
//         firstPart = "fifty";
//         secondPart = "";
//     }
//     if (A.startsWith("6")) {
//         firstPart = "sixty";
//         secondPart = "";
//     }
//     if (A.startsWith("7")) {
//         firstPart = "seventy";
//         secondPart = "";
//     }
//     if (A.startsWith("8")) {
//         firstPart = "eighty";
//         secondPart = "";
//     }
//     if (A.startsWith("9")) {
//         firstPart = "ninety";
//         secondPart = "";
//     }
//     if (A.endsWith("1", 2) == true && !A.startsWith("1")) {
//         secondPart = "one";
//     }
//     if (A.endsWith("2"), 2 == true && !A.startsWith("1")) {
//         secondPart = "two";
//     }
//     if (A.endsWith("3", 2) == true && !A.startsWith("1")) {
//         secondPart = "three";
//     }
//     if (A.endsWith("4", 2) == true && !A.startsWith("1")) {
//         secondPart = "four";
//     }
//     if (A.endsWith("5", 2) == true && !A.startsWith("1")) {
//         secondPart = "five";
//     }
//     if (A.endsWith("6", 2) == true && !A.startsWith("1")) {
//         secondPart = "six";
//     }
//     if (A.endsWith("7", 2) == true && !A.startsWith("1")) {
//         secondPart = "seven";
//     }
//     if (A.endsWith("8", 2) == true && !A.startsWith("1")) {
//         secondPart = "eight";
//     }
//     if (A.endsWith("9", 2) == true && !A.startsWith("1")) {
//         secondPart = "nine";
//     }
// }
// console.log(`A: ${firstPart}, ${secondPart}`);

//7th task

// let x=+prompt('Please enter the value');
// let y=+prompt('Please enter the value');
// let r=+prompt('Please enter the value');
// r=Math.sqrt(x*x+y*y);
// let d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));

// if (d>r) {
//     console.log(`The point ${x},${y} is outside of circle`);
// }
// else if (d==r) {
// console.log(`The point (${x},${y}) is on the circle.`); 
// } else {
//     console.log(`The point (${x},${y}) is inside of circle.`);
// }
