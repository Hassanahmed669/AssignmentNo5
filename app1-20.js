
// MY ALL CODES ARE WORKING JUST (2 to 3) QUESTIONS ARE INCOMPLETE I HAVE MENTIONED. //


/*CHAPTER 1*/


/*Q1
alert("Welcome to me page");*/

/*Q2
alert("Error! Please enter a valid password");*/

/*Q3
alert("Welcome to JS Land \nHappy Coding");*/

/*Q4
alert("Error! Please enter a valid password");
alert("Welcome to JS Land \nHappy Coding");*/


/*Q5 
alert("Hello! I can run JS through web browser's console");*/


/*Q6 # used this welcome alert in my website (in assignment 4)*/
/*<script>alert ("Welcome to Install Everything!"); </script>*/


/*Q7*/
/*used in this html*/


/*CHAPTER 2*/

/*Q1
var username;*/


/*Q2
var myName = "Hassan Ahmed";*/


/*Q3
var message = "Hello World"
alert(message);*/


/*Q4
var student = ["Jhone Doe", "15 years old", "Certified Mobile Applicatoin Development"];
for (i = 0; i < student.length; i++) { 
  alert(student[i]);
}*/


/*Q5
var arrayOfArrays = "PIZZA";
var a = arrayOfArrays.slice(0,5)

for (var i = 6; i > 1; i--){
		document.write(arrayOfArrays.slice(0,i-1));
		document.write("<br>")
}*/


/*Q6
var email = "example@example.com";
alert("My email address is " + email);*/


/*Q7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);*/


/*Q8
document.write("I can write HTML content through JavaScript");*/


/*Q9
alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”');
document.write('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”');*/


/*CHAPTER 3*/

/*Q1
var age = 15;
alert("I am " + age + " years old")*/


/*Q2*/
/*Skipped as discuessed in Live Sessoin.*/


/*Q3
var birthYear = 1994;
document.write("My birth year is " + birthYear + "<br>Data type of my decleared variable is number");*/


/*Q4
var visitorName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write( "<b>"+visitorName+"</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing Store.")*/




/*CHAPTER 4*/

/*Q1
var [a,b,c] = [0,1,2];
document.write(a,b,c);*/


/*Q2*/
/*var 1 = "illegal";
var 1a = "illegal";
var h a = "illegal";
var var = "illegal"
var ?a = "illegal";*/


/*var a = "legal";
var a1 = "legal";
var a_1 = "legal";
var VAR = "legal";
var $a = "legal"*/


/*Q3
document.write("<h3>Rules for naming JS variables</h3>");

var [a,b,c] = ["numbers", "$", "_"]
document.write("Variable names can only contain, " + a + ", " + b + " and " + c + " . For example : $my_1stVariable <br>" );

var [a,b,c] = ["letter", "$", "_"]
document.write("Variable names can only contain, " + a + ", " + b + " or " + c + " . For example : $name, _name or name <br>" );

var case_sensitive = "sensitive";
document.write("Variable names are case " + case_sensitive + "<br>" );

var keyword = "keywords";
document.write("Variable names should not be JS " + keyword  );*/



/*CHAPTER 5*/


/*Q1
var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d= parseInt(b);
var result = c + d;
document.write("Sum of " + c + " and " + d + " is " + result + "<br>")*/


/*Q2
var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c - d;
document.write("Subtraction of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c * d;
document.write("Multiplication of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c / d;
document.write("Division of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c % d;
document.write("Modulus of " + c + " and " + d + " is " + result + "<br>")*/



/*Q4
var ticket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + ticket*5 + "PKR");*/



/*Q5
document.write("Table of 4<br>")

for (var i = 1; i <= 10; i++){
		document.write(4 + " x " + i + " = " + 4*i + "<br>");
}*/



/*Q7
var item1 = parseInt(prompt("Price of item 1:"));
var item2 = parseInt(prompt("Price of item 2:"));
var quantity1 = parseInt(prompt("Ordered quantity of item 1:"));
var quantity2 = parseInt(prompt("Ordered quantity of item 2:"));
var charges = parseInt(prompt("Shipping charges:"));

document.write("<h2> Shopping Cart</h2>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 1 is " + quantity2 + "<br>");
document.write("Shipping Charges: " + charges + "<br><br>");

var item1total = item1*quantity1; 
var item2total = item2*quantity2; 

var total = ((+item1total) + (+item2total) + (+charges));
document.write("Total cost of your order is " + total);
*/



