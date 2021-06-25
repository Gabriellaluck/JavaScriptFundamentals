// Name the three ways to declare a variable?

// var let  const statements 
// EX: 
        let message; 
// storing data EX:
        message = 'hello';

// Which of the three variable declarations should you avoid and why?

// Hackernoon: Why you shouldn't use 'var anymore - by Mark Brouch
// Using 'let instead of 'var' provides an important scoping mechanism.
// 'Const' is useful for preventing mutation: it will throw an error of an attempt is made to change its value after decalaration.
// Mutable variables are often needed - eg. to counter looping scenarios.
// 'let' provides block scoping. 'var' is function-scoped.  


// What rules should you follow when naming variables?

// Letters, digits or $/_ The first character cannot be  a digit. camelCase is recommended.
// JavaScript is case-sensitive.
// let, class, return, funtion are reserved. They cannot be used.

//  What should you look out for when using the + operator with numbers and strings?

// When Binary + is applied to strings it concatinates them. 
// EX:
        let s = 'my' + 'string';
        alert(s); //mystring
// Combining strings and operands will also result in concatination.
// EX:
        alert (2 + 2 + '1');// '41'

// How does the % operator work?

// The result of a % b is the remainder of the integer division of a by b.
// EX: 
        alert (5 % 2); // remainder 1
        alert (8 % 3); // remainder 2

// Explain the difference between == and ===.

// === STRICT EQUITY CHECK: tests whether left and right values are identical to one another.
// EX: 
        5 === 2 + 4 // returns false
        5 === 2 + 3 // returns true
// == NON STRICT EQUITY CHECK: 
// EX: 
        alert (null == undefined); // returns true
// They are equal to each other but are different types.



When would you receive a NaN result?
How do you increment and decrement a number?
Explain the difference between prefixing and post-fixing increment/decrement operators.
What is operator precedence and how is it handled in JS?
How do you access developer tools and the console?
How do you log information to the console?