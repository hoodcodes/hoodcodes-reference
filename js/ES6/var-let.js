// var => function scope
// let => block scope

function foo() {
  for (var x = 0; x < 5; x++) {
    console.log(x);
  }
  console.log("after block: " + x);
}

foo();

/* Notes:  
If using `var`, since it has functional scope, 
If using `let`, you will see: ReferenceError: x is not defined
*/
