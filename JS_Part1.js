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


// When would you receive a NaN result?

// Using NaN will result in NaN (or concatination) - Maths cannot be done without legal numbers.
//Parsing numbers, using undefined as an operand, using NaN as an operand, using indeterminate forms, passing invalid arguments to a math function.
// EX: 
        const result = 10 + 1 / NaN;

        console.log(result); // NaN

// How do you increment and decrement a number?

// Increment ++ increases a variable by 1
// EX:
        let counter = 2; 
        counter++;
        alert (counter); // 3

// Decrement -- decreases a variable by 1
// EX:
        let counter = 2; 
        counter--;
        alert (counter); // 1

// Explain the difference between prefixing and post-fixing increment/decrement operators.

// ++ -- can be placed either before (pre-fix) or after (post-fix) a variable.


// What is operator precedence and how is it handled in JS?

// Expressions with more than one operator are executed in order of their precedence. 
// Every operator has a corresponding precedence number. The larger the precedence number the earlier it is excecuted.
// If operators have the same precedence number they are excecuted from left to right. 

// How do you access developer tools and the console?

        // Right click 'Inspect'

// How do you log information to the console?

    console.log(myFunction);