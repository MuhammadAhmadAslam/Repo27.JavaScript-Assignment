//CHAPTER 01 
// Answer 01
alert("Hello How Are You?");
//Answer 02
alert("Error! Please enter a valid passowrd");
//Answer 03
alert("Welcome To Programming Land\nHappy Coding");
//Answer 04
alert("Welcome To JS Land");
//Answer 05
console.log("Hello...I can run JS through my web browser console");


// Chapter 02
// Answer 01
var userName= 'Ahmed';
//Answer 02 
var myName= "Muhammad Ahmed";
//Answer 03
var message= "Hello World";
alert(message);
//Answer 04
var name= prompt('Enter Your Name');
var age= prompt('Enter Your Age');
var course= prompt('Enter Your Course');
alert("NAME: " + name + "\nAge: " + age + "\nCourse " + course);
//Answer 05
alert("Pizza\nPizz\nPiz\nPi\nP");
//Answer 06
var emailtext= "Your Email Address is ";
var email= "example@gmail.com";
alert(emailtext + email);
//Anwer 07
var book= 'A smarter way to learn JavaScript';
alert("I am trying to learn from the book " + book);
//Anwer 08
document.write("Yeah! I can write HTML content through Javascript");
//Answer 09
var emojis= '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
console.log(emojis);
alert(emojis);



//Chapter 03
//Anwser 01
var age= prompt('Enter Your Age');
console.log("I am " + age + ' years old');
//Answer 02
var visited= 1;
alert("You Have Visited the website " + visited + " time");
//Answer 03
var birthYear= 'I was born on 2007';
document.write("<br>"+"\n" + birthYear);
//Answer 04
var name = prompt("Enter Your Name");
alert('Name '+ name + '\nOdered: ' + 'Hoodies-Small' + '\nQuantity: ' + 5);


//Chapter 04
//Answer 01
var variable= 10 , variable2=20 , variable3 = 30;
//Answer 02
document.write("<br>" + "For Legal Variable It Must Begin with letter , contain camelcase , contain only $ and _  symbols.");
document.write("<br>" + "For Illegal Variable It cannot start with number , cannot contain symbols , cannot contain reserved keywords");
//Answer 03
//(a)
document.write("<br>" + "Contain only letter, and doesnot start with number and used only special symbols like only $ and _");
//(b)
document.write("<br>" + "for answer b blanks:"+"<br>"+"For Legal Variable It Must Begin with letter , camelcase , and only $ and _  symbols.");
//(c)
document.write("<br>" + "for answer c blanks:" + "<br>" + "Variables must begin with a  letter , $ or _.");
//(d)
document.write("<br>" + "for answer d blanks: " + " Sensitive" );
//(e)
document.write(`<br>for answer e blanks:  Keywords<br>` );



//Chapter 05
//Answer 01
var a= prompt("Enter Your Number");
var b= prompt("Enter Your Number");
var additionResult = a + b;
document.write(  "Addition: " + additionResult + "<br>");

var subtractionResult = a - b;
document.write("Subtraction: " + subtractionResult + "<br>");

var multiplicationResult = a * b;
document.write("Multiplication: " + multiplicationResult + "<br>");

var divisionResult = a / b;
document.write("Divide: " + divisionResult + "<br>");


//Chapter 06
//Answer 01
var num1= +prompt("Enter a First Number For Addition");
var num2= +prompt("Enter A Second Number For Addition");
var additionResult= num1+num2;
document.write("The Addition of First And Second Number is " + additionResult + "<br>");
console.log("The Addition of First And Second Number is " + additionResult  );
//Answer 02
var num1= prompt("Enter a First Number For Subtraction");
var num2= prompt("Enter A Second Number For Subtraction");
var subtractionResult= num1-num2;
document.write("The Subtraction of First And Second Number is " + subtractionResult + "<br>");

var num1= prompt("Enter a First Number For Multiplication");
var num2= prompt("Enter A Second Number For Multiplication");
var multiplicationResult= num1*num2;
document.write("The Multiplication of First And Second Number is " + multiplicationResult + "<br>");

var num1= +prompt("Enter a First Number For Division");
var num2= +prompt("Enter A Second Number For Division");
var divisionResult= num1+num2;
document.write("The Division of First And Second Number is " + divisionResult + "<br>");


//Answer 02
//(a)
var declaredVariable;
//(b)
document.write("Value After Declaration is: " + declaredVariable + "<br>");
//(c)
declaredVariable= 40;
//(d)
var evalue= 5;
document.write("Initial Value: " + evalue); 
//(e)
++evalue;
//(f)
document.write("Value After Increment is: " + evalue + "<br>");
//(g)
evalue += 7;
//(h)
document.write("Value After Addition is: " + evalue + "<br>" );
//(i)
--evalue;
//(j)
document.write("Value After Decrement is: " + evalue + "<br>");
//(k)
var evalueModulus= (evalue%3);
//(l)
document.write("The reminder is: " + evalueModulus + "<br>");

//Answer 03
var movieTicket= 600;
document.write("Total Cost to Buy 5 Tickets to Movie is:" + movieTicket*5 + "<br>");
//Answer 04
var tablenumber= prompt("Enter a Number For Table");
document.write("Table Of " + " " + tablenumber + "<br>");
document.write(tablenumber + " X 1 = " + tablenumber*1 + "<br>");
document.write(tablenumber + " X 2 = " + tablenumber*2 + "<br>");
document.write(tablenumber + " X 3 = " + tablenumber*3 + "<br>");
document.write(tablenumber + " X 4 = " + tablenumber*4 + "<br>");
document.write(tablenumber + " X 5 = " + tablenumber*5 + "<br>");
document.write(tablenumber + " X 6 = " + tablenumber*6 + "<br>");
document.write(tablenumber + " X 7 = " + tablenumber*7 + "<br>");
document.write(tablenumber + " X 8 = " + tablenumber*8 + "<br>");
document.write(tablenumber + " X 9 = " + tablenumber*9 + "<br>");
document.write(tablenumber + " X 10 = " + tablenumber*10 + "<br>");