/*Q8
var totalMarks = parseInt(prompt("Enter your total marks!!"));
var marksObtained = parseInt(prompt("Enter your obtained marks!!"));

document.write("<h3>Marks Sheet</h3> <br>");
document.write("Total marks : "+ totalMarks +" <br>");
document.write("Marks obtained : " + marksObtained + "<br>");

var percent = marksObtained/totalMarks * 100;
document.write("Percentage : " + percent +"%<br>");
*/



/*Q9
var dollar = 10;
var riyal = 25;

var total = ((dollar*104.80) + (riyal*28))

document.write("<h2> Currency in PKR</h2>");
document.write("Total Currency in PKR: " + total);
*/


/*Q10
var num1 = 10;
var addFive = 5;

var final = (((+num1)+(+addFive)) * 10 ) / 2;
document.write("The final answer is: " + final)
*/


/*Q11
var year = 2016;
var birth = 1992;
var age = year - birth;

document.write("<h2>Age Calculator </h2>");
document.write("Current year is: " + year + "<br>");
document.write("Birth year: " + birth + " <br> ");

var possible = age+1;
document.write("Your age is: " + age + " or " + possible);
*/



/*Q12
var r = 20;

var cir = 2 * 3.142 * r;
var area = 3.142 * (r*r);

document.write("<h2>The Geomertrizer </h2>");
document.write("Radius of a circle: " + r + " <br>");
document.write("The circumference is: " + cir + " <br>");
document.write("The area is: " + area + " <br>");
*/







/*CHAPTER 6 to 9*/



/*Q1 INCOMPLETE

var a = prompt("Enter a number!")

document.write("Result: " )
document.write("<br>The Value of a is : ", a)    

++a;
document.write("<br><br>The Value of ++a is : ", a)
document.write("<br>Now the Value of a is : ", a)

a++;
document.write("<br><br>The Value of a++ is : ", a)
document.write("<br>Now the Value of a is : ", a)
*/



/*Q2
var a = 2, b = 1;
document.write("Intial value of a is " +a+ " and Intial value of b is "+b)

var result = --a - --b + ++b + b--;

document.write("<br>--a; =>  1")
document.write("<br>--a - --b; => 1")
document.write("<br>--a - --b + ++b; => 2 ")
document.write("<br>--a - --b + ++b + b++; => 3 <br>")
document.write("Result : ", result)*/


/*Q3
var username = prompt("Please Enter your name!!");
alert("Welcome to my page " + username);
document.write("Welcome to my page " + username);*/


/*Q4
No Question at 4*/


/*Q5
var tableNumber = prompt("Enter a number: ");
var table = parseInt(tableNumber);

if ( tableNumber === ""){
	for (var i = 1; i <= 10; i++){
		document.write(5 + " x " + i + " = " + 5*i + "<br>");
	}	
}

else{
	for (var i = 1; i <= 10; i++){
		document.write(table + " x " + i + " = " + table*i + "<br>");
	}
}*/



/*Q6
var English = prompt("Enter 1st subject name!!");
var Urdu = prompt("Enter 2nd subject name!!");
var Maths = prompt("Enter 3rd subject name!!");

var total = 100;

var EnglishMarks = parseInt(prompt("Enter your english marks!!"));
var UrduMarks = parseInt(prompt("Enter your urdu marks!!"));
var MathsMarks = parseInt(prompt("Enter your math marks!!"));

var engpercent = EnglishMarks/100 * 100;
var urdupercent = EnglishMarks/100 * 100;
var mathpercent = EnglishMarks/100 * 100;

document.write("<b>Subject  Total Marks  Obtained Marks  Percentage</b> <br>");
document.write(English+ " 100  " + EnglishMarks + " " + engpercent + "% <br>");
document.write(Urdu+ " 100  " + UrduMarks + " " + urdupercent + "% <br>");
document.write(English+ " 100  " + EnglishMarks + " " + mathpercent + "% <br>");

var sum = EnglishMarks += UrduMarks += MathsMarks;
var percent = sum/300 * 100;

document.write("<b> 300  " + sum + " " + percent + "% </b><br>");
*/



/*CHAPTER 9 to 11*/


