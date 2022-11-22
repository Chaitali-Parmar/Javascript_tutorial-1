// Javascript day1
// to print in web page
document.write("Hello World ... <br/>");
// to print in console
console.log("Hello World");
// javascript day2

// example of creating a block
{
    document.write("This is first statement of block");
    document.write("<br/>This is second statement of block");
    document.write("<br/>This is third statement of block");
    document.write("<br/>This is fourth statement of block");
    document.write("<br/>This is fifth statement of block <br/><br/>");
}
// Types of comments
// single line
// this is single line comment
// multiline
/*this 
is multiline
comment */
// variables
// start with alphabets and underscores only (A-Z,a-z,0-9)
// can't start with digit
// no white space is allowed
// can't use any reserved key like int,float,double etc.
// use + or , to declare variable.
// four types
// 1.var 2.let 3.const 4.nothing
// 1.var example
var a; //no value (undefined)
document.write("Example of var with no value (" + a + ") <br/>");
var a = 10; //with value
document.write("Example of var with value is (" + a + ")<br/>");
// 2.let example
// let can be initialized later
// cannot redeclare the same variable more than one time
let b;
b = 10;
document.write("Example of let is " + b + "<br/>");
//3.const example
//    const must be initialized at the declaration time
const c = 10;
document.write("Example of const is " + c);
//4.nothing example
a = 10;
document.write("<br/>Example of nothing is " + a + "<br/><br/>");
// the + opetaror used in strings
text1 = "Hello";
text2 = "World";
document.write("Text using + operator is " + text1 + " " + text2 + "<br/>");
//  Data type
// 1.string 2.number 3.boolean 4.undefined 5.null
// 1. string
var a = "Hello";
document.write("Example of string datatype is " + a + "<br/> ");
// 2.number 
var a = 10;
var d = 20;
document.write("Example of number datatype is ", a + d, "<br/>");
// 3.boolean
var a = 10;
var d = 20;
document.write("A is example of boolean datatype (", a < d, ")", "<br/>");
// 4.undefined 
var e;
document.write("Example of undefined datatype is " + e, "<br/>");
// 5.null
var e = null;
document.write("Example of null datatype is " + e, "<br/><br/>");
// javascript day3

// decision control statements or Conditional statement
// 1.if 2.if-else 3.if-else-if 4.switch 5.ternary
// 1.if (exectue if the condition is true)
var A = 10;
if (A % 2 == 0) {
    document.write("Example of if statement <br/>");
    document.write("A is Even <br/>");
}
// 2.if-else (exectue if the condition is true or false)
var A = 5;
if (A % 2 == 0) {
    document.write("A is even <br/>");
}
else {
    document.write("Example of if-else statement <br/>");
    document.write("A is odd <br/>");
}
// nested if else example
var A = 10;
if (A >= 0) {
    document.write("Example of nested if else statement <br/>");
    document.write("A is greater<br/>");
    if (A % 2 == 0) {
        // document.write("Example of nested if else statement <br/>");
        document.write("A is Even <br/>");
    }
    else {
        document.write("Example of nested if else statement <br/>");
        document.write("A is negative <br/>");
    }
}
else {
    document.write("Example of nested if else statement <br/>");
    document.write("A is positive <br/>");
}
// 3.if-else-if statement (execute one code from multiple conditions)
var A = 10;
if (A % 2 == 1) {
    document.write("Example of if-else-if statement <br/>");
    document.write("A is odd <br/>");
}
else if (A >= 0) {
    document.write("Example of if-else-if statement <br/>");
    document.write("greater <br/>");
}
else {
    document.write("Example of if-else-if statement <br/>");
    document.write("Less <br/>")
}
// 4.switch statement execute the code from multiple conditions (it is like if-else-if condition )
var A = 5;
switch (A) {
    case 1:
        document.write("Example of switch statement <br/>");
        document.write("One");
        break;
    case 2:
        document.write("Example of switch statement <br/>");
        document.write("Two");
        break;
    default:
        // execute if all cases are not matched
        document.write("Example of switch statement <br/>");
        document.write("Invalid number <br/>");
}
// 5.Ternary operator (takes three arguments) represented with ? : also called as condtional operator.shortened way of writing if-else statement
var A = 10;
var ans = (A <= 5) ? "A is less" : "A is greater";
document.write("Example of ternary operator <br/>");
document.write(ans, "<br/><br/>");

