// var num1= +prompt();
// var num2= +prompt();
// var opt=prompt();
// if(opt==="+"){
//     var result=num1+num2
//     console.log(result);
    
// }
// else if(opt==="-"){
//     result=num1-num2
//     console.log(result);

// }
// else if(opt==="*"){
//     result=num1*num2
//     console.log(result);

// }
// else if(opt==="/"){
//     result=num1/num2
//     console.log(result);

    
// }
// else if(opt==="%"){
//     result=num1%num2
//     console.log(result);

// }
// else{
//     console.log("opretor not correct");
// }
// var num1=+prompt("Enter the number");
// var num2=+prompt("Enter the number");
// var opretor=prompt("Select Operater");

// if(opretor=="+"){
//     var result=num1+num2;
//     console.log(result);

// }
// else if(opretor=="-"){
//     var result=num1-num2;
//     console.log(result);

// }
// else{
//     console.log("incorrect operater!!");
// }

// ------------chapter 9_________
//Q1:
// var city=prompt("Entery the City name");
// if(city =="karachi"){
// console.log('Welcome to the City of light');
// }

//Q2:
// var gender=prompt('Enter the gender:');
// if (gender=="male"){
//     console.log('Good Morning Sir.');

//     }
// else if(gender=="female")
// {console.log('Good Morning Maam.');

// }
// else{
//     console.log('incorrect!');
// }

//Q3:
// var color=prompt("Enter The color:");
// if(color=="Red"){
//     console.log(color);
//     console.log("Must Stop");

// }
// else if(color=="Yellow"){
//     console.log(color);
//     console.log("Ready to move");

// }
// else if(color=="Green"){
//     console.log(color);
//     console.log("Move now");
    
// }

//Q4:
// var fuel=+prompt("fuel in the car");
// if(fuel<0.25){
//     console.log(fuel+"liters")
//     console.log("please refill the fuel in your car");

// }

//Q5:a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// alert("true");

// }
//Q5:b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");

// }
// else{
//     alert("fales");
// }
//Q5:c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//Q5:d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//Q5:e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//Q5:f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//Q6:
var num1=+prompt("Enter the marks");
var num2=+prompt("Enter the marks");
var num3=+prompt("Enter the marks");
var total=num1+num2+num3;
var percentage;
percentage=(total/300)*100;
if(percentage>=90){
    
    console.log("A-one ");
    console.log("Excellent");
    console.log(percentage);

}else if(percentage>=70){
    console.log("A");
    console.log("Good");
    console.log(percentage);
}else if(percentage>=60){
    console.log("B");
    console.log("You need to improve");
    console.log(percentage);

}else{
    console.log("fail");
    console.log("sorry")
}