/*Q1
var cityName = prompt("Enter your city name!!");
var city = cityName.toLowerCase()

if (city === "karachi"){
	document.write("Welcome to the city of lights");
}
else{
	document.write("Welcome to other city.")
}*/


/*Q2
var gen = prompt("Enter your gender!!");
var gender = gen.toLowerCase()

if (gender === "male"){
	document.write("Good morning Sir.");
}
else if (gender === "female"){
	document.write("Good morning Maam.");
}*/


/*Q3
var color = prompt("Enter your signal color!!");
var colorLower = color.toLowerCase()

if (colorLower === "red"){
	document.write("Must Stop.");
}
else if (colorLower === "yellow"){
	document.write("Ready to move.");
}
else if (colorLower === "green"){
	document.write("Move now.");
}*/



/*Q4
var fuel = prompt("Please share the remaining fuel status!!");
var status = parseFloat(fuel);

if (status <= 0.25){
	document.write("Please refill the fuel in your car.");
}
else{
	document.write("You are fine please drive.")
}
*/


/*Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
document.write("Displayed")
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write("Not Displayed");


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
document.write("2 and 4 is true");


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
document.write("Displayed because of concatenation operator");


if (true){
alert("True");
}
if (false){
alert("False");
}
document.write("Displayed true");


if("car" < "cat"){
alert("car is smaller than cat");
}
document.write("Displayed car is smaller");
*/


/*Q6
var English = parseInt(prompt("Enter your english marks!!"));
var Urdu = parseInt(prompt("Enter your urdu marks!!"));
var Maths = parseInt(prompt("Enter your math marks!!"));

var total = (English += Urdu += Maths)
var percent = total/300 * 100;

document.write("<h3>Marks Sheet</h3> <br>");
document.write("Total marks : 300 <br>");
document.write("Marks obtained : " + total + "<br>");
document.write("Percentage : " + percent+"%<br>");

if (percent >= 80){
	document.write("Grade : A-one <br>");
	document.write("Remarks : Excellent");
}
else if (percent >= 70){
	document.write("Grade : A <br>");
	document.write("Remarks : Good");
}
else if (percent >= 60){
	document.write("Grade : B <br>");
	document.write("Remarks : You need to improve");
}
else if (percent < 60){
	document.write("Grade : Fail <br>");
	document.write("Remarks : Sorry");
}*/



/*Q7
var number = Math.floor(Math.random() * 10) + 1;
alert(number);
var closeEnough = number - 1;

var userGuess = prompt("Please enter a number from 1 to 10");
var guess = parseInt(userGuess);

if(guess === number){
	alert("Bingo! Correct answer")
}
else if ( guess === closeEnough){
	alert("Close enough to the correct answer");
}
else{
	alert("Better Luck next time");
}*/



/*Q8
var three = prompt("Enter a number!");
var threeNumber = parseInt(three);


if(threeNumber % 3 === 0){
	alert("Number is divided by Three!");
}
else{
	alert("Number is not divided by 3");
}
*/



/*Q9
var evenOdd = prompt("Enter a number and this program will tell you the number is even or odd!");
var evenOddNumber = parseInt(evenOdd);


if(evenOddNumber % 2 === 0){
	alert("Number is Even!");
}
else{
	alert("Number is Odd!");
}*/



/*Q10
var temp = prompt("Enter temperature :");

if (temp > 40){
	document.write("It is too hot outside.");
}
else if (temp > 30){
	document.write("The Weather today is Normal");
}
else if (temp > 20){
	document.write("Todays Weather is cool.");
}
else if (temp > 10){
	document.write("“OMG! Today’s weather is so Cool.");
}
else if (temp <= 10){
	document.write("Freezing Weather");
}*/



/*Q11

var val1 = prompt("Enter your 1st value: ");
var val2 = prompt("Enter your 2nd value: ");
var sign = prompt("Enter operator: ");

if (sign === '+'){
	alert((+val1)+(+val2));
}
else if (sign === '-'){
	alert(val1-val2);
}
else if (sign === '*'){
	alert(val1*val2);
}
else if (sign === '/'){
	alert(val1/val2);
}
else if (sign === '%'){
	alert(val1/val2*100);
}*/




/*CHAPTER 12 to 13*/



/*Q1
var a = prompt("Enter alphabet ASCII number:");

if (a >= 65 && a <= 90){
	document.write("Its Uppercase Letter.")
}
else if(a >= 97 && a <= 122){
	document.write("Its Lowercase Letter.")
}*/



