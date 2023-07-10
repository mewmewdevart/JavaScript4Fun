/*
        ___                  _____           _       _   
        |_  |                /  ___|         (_)     | |  
            | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_ 
            | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|
        /\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_ 
        \____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|
                                                | |        
                                                |_|        Notes
*/

// A tour of JavaScript
let x; // Declare a variable named x.

// Values can be assigned to variables with an "=" sign
x = 0; // Now the variable x has the value 0
x // x => A variable evaluates to its value;

// JavaScript supports several types of values
x = 1;              // Numbers
x = 0.01;           // Numbers can be integers or reals
x = "Hello World";  // Strings of text in quotation marks
x = 'JavaScript';   // Single quote marks also delimit strings.
x = true;           // A bolean value   
x = false;          // The other Boolean value
x = null;           // Null is a special value that means "no value"
x = undefined;      // Undefined is a another special value like null. 

// JavaScript most important datatypes is the object.
// An object is a collection of name/value pairs, or a string to value map
let book = {                // Objects are enclosed in curly braces
    topic: "JavaScript",    // The property "topic" has value "JavaScript"
    edition: 7              // The property "edition" has a value 7
}; // The curly brace marks the end of the object

// Acess the properties of an object . or []
book.topic      // => "JavaScript"
book["edition"] // => Another way to acess property values;
book.author = "flanagan"; // Create new properties by assignment
book.contents = {}; //  Is an empty object with no properties

// Conditionally acess properties with ? . (ES2020);
book.contents?.ch01.sect1; // undefined book.contents has no ch01 property

// JavaScript also supports arrays (numerically indexed lists) of values;
let primes = [2, 3, 5, 7];  // An array of 4 values, delimmited with [ and ]
primes[0] // primes[0] => 2 the first elements (index 0) of the array 
primes.length // primes.length => 4 how many elements in the array
primes[primes.length - 1] // => the last elements of the array
primes[4] = 9; // add the new elements by assignment
primes[4] = 11; // or alter an existing element by assignment
let empty = []; // [] is an empty array with no elements
empty.length;    // empty.length => 0

//Arrays an objects can hold other arrays and objects
let points = [  // An object with 2 elements
    {x: 0, y:0}, // Each element is an object
    {x:1, y:1}
];

let data = {
    trial1:[[1, 2], [3, 4]], // the value of each property is an array
    trial2:[[2, 3], [4, 5]], // the elements of the arrrays are arrays
}

//  Operators act on values (the operands) to reproduce a new value
//  Arithmetic operators are somne of the simplest:
3 + 2 // => 5 addition
3 - 2 // => 1 subtraction
3 * 2 // => 6 multiplication
3 / 2 // => 1.5 division
points[1].x - points[0].x // => 1 more complicated operands also work
"3" + "2" // => "32" : add numbers, concatenates strings