// loops (execute a block of code or a part of the program several times)
// types of loops
// 1.while 2.do..while 3.for
// 1.while (entry controlled loop)
document.write("Example of While loop <br/>");
var A = 5;
while (A <= 10) {

    document.write(A + "<br/>");
    A++;
}
// 2.do..while (exit controlled loop)
document.write("Example of Do..while loop <br/>");
var A = 10;
do {

    document.write(A + "<br/>");
    A++;
}
while (A <= 15);
// 3.for loop
document.write("Example of for loop <br/>");
for (A = 1; A <= 10; A++) {
    document.write(20 + "*" + A + "=" + (20 * A) + "<br/>");
}
document.write("<br/>");

// break statement (breaks the loop and continues executing the code after the loop)
document.write("Example of break statement <br/>");
var A;
for (A = 1; A <= 10; A++) {
    if (A === 7) {
        break;
    }
    document.write(A, "<br/>");
}
// continue statement (breaks iteration in the loop and continues executing the next iteration in the loop)
document.write("Example of continue statement");
var A;
for (A = 1; A <= 5; A++) {
    if (A === 3) {
        continue;
    }
    document.write("<br/>", A,);
}
document.write("<br/><br/>");
// javascript day4

// operators
// 1.arithmatic 2.assignment 3.comparison/relational 4.logical
// 1.arithmatic operator
var A = 10;
var B = 20;
document.write("Example of arithmatic operator <br/>");
document.write("(+)", A + B, "<br/>");
document.write("(-)", A - B, "<br/>");
document.write("(*)", A * B, "<br/>");
document.write("(/)", A / B, "<br/>");
document.write("(%)", A % B, "<br/>");
document.write("(++)", A++, "<br/>");
document.write("(--)", A--, "<br/>");
// 2.assignment operator
var A = 10;
var B = 20;
// A+=B;
// A=A+B;
// document.write("A is"+A);
document.write("Example of assignment operator <br/>");
document.write("(+=)", A += B, "<br/>");
document.write("(-=)", A -= B, "<br/>");
document.write("(*=)", A *= B, "<br/>");
document.write("(/=)", A /= B, "<br/>");
document.write("(%=)", A %= B, "<br/>");
document.write("(=)", A = B, "<br/>");
// relational/comparison operator
var A = 10;
var B = 20;
document.write("Example of relational/comparison operator <br/>");
document.write("==", A == B, "<br/>");
document.write("===", A === B, "<br/>");
document.write("!=", A != B, "<br/>");
document.write("<", A < B, "<br/>");
document.write("<=", A <= B, "<br/>");
document.write(">=", A >= B, "<br/>");
// logical operator
document.write("Example of Logical operator <br/>");
var A = 10, B = 20, C = 30;
//&& operator
document.write("&& operator <br/>");
if (A < B && A < C) {
    document.write("A is less <br/>");
}
else if (B < A && B < C) {
    document.write("B is less <br/>");
}
else {
    document.write("C is less <br/>");
}
// or operator
document.write("Example of or operator <br/>");
var A = 2;
if (A == 1 || A == 2 || A == 3 || A == 4) {
    document.write("Same number <br/>");
}
else {
    document.write("Not same number");
}
// not operator
document.write("Example of not operator <br/>");
var A = 5, B = 10;
if (!(A > B)) {
    document.write("B is Greater <br/>")
}
else {
    document.write("A is Less <br/>");
}
// javascript day5

// functions
/* types of functions 
1.built in
2.user-defined
4 arguments
no argument,no return type
argument,return type
argument,no return type
no argument,return type
*/
// no argument,no return type
document.write("<br/>User defined functions <br/>");
function noarg_noreturn() {
    var A = 10, B = 20;
    C = A - B;
    document.write("no argument no return ", C, "<br/>");
}
noarg_noreturn();

// argument, return type
function arg_return(A, B) {
    // sum = A + B;
    return A + B;
}
document.write("argument return ", arg_return(10, 20), "<br/>");

// argument,no return type
function arg_noreturn(A, B) {
    Mul = A * B;
    document.write("argument,no return ");
    document.write(Mul, "<br/>");
}
arg_noreturn(2, 3);

// no argument , return type
function noarg_return() {
    var A = 10, B = 20;
    var C = A - B;
    return C;
}
document.write("no argument return ", noarg_return(), "<br/>");

// types of variable
/* 1.Local variable
2.global variable
*/
//    1.local variable
function local() {
    var A = 10;
    document.write("Example of local variable ", A, "<br/>");
}
local();
// 2.global variable
var B = 20;
function global() {
    document.write("Example of global variable", B, "</br>");
}
function global1() {
    document.write(B, "<br/><br/>");
}
global();
global1();
// Javascript day6