/*Q2
var num1 = prompt("Please enter 1st number!");
var num2 = prompt("Please enter 2nd number!");

var number1 = parseInt(num1);
var number2 = parseInt(num2);

if(number1 > number2){
	alert("1st Number is larger: " + number1);
}
else if(number2 > number1){
	alert("2nd Number is larger: " + number2);
}
else if(number1 === number2){
	alert("Both numbers are same!");
}*/


/*Q3
var numOne = prompt("Please enter a number!");
var One = parseInt(numOne);

if(One > 0){
	alert("Number is positive: " + One);
}
else if(One < 0){
	alert("Number is Negitive: " + One);
}
else if(One === 0){
	alert("Number is Zero!");
}
*/


/*Q4
var str = prompt("Please enter a letter and this program will tell you, its vowel or not!");
var res = str.toLowerCase();

if (res.length > 1){
	alert("Please enter only one letter!")
}

else{
	if(res === 'a' || res === 'e' || res === 'i' || res === 'o' || res === 'u'){
		alert("This is a vowel: " + res);
	}
	else{
		alert("This is not a vowel: ", + res)
	}
}*/


/*Q5
var passOne = prompt("Please enter your password!");
var passTwo = prompt("Please re-enter your password!");

var correctPass = "Password";

if (passOne === "" || passTwo === ""){
	alert("Please enter password in both fields!");
}
else{
	if (passOne == correctPass && passTwo == correctPass) {
		alert("Correct! The password you entered matches the original password")
	}
	else{
		alert("Incorrect password");
	}
}
*/


/*Q6
var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting);
}
*/


/*Q7
var time = prompt("Enter clock time in this format like: 1900");

if( time >= 0000 && time < 1200){
	document.write("Good Morning");
}
else if (time >= 1200 && time < 1700){
	document.write("Good Afternoon");
}
else if (time >= 1700 && time < 2100){
	document.write("Good Evening");
}
else if (time >= 2100 && time <= 2359){
	document.write("Good Night");
}*/



/*CHAPTER 14 to 16*/


/*Q1
var students = [];*/


/*Q2
var students = { "":"", "":, "":"" };
*/


/*Q3
Declare and initialize a strings array
var array = ["hassan", "ahmed", "khan"];*/


/*Q4
Declare and initialize a numbers array
var array = [1,2,3,4,5];*/


/*Q5
Declare and initialize a boolean array
var boolArray = [true,false];*/


/*Q6
Declare and initialize a mixed array
var array = [1, "hassan", 2, "ahmed"];*/


/*Q7
var array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<h3>Qualifications: </h3> <br>")

for(var i =0; i < array.length; i++){
	document.write((i + 1) + ") " + array[i] + "<br>");
}

*/



/*Q8
var studName = ["Michael", "John", "Tony"];
var studMarks = [320, 230, 480];

for(var i = 0; i <= 2; i++){
	document.write("Scores of " + studName[i] + " is " + studMarks[i] + ". Percentage: " + studMarks[i]/500*100 + "% <br>");
}*/



/*Q9 INCOMPLETE Due to shift function is not working


var arry = ["Red", "Green", "Blue"];
document.write(arry + "<br>");
var a = prompt("Which color do you want to add at the beginning ?");
arry.unshift(a);
document.write(arry + "<br>");
var b = prompt("Which color do you want to add at the end ?");
arry.pop(b);
document.write(arry + "<br>");
var c = prompt("Which two color do you want to add at the beginning type 1st?");
var d = prompt("type 2nd ?");
arry.unshift(c,d);
document.write(arry);
arry.shit();
document.write(arry+"<br>");
arry.pop();
document.write(arry + "<br>");*/




/*Q10
var studentScore = [320, 230, 480, 120];
document.write("Scores of Students : ")

for(var i = 0; i < studentScore.length; i++){
	document.write(studentScore[i]);

	if(i < studentScore.length - 1){
		document.write(",")
	}
}

document.write("<br>Ordered Scores of Students : " + studentScore.sort());
*/



/*Q11
var cities =  ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var second = [];

var second = cities.slice(1,4);

document.write("Cities list: <br>" + cities)
document.write("<br><br>Selected cities list: <br>" +second)*/



