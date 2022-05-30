document.querySelector("main").style.backgroundColor="rgb(252, 239, 224)"
document.getElementById("team").innerHTML="TEAM"
document.getElementById("team").style.fontSize="26px"
document.getElementById("team").style.color="#8c7632"
document.getElementById("team").style.marginTop="-40px"
document.getElementById("teamname").innerHTML="HERMES"
document.getElementById("teamname").style.fontSize="60px"
document.getElementById("teamname").style.color="#a65d03"
document.getElementById("card").style.backgroundColor="white"
document.getElementById("card").style.position="relative"
document.getElementById("card").style.width="50%"
document.getElementById("card").style.margin="auto auto"
document.getElementById("card").style.padding="10px 10px 10px 30px"
document.getElementById("card").style.boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
document.getElementById("card").style.borderRadius="20px"
document.getElementById("card").style.overflow="hidden"
document.getElementById("card").style.zIndex="1"

// list of members
let members ={
    "team1": "Codegiyu",
    "team2": "Natacha",
    "team3": "DeeVee",
    "team4": "Fawsiyyah",
    "team5": "Adedamola",
    "team6": "Ifechukwude",
    "team7": "Michael",
}
console.log(members["team7"])


// personal info
let Michael = {
    "first name": "Chinonso",
    "last name": "Okike",
    "best movie": "Citation",
    "best food": "Fried Plantain",
    "complexion": "dark",
    "birth month": "August",
    "State": "Enugu",
    "group name": "Hermes",
}

console.log(Michael["best movie"]);


console.log(10%4);

// funtion to print remainder

function remainder (a, b) {
    return a%b;
}

console.log(remainder(9,10));

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number a: ");
let b = prompt("Enter the second number b: ");
let c = prompt("Enter the third number c: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}


function areaOfCircle(r, unit) {
    const pi = 3.142;
    let area = pi * Math.pow(r, 2);
    let answer = "The area of the circle is " + area.toFixed(2) + unit + " squared."
    return answer;
}

console.log(areaOfCircle(9, "cm"));

// to calculate simple interest
let p, t, r, SI;
// p = principal
// t= time(months)
// r= rate
// SI= simple interest

p= 8200;
t= 54;
r= 17.5;

SI = (p * r * t) /100

console.log("Simple Interest=" + SI);



function bmiCalculator(mass, height) {
    let bmi = mass / Math.pow(height, 2);
    return bmi;
}

function compareBmi(testData) {
    let mass1 = Object.values(testData)[0][0];
    let mass2 = Object.values(testData)[1][0];
    let height1 = Object.values(testData)[0][1];
    let height2 = Object.values(testData)[1][1];

    let bmi1 = bmiCalculator(mass1, height1);
    let bmi2 = bmiCalculator(mass2, height2);

    let meritHigherBMI = bmi1 > bmi2;

    let result = Object.values(testData)[0][2] + "'s BMI is " + bmi1.toFixed(2) + " and " + Object.values(testData)[1][2] + 
    "'s BMI is " + bmi2.toFixed(2) + ". Hence " + Object.values(testData)[0][2] + " having a higher BMI is " + meritHigherBMI + "."

    return result;
}

let testData1 = {
    Merit: [78, 1.69, "Merit"],
    Nutjob: [92, 1.95, "Nutjob"]
}

let testData2 = {
    Merit: [85, 1.76, "Merit"],
    Nutjob: [95, 1.88, "Nutjob"]
}

console.log(compareBmi(testData1));
console.log(compareBmi(testData2));