/*array
3 ways to construct array
1.array literal
2.creating instance of array(using new keyword)
3.using array constructor (using new keyword)

1.Array literal */
document.write("Array: <br/>");
document.write("Example of array literal <br/>");
var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}
// 2.Instance of array(new keyword)
document.write("Example of instance of array <br/>");
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
for (i = 0; i < arr.length; i++) {
    document.write(arr[i], "<br/>");
}
// 3.Array constructor(new keyword)
document.write("Example of array constructor <br/>");
var arr = new Array(1, 2, 3, 4, 5);
for (i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}
// Array methods
// 1.Length - size of an array
var arr = [1, 2, 3, 4, 5]; //literal
document.write("Array methods: <br/>");
document.write("1)Length: ");
document.write(arr.length, "<br/>");
// 2.concat-merged arrays
document.write("2)Concat: ");
var arr1 = new Array(1, 2, 3);
var arr2 = new Array(4, 5, 6);
var arr3 = new Array(7, 8, 9, 10);
document.write(arr1.concat(arr2, arr3) + "<br/>");
// 3.Entries-creates iterator object and a loop that iterates over each key/value pair.
document.write("3)Enteries: <br/>");
var arr = [1, 2, 3, 4, 5];
var iteration = arr.entries();
for (var i of iteration) {
    document.write(i, "<br/>");
}
// 4.Flat-array carrying sub-array elements concatenated recursively till the specified depth
document.write("4)Flat: ");
var arr = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];
var arr1 = arr.flat();
document.write("New Array " + arr1 + "<br/>");
// 5.Fill-fills elements into an array with static values
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [6, 7, 8, 9, 10];
document.write("5)Fill: <br/>");
document.write(arr1.fill("Hi") + "<br/>");
document.write(arr2.fill("Hi", 1) + "<br/>");
document.write(arr3.fill("Hi", 1, 3) + "<br/>");
// 6.Includes-checks whether the given array contains the specified element
document.write("6)Include: <br/>");
var arr1 = new Array(1, 2, 3, 4, 5);
document.write(arr1.includes(1, 0) + "<br/>");
document.write(arr1.includes(6) + "<br/>");
document.write(arr1.includes(5) + "<br/>");
// 7.Index of-searches the specified element in the given array and returns the index of the first match
document.write("7)Indexof: <br/>");
var arr1 = new Array(1, 2, 3, 4, 5);
document.write(arr1.indexOf(5) + "<br/>");
document.write(arr1.indexOf(10) + "<br/>");
// 8.IsArray-tests if the passed value is an array
document.write("8)isArray: <br/>");
var arr1 = [1, 2, 3, 4, 5];
var arr2 = 1;
document.write(Array.isArray(arr2) + "<br/>");
document.write(Array.isArray(arr1));
// 9.Join-joins the elements of an array as a string
document.write("<br/> 9)Join: ");
arr1 = [1, 2, 3, 4, 5];
document.write(arr1.join("-"));
// 10.Keys-creates an iterator object that contains only the keys of the array,than loops through these keys
document.write("<br/>10)Keys: <br/>");
var arr = [1, 2, 3, 4, 5];
var iterator = arr.keys();
document.write(iterator + "<br/>");
// loop
for (var key of iterator) {
    document.write(key + "<br/>");
}
// 11.Lastindexof-searches the specified element in the given array and returns the index of the last match
document.write("11)Lastindexof: ");
var arr = new Array(1, 5, 3, 4, 5);
document.write(arr.lastIndexOf(5) + "<br/>");
// 12.Map-calls the specified function for every array element and returns the new array
// to see the values in round figure etc...
document.write("12)Map: ")
var arr = [1.6, 2.8, 3.5, 4.7];
document.write(arr.map(Math.round));
// 13.Pop-removes and returns the last element of an array
document.write("</br> 13)Pop: <br/>");
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
document.write(arr + "<br/>");
document.write("Pop element " + arr.pop());
document.write("</br>" + arr);
// 14.Push-adds one or more elements to the end of an array
document.write("</br> 14)Push: <br/>");
var arr = new Array("Chaitali");
document.write(arr + "<br/>");
arr.push("Parmar");
document.write(arr + "<br/>");
arr.push("Lalabhai");
document.write(arr + "<br/>");
// 15.Reverse-reverse the elements of given array
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
document.write("15)Reverse: ");
document.write(arr.reverse());
// 16.Shift-removes and returns the first element of an array
document.write("<br/> 16)Shift: ");
arr = new Array(1, 2, 3);
document.write(arr.shift());
// 17.Slice-returns new array containing the copy of the part of the given array
// not add last element of an array
document.write("</br> 17)Slice: ");
arr = new Array(1, 2, 3, 4, 5);
document.write(arr.slice(0, 3) + "<br/>");
// 18.Sort-returns the element of the given array in a sorted order
document.write("18)Sort: <br/>");
var arr = [1, 2, 3, 4, 5];
document.write(arr.sort() + "<br/>"); //ascending order
document.write(arr.sort().reverse()); //descending order
// 19.Splice-add/remove elements to the given array
document.write("<br/>19)Splice: <br/>");
var arr = [1, 2, 3, 4, 5];
var ans = arr.splice(3, 2, 10);
document.write("Updated array " + arr + "<br/>");
document.write("Removed element " + ans);
// 20.Unshift-adds on or more elements in the beginning of the given array 
var arr = [1, 2, 3, 4];
arr.unshift(5);
document.write("<br/>20)Unshift: ");
document.write(arr, "<br/>");
// 21.Values-creates a new iterator object carrying values for each index in the array
document.write("21)Values:")
var arr = [1, 2, 3, 4, 5];
var itr = arr.values();
for (value of itr) {
    document.write(value);
}
document.write("<br/>");

