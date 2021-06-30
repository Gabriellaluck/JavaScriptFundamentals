/* What are the eight data types in JavaScript?
 Number : integers/floating point/'special numeric values'(infinity, -infinity, NaN).
 BigInt : values larger than 2⁵³-1 or smaller than -2⁵³-1. Created by appending 'n' to the end of an integer. String : "" double quotes '' single quotes `` back ticks. 
 Boolean : True or False.
 Null : Nothing, empty or unknown.
 Undefined : No assigned value.
 Object & Sysmbol : Object stores collections of data and more complex entities. Symbol creates unique identifiers for objects.
 Type of : Returns the type of the argument. 

 Which data type is NOT primitive? Object 

 What is the relationship between null and undefined?
 Null will become 0 Undefined becomes NaN

 What is the difference between single, double, and backtick quotes for strings?
 There is no difference between single and double but they shouldn't be mixed or the browser will not recognise the string.

What is the term for embedding variables/expressions in a string?
Expression interpolation.

Which type of quote lets you embed variables/expressions in a string?
Template literals are created through backticks ``.


How do you embed variables/expressions in a string?
Through a Placeholder. ${}

How do you escape characters in a string?
Escaping characters are characters which are not captured in the code as text.
These characters can be captured through the \ backward slash.

What are methods?
Methods are functions that can be performed on objects.

What is the difference between slice/substring/substr?
slice extracts part of a string and returns it in a new string.
substring does the same but does not accept negative indexes. 
substring will extract part of thr string by using the second parameter to specify the length of the extracted part.

What are the three logical operators and what do they stand for?
|| (OR) && (AND) ! (NOT)
|| (OR) is usually used in if statements to see if any given condition is true.
&& (AND) finds the first false value and returns false. It will return true if it reads all operands and truthy.
!  (NOT) will accept a single argument, convert it into a boolean type and returns inverse value.

What are the comparison operators?
Greater than >      less than <     greater or equal to >=      less or equal to <=        equal ==     not equal !=

What are truthy and falsy values?
Falsy: false, 0, '' or "", null, undefined, NaN.
Truthy: everything else.

What are conditionals?
Conditional statements will perform different actions for different decisions.*/

//What is the syntax for an if/else conditional?

if (hour < 18) {
    greeting = "Good Day";
} else {
    greeting = "Good Evening";
}

//What is the syntax for a switch statement?
//Switch is similar to if/else but uses case

    switch (10) {
        case 9:
        break;
        case 10:
        break;
        case 11:
        break;
    default :
   console.log = "something has gone wrong";
    }

//What is the syntax for a ternary operator?
condition ? exprIfTrue : exprIfFalse

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"