/*Q12
var arr = ["This", "is", "my", "cat"];

document.write("Array:<br>")
for (var i = 0; i < arr.length ; i++) {
 	document.write(arr[i])

 	if(i < arr.length - 1){
		document.write(",")
	}
}
document.write("<br><br>String:")
document.write("<br>" + arr.join(" "));*/


/*Q13
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>")

for(var k = 0; k < arr.length; k++){
	document.write(arr[k])
	if(k < arr.length - 1){
		document.write(",")
	}
}

document.write("<br>")
for (var  i = 0; i <= arr.length - 1; i++) {
	document.write("<br>Out: <br>" + arr[i])
}*/



/*Q14
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>")

for(var k = 0; k < arr.length; k++){
	document.write(arr[k])
	if(k < arr.length - 1){
		document.write(",")
	}
}

document.write("<br>")
for (var i = arr.length - 1; i >= 0; i--) {
	document.write("<br>Out: <br>" + arr[i])
}*/



/*Q15
var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>")

for(i = 0; i < arr.length; i++){
	document.write("<option>" + arr[i] + "</option>")
}
document.write("</select>")*/




/*CHAPTER 17 to 20*/


/*Q1
Declare and initialize an empty multidimensional array. (Array of arrays)
var arrayOfArrays = [  ["" , ""],  ["" , ""],  ["" , ""]  ];*/


/*Q2
var arrayOfArrays = [  [0, 1, 2, 3],  [1, 0, 1, 2],  [2, 1, 0, 1]  ];

for (var i = 0; i < arrayOfArrays.length; i++){
	
	for( var j = 0; j < 4; j++ ){
		
		document.write(arrayOfArrays[i][j]);
	}

	document.write("<br>")
}
*/



/*Q3
for(var i = 1; i <= 10; i++ ){
	document.write(i + "<br>")
}
*/


/*Q4
var tableNumber = prompt("Enter a number to show its mutliplication table:");
var tableLength = prompt("Enter length mutliplication table:");

document.write("Multiplication table of " + tableNumber + " Length " + tableLength + "<br><br>")
for(var i = 1; i <= tableLength; i++){
	document.write(tableNumber + " x " + i + " = " + tableNumber*i + "<br>");
}*/


/*Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i = 0; i < fruits.length; i++){
	document.write(fruits[i] + "<br>")
}

document.write("<br><br>")

for(j = 0; j < fruits.length; j++){
	document.write("Element at index " + j + " is " + fruits[j] + "<br>")
}*/


/*Q6
document.write("<h3>Counting:</h3>");
for(i = 1; i <= 15; i++){
	document.write(i);
		if(i != 15){	
				document.write(",")
		}
}

document.write("<br><h3>Reverse Counting:</h3> ")
for (var j = 10; j > 0; j--) {
	document.write(j)
		if(j != 1){	
				document.write(",")
		}
}
	
document.write("<br><h3>Even:</h3> ")
for (var k = 0; k <= 20; k++) {
	if(k % 2 == 0){
		document.write(k)
			
			if(k != 20){	
				document.write(",")
			}
	}
}

document.write("<br><h3>Odd:</h3> ")
for (var l = 0; l <= 20; l++) {
	if(l % 2 != 0){
		document.write(l)
			if(l != 19){	
				document.write(",")
			}
	}
}

document.write("<br><h3>Series: </h3>")
for (var m = 2; m <= 20; m++) {
	if(m % 2 == 0){
		document.write(m+"k")
			
			if(m != 20){	
				document.write(",")
			}
	}
}*/


/*Q7
var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?")
var input = userInput.toLowerCase();

var a = arr.indexOf(input);
if (a != -1)
	{
		document.write(arr[a] + " is <b> available </b> at index " + a + " in our bakery")
}
else
	{
		document.write("We are sorry. " + userInput + " is <b>not available </b> in our bakery")
}
*/


/*Q8
var A = [24, 53, 78, 91, 12];
var a = Math.max(...A);

document.write("Array items: ")

for (i = 0; i < A.length; i++)
	{
	document.write(A[i] + ",");
}

document.write("<br>The largest number is " + a)
*/ 


/*Q9
var A = [24, 53, 78, 91, 12];
var a = Math.min(...A);

document.write("Array items: ")

for (i = 0; i < A.length; i++)
	{
	document.write(A[i] + ",");
}

document.write("<br>The smallest number is " + a)
 */


/*Q10
for (var i = 1; i <= 20; i++){
	document.write(i*5 + ",")
}*/