// Popup boxes    (all.html-no.24)
// 1.Alert
// 2.Confirm
// 3.Prompt

// 1.Alert (OK)
function alertbox() {
    alert("This is an alert msg");
}
// 2.Confirm (OK,cancel)
function confirmbox() {
    var A = confirm("This is a confirm msg");
    if (A == true) {
        document.write("Press OK");
    }
    else {
        document.write("Press Cancel");
    }
}
// 3.Prompt (get value from user)
// simple example
function promptbox() {
    var A = prompt("Enter name ", "Chaitali");
    if (A != null && A != "") {
        document.write("Hi " + A);
    }
}
// sum example
function promptbox1() {
    var A = parseInt(prompt("Enter first value"));
    var B = parseInt(prompt("Enter second value"));
    var ans = A + B;
    document.write("Sum is " + ans);
}
// sum using html form   (all.html-no.33)
function Sum_Form() {
    var A, B;
    if (frm.txt1.value == "") {
        alert("Enter First Number");
        frm.txt1.focus();
    }
    else if (frm.txt2.value == "") {
        alert("Enter Second Value");
        frm.txt2.focus();
    }
    else {
        A = parseInt(frm.txt1.value);
        B = parseInt(frm.txt2.value);
        sum = A + B;
        frm.ans.value = sum;
    }
}
// Events      (all.html-no.55)
/* 1.Mouse events
   2.Keyboard events
   3.Form events
   4.Window/Document events*/
// 1.Mouse events   
// Onclick       (all.html-no.58)
function on_click() {
    alert("This is onclick method");
}
// Ondblclick
function on_dblclick() {
    alert("This is ondoubleclick");
}
// Onmouseover
function big(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}
// Onmouseout
function small(x) {
    x.style.height = "250px";
    x.style.width = "250px";
}
// Onmouseup
function on_up(x) {
    x.style.backgroundColor = "orange";
    x.style.color = "white";
    x.innerHTML = "Chaitali";
}
// Onmousedown
function on_down(x) {
    x.style.backgroundColor = "Yellow";
    x.style.color = "black";
    x.innerHTML = "Parmar";
}
// Onmousemove
function on_move(x) {
    x.style.backgroundColor = "pink";
    x.style.fontsize = "23px";
    x.innerHTML = "Chaku";
    x.style.color = "black";
}
// 2.Keyboard events    (all.html-no.67)
// Onkeyup
function key_up() {
    frm1.n1.value = frm1.n1.value.toUpperCase();
}
// Onkeydown
function key_down() {
    frm1.n2.value = frm1.n2.value.toLowerCase();
}
// Onkeypress
function key_press() {
    alert("This is keypress");
}
// 3.Form events       (all.html-no.76)
// Onfocus-When the user focuses on an element
function on_focus() {
    frm2.focus.style.backgroundColor = "red";
    frm2.focus.style.width = "160px";
    frm2.focus.style.color = "white";
}
// Onsubmit-when the user submits the form
function on_submit() {
    alert("The form you submit is successfully stored in the server...");
}
// Onblur-when the focus is away from a form element
function on_blur() {
    frm4.blur.value = frm4.blur.value.toUpperCase();
    frm4.blur.style.backgroundColor = "blue";
    frm4.blur.style.color = "white";
    frm4.blur.style.width = "160px";
}
// Onchange-when the user modifies or changes the value of a form element
function on_change() {
    var x = frm5.select.value;
    alert("You select " + x);
}
// 4.Window/Document events      (all.html-no.102)
// Load-when the browser finishes the loading of the page
// function on_load(){
//     alert("Load event fired");
// }
// Unload-when the visitor leaves the current webpage,the browser unloads it
// function on_unload(){
//     alert("This is an alert");
// }
// Onresize-when the visitor resizes the window of the browser
function on_resize() {
    alert("Size of the window is changed");
}
// page redirection      (all.html-no.101)
function redirect() {
    window.location = "https://www.google.com";
}

