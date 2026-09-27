// ===== Task 1: Variables & Data Types =====

let firstName = "Tochukwu";
let lastName = "Nwodo";
let age = 21;
const studentId = "STU-2023-260607";
const gpa = 3.2;
let isEnrolled = true;
let graduationDate = null;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

firstName = "COSPRO";
console.log("Updated First Name:", firstName);


// ===== Task 2: Operators =====

let totalScore = 0;
console.log("Starting score:", totalScore);

totalScore += 45;
console.log("After first test (+45):", totalScore);

totalScore += 30;
console.log("After second test (+30):", totalScore);

totalScore -= 5;
console.log("After error deduction (-5):", totalScore);

totalScore *= 2;
console.log("After bonus round (doubled):", totalScore);

totalScore++;
console.log("After increment (+1):", totalScore);

console.log("Remainder when divided by 7:", totalScore % 7);


// ===== Task 3: Type Conversion =====

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// parseInt() reads a string and pulls out a whole number, ignoring anything after it
let convertedAge = parseInt(studentAge);
console.log("Converted Age:", convertedAge, "| Type:", typeof convertedAge);

// parseFloat() works like parseInt() but keeps decimal places instead of cutting them off
let convertedScore = parseFloat(examScore);
console.log("Converted Score:", convertedScore, "| Type:", typeof convertedScore);

// Number() converts an entire string to a number in one direct step — used here since the task specifically asked for this method
let convertedPassMark = Number(passMark);
console.log("Converted Pass Mark:", convertedPassMark, "| Type:", typeof convertedPassMark);

// String() converts any value into text — needed here since studentName started as a number, not a string
let convertedName = String(studentName);
console.log("Converted Name:", convertedName, "| Type:", typeof convertedName);

console.log("Is exam score greater than pass mark?", convertedScore > convertedPassMark);


// ===== Task 4: Conditional Statements =====

// --- Test 1: score = 73 ---
 //let score = 73;
 //if (score >= 70) {
 //console.log("Score:", score, "| Grade: A - Distinction");
 //} else if (score >= 60) {
// console.log("Score:", score, "| Grade: B - Merit");
 //} else if (score >= 50) {  console.log("Score:", score, "| Grade: C - Pass");
 //} else if (score >= 40) {
//   console.log("Score:", score, "| Grade: D - Near Pass");
 //} else {
 //  console.log("Score:", score, "| Grade: F - Fail");
 //}

// --- Test 2: score = 55 (currently active)---
 let score = 55;
 if (score >= 70) {
   console.log("Score:", score, "| Grade: A - Distinction");
 } else if (score >= 60) {
   console.log("Score:", score, "| Grade: B - Merit");
 } else if (score >= 50) {
   console.log("Score:", score, "| Grade: C - Pass");
 } else if (score >= 40) {
   console.log("Score:", score, "| Grade: D - Near Pass");
 } else {
   console.log("Score:", score, "| Grade: F - Fail");
 }

// --- Test 3: score = 25 ---
//let score = 25;
//if (score >= 70) {
 // console.log("Score:", score, "| Grade: A - Distinction");
//} else if (score >= 60) {
 // console.log("Score:", score, "| Grade: B - Merit");
//} else if (score >= 50) {
//  console.log("Score:", score, "| Grade: C - Pass");
//} else if (score >= 40) {
 // console.log("Score:", score, "| Grade: D - Near Pass");
//} else {
 // console.log("Score:", score, "| Grade: F - Fail");
//}