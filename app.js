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
// var num1=+prompt("Enter the marks");
// var num2=+prompt("Enter the marks");
// var num3=+prompt("Enter the marks");
// var total=num1+num2+num3;
// var percentage;
// percentage=(total/300)*100;
// if(percentage>=90){
    
//     console.log("Grade: A-one ");
//     console.log("Remarks: Excellent");
//     console.log("Obtained marks: "+total)
//     console.log("total marks: 300");
//     console.log("Percentage:"+percentage+"%");

// }else if(percentage>=70){
//     console.log("Grade: A");
//     console.log("Remarks: Good");
//     console.log("Obtained marks: "+total)
//     console.log("total marks: 300");
//     console.log("Percentage"+percentage+"%");
// }else if(percentage>=60){
//     console.log("Grade: B");
//     console.log("Remarks: You need to improve");
//     console.log("Obtained marks: "+total)
//     console.log("total marks: 300");
//     console.log("Percentage"+percentage+"%");

// }else{
//     console.log("fail");
//     console.log("sorry")
// }
//Q7:
// var num1=+prompt("Guess Game","Guess Number");

// if(num1==10){
//     console.log("“Bingo! Correct answer");


// }else if(num1==9) {

//     console.log("Close enough to the correct answer");
// }else{
//     console.log("Incorrect Number");
// }
//Q8:
// var number =+prompt("Enter the number");
// if( number % 3 == 0) {
//     console.log(number+"is divisible by three:");
// }else{
//     console.log("this number not divisible by 3:")
// }
//Q9:
// var num1=+prompt("Enter the number");
// if(num1%2==0){
//     console.log("Even Number:");
    
// }else{
//     console.log("Odd Number:")
// }
//Q10:
// var num1=+prompt("Enter the Temperature");
// if(num1>40){
//     console.log("It is too hot outside.");
// }else if(num1>30){
//     console.log("The Weather today is Normal.");
// }else if(num1>20){
//     console.log("Today's Weather is cool.");
// }else if(num1>10){
//     console.log("OMG! Today's Weather is so Cool. ");
// }else{
//     console.log("Snow Falling ");
// }
//Q11:
// var num1=+prompt("First number.","Enter the Number");
// var num2=+prompt("Second number.","Enter the Number ");
// var operation=prompt("Select Operator"," * , / , + , - , % " );
// var total;
// if(operation==="*"){
//     total=num1*num2;
//     console.log("Total= "+total);
// }else if(operation==="/"){
//     total=num1/num2;
//     console.log("Total= "+total);
// }else if(operation==="+"){
//     total=num1+num2;
//     console.log("Total= "+total);
// }else if(operation==="-"){
//     total=num1-num2;
//     console.log("Total= "+total);
// }else if(operation==="%"){
//     total=num1%num2;
//     console.log("Total= "+total);
// }else{
//     console.log("Incorrect Operator");
// 
//------------chapter-113
//Q1
// const letter = 'A';

// if (letter.toUpperCase() === letter) {
//   // 👇️ this runs
//   console.log('✅ letter is uppercase');
// } else {
//   console.log('⛔️ letter is lowercase');
// }
 
// // Java implementation of the above approach
 
// class GFG
//  {
    
 
//     static void check(char ch) 
//     { 
     
//         if (ch >= 'A' && ch <= 'Z') 
//             System.out.println("\n" + ch + 
//                     " is an UpperCase character"); 
     
//         else if (ch >= 'a' && ch <= 'z') 
//             System.out.println("\n" + ch + 
//                     " is an LowerCase character" ); 
     
//         else
//             System.out.println("\n" + ch + 
//                     " is not an alphabetic character" ); 
//     } 
 
//     // Driver Code 
//     public static void main(String []args)
//     { 
//         char ch; 
     
//         // Get the character 
//         ch = 'A'; 
     
//         // Check the character 
//         check(ch); 
     
//         // Get the character 
//         ch = 'a'; 
     
//         // Check the character 
//         check(ch); 
     
//         // Get the character 
//         ch = '0'; 
     
//         // Check the character 
//         check(ch); 
     
//     } 
// }
//Q2:

//Q3:

// var number=+prompt("enter the number");

// if (number > 0) {
//     console.log("The number is positive");
// }

// else if (number == 0) {
//   console.log("The number is zero");
// }

// else {
//      console.log("The number is negative");
// }
//Q4:
// var alphabets=prompt("Enter the vowels","a , e , i , o , u");
// if(alphabets === "a"){
//     console.log("The alphabets is vowels");
// }else if(alphabets === "e"){
//     console.log("The alphabets is vowels");
// }else if(alphabets === "i"){
//     console.log("The alphabets is vowels");

// }else if(alphabets === "i"){
//     console.log("The alphabets is vowels");
// }else if(alphabets === "o"){
//     console.log("The alphabets is vowels");
// }else if(alphabets === "u"){
//     console.log("The alphabets is vowels");
// }else{
//     console.log("The Alphabets is notvowels");
// }
//Q5:
//Q6:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }
//Q7