//Answer 05
var celsius= 25;
document.write(celsius + "C" + " " + "is " + ((celsius * 9 / 5) + 32) + "F" );
console.log(celsius + "C" + " " + "is" + ((celsius*9/5) + 32) + "F" + "<br>");

var farenhiet= 70;
document.write( "<br>" + farenhiet + "F " + "" + "is " + ((farenhiet - 32)* 5 / 9) + "C");

//Answer 06
var item1= 650;
var item2= 100
document.write("<br>" + "Total Cost of Your Order is: " + ((item1*3)+(item2*7)+100) + "<br>");

//Answer 07
var totalMarks= 980;
var obtainedMarks= 804;
var percentage=(obtainedMarks/totalMarks)*100;
console.log(percentage);
document.write("Total Marks: " + totalMarks +  "<br>");
document.write("ObtainedMarks:" + obtainedMarks + "<br>");
document.write("Percentage:" + percentage + ":" + "<br>");

//Answer 08
var usdollar= 10
var saudiriyal= 25;
var totalCurrency= (usdollar*104.80)+(saudiriyal*28);
console.log(totalCurrency);
document.write("Total Currency is: " + totalCurrency + "<br>");

//Answer 09
var example= 10;
var example= 10 +  5 * 10 / 2;
console.log(example);
document.write(example + "<br>");

//Answer 10
var birthDateYear= 7;
var currentYear = 24;
var currentAge = currentYear - birthDateYear;
document.write(`Your Current Age is: ${currentAge}<br>`);

//Answer 11
var radiusOfCircle= 20;
var circumfarance= 2*3.142*radiusOfCircle;
var area= 3.142*radiusOfCircle*radiusOfCircle;
document.write("The Circumfarance Of A Circle: " + circumfarance + "<br>");
document.write("The Area Of Circle: " + area + "<br>");

//Answer 12
var favouriteChips = "chocos";
var yourAge= 15;
var estimatedAge = 65;
var amountPerDay = 3;
var total = (estimatedAge  - yourAge) * 3;
document.write(`You wil need ${total} Chocolate Chips To Last You Until The Ripe Old Age Of ${estimatedAge}`);

//Chapter 06
//Answer 01
var number1= 30;
document.write("The Value Of number1 is: " + number1 + "<br>");
++number1;
document.write("The Value of ++a is: " + number1 + "<br>");
document.write("Now the value of a is: " + number1 + "<br>");
number1++
document.write("The Value of a++ is: " + number1 + "<br>");
document.write("Now the value of a is: " + number1 + "<br>");
number1--
document.write("The Value of a-- is: " + number1 + "<br>");
document.write("Now the value of a is: " + number1 + "<br>");
--number1
document.write("The Value of --a is: " + number1 + "<br>");
document.write("Now the value of a is: " + number1 + "<br>");

//Answer 02
var a= 2;
var b = 1;  // 1 - 0  +  1  +  1     
var result = --a - --b + ++b + b--;
console.log(result);
console.log(a);
console.log(b);
document.write("the result of a is: " + a + "<br>");
document.write("the result of b is: " + b + "<br>");
document.write("the result of opreation on a and b is: " + result + "<br>");

//Answer 03
var yourName= prompt("Enter Your Full Name");
document.write("Welcome" + yourName + "<br>");


//Answer 04
var multiplynumber = prompt("Enter a number to display a table of this number");
if(0 >= multiplynumber){
    var multiplynumber = 5;
}
document.write("Table Of " + " " + multiplynumber + "<br>");
document.write(multiplynumber + " X 1 = " + multiplynumber*1 + "<br>");
document.write(multiplynumber + " X 2 = " + multiplynumber*2 + "<br>");
document.write(multiplynumber + " X 3 = " + multiplynumber*3 + "<br>");
document.write(multiplynumber + " X 4 = " + multiplynumber*4 + "<br>");
document.write(multiplynumber + " X 5 = " + multiplynumber*5 + "<br>");
document.write(multiplynumber + " X 6 = " + multiplynumber*6 + "<br>");
document.write(multiplynumber + " X 7 = " + multiplynumber*7 + "<br>");
document.write(multiplynumber + " X 8 = " + multiplynumber*8 + "<br>");
document.write(multiplynumber + " X 9 = " + multiplynumber*9 + "<br>");
document.write(multiplynumber + " X 10 = " + multiplynumber*10 + "<br>");

//Answer 05
var subject1= prompt("Enter Your First Favourite Subject");
var subject2= prompt("Enter Your Second Favourite Subject");
var subject3= prompt("Enter Your Third Favourite Subject");
var totalMarks= 300;
var obtainedMarks1= prompt("Enter Your First Favourite Subject Obtained Marks");
var obtainedMarks2= prompt("Enter Your First Favourite Subject Obtained Marks");
var obtainedMarks3= prompt("Enter Your First Favourite Subject Obtained Marks");
document.write("Total Marks in " + subject1 + " 100" + "<br>");
document.write("Total Marks in " + subject2 + " 100" + "<br>");
document.write("Total Marks in " + subject3 + " 100" + "<br>");
document.write("Total Marks in " + subject1 + "is" + obtainedMarks1 + "<br>");
document.write("Total Marks in " + subject2 + "is" + obtainedMarks2 + "<br>");
document.write("Total Marks in " + subject3 + "is" + obtainedMarks3 + "<br>");
document.write("This is the percentage of your total 3 subjects " + (obtainedMarks/totalMarks*100) + "%");