// javascript day9
// HTML dom (document object-model)
/* represents the whole html document.
when html document is loaded in the browser,it becomes a document object. 
it is the root element that represents the html document,it has properties and methods.
by the help of document object ,we can add dynamic content to our web page.
we can access and change the contents of document by its methods
*/
// DOM methods      (all.html-no.107)
// getelementbyid-returns the element having the given id value.An id should be unique within a page.If more than one element with the specified id exists,the getelementbyid method return the first element in the source code
function By_Id() {
    var x = document.getElementById("id");
    x.style.color = "red";
}
//  getelementbyname-returns all the element of specified name.
// the html collection object represents a collection of nodes.The nodes can be accessed by index numbers.The index starts at 0.
function By_Name() {
    var x = document.getElementsByName("name")[0].value;
    alert("Square is: " + x * x);
}
// getelementsbytagname-returns a collection of all elements in the document with the specified tag name 
function By_Tag() {
    var x = document.getElementsByTagName("input");
    alert("Tags are: " + x.length);
}
// getelementsbyclassname-returns a collection of all elements in the document with the specified class name,as an html collection object.represents a collection of nodes.the nodes can be accessed by index numbers.the index starts with 0.
function By_Class() {
    var x = document.getElementsByClassName("class");
    x[0].style.color = "orange";
}

// Javascript day10
// Javascript Validations  
// 1.form validation(textbox)      (all.html-no.128)
function form_validate() {
    var x = document.frm6.form.value;
    if (x == null || x == "") {
        alert("Enter Name");
        return false;
    }
}
// 2.number validation
function num_validate() {
    var f = document.frm7.number.value;
    if (f == "") {
        alert("Enter Mobile No");
        return false;
    }
    else if (isNaN(f)) {
        alertbox("Enter Digits Only");
        return false;
    }
}
// 3.radio validation
// method 1
function radio_validate() {
    var x = document.frm8.gender[0];
    var y = document.frm8.gender[1];
    if ((x.checked == false) && (y.checked == false)) {
        alert("Select gender");
        return false;
    }
    else if (x != null || x != "") {
        alert("You select male");
        return false;
    }
    else if (y != null || y != "") {
        alert("You select female");
        return false;
    }

}
// method 2
// function radio_validate(){
//     if((document.frm8.gender[0].checked==false)&&(document.frm8.gender[1].checked==false)){
//         alert("Select Your Gender");
// return false;
//     }
// }

// 4.checkbox validation
function check_validate() {
    if ((document.frm9.hobby[0].checked == false) &&
        (document.frm9.hobby[1].checked == false) &&
        (document.frm9.hobby[2].checked == false) &&
        (document.frm9.hobby[3].checked == false)) {
        alert("Select your hobby");
        return false;
    }
}

// 5.dropdown validation
function drop_validate() {
    var x = document.frm10.select.value;
    if (x == "1") {
        alert("Select City");
        return false;
    }
}

// 6.email validation- There are many criteria that need to be follow to validate the email id such as:
// -email id must be contain the @ and . character.
// -there must be at least one character before and after the @.
// -there must be at least two character after . (dot).
function email_validate() {
    var x = document.frm11.email.value;
    var at = x.indexOf("@");
    var dot = x.lastIndexOf(".");
    if (at < 1 || dot < at + 2 || dot + 2 >= x.length) {
        alert("Please enter a valid email address \n at" + at + "\n dot" + dot);
        return false;
    }
}

// Basic login validation
// function b_login() {
//     if (document.frm12.user.value == "") {
//         alert("Enter Username");
//     }
// }
// function b_pass() {
//     if (document.frm12.pwd.value == "") {
//         alert("Enter Password");
//     }
//     else if (document.frm12.pwd.value.length < 5 || document.frm12.pwd.length > 5) {
//         alert("Pasword must be of 5 characters");
//     }
// }

function _basic(){
    var x=document.frm12.user.value;
    var y=document.frm12.pwd.value;
    // var z=document.frm12.sub.value;
    if(x==""){
        alert("Enter Username");
    }
    else if(y==""){
        alert("Enter Password");
    }
    else if(y<5 || y>5){
        alert("Password must be of 5 characters");
    }
    // else if(z!=""){
    //     alert("Login Successfull");
    // }
}

