// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
   //Block Scope
//console.log(blockVar);
//console.log(blockLet);
   
}
   // Global scope
//   console.log(globalVar); // Output: "I'm a global variable"
//   console.log(globalLet); // Output: "I'm also global, but scoped with let"
//   console.log(globalConst); // Output: "I'm a global constant"


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
//    console.log(functionVar); // Throws ReferenceError
//    console.log(functionLet); // Throws ReferenceError
//    console.log(functionConst); // Throws ReferenceErro
  
{
var changeVar = "I'm a block-scoped var";
let changeLet = "I'm a block-scoped let";
const changeConst = "I'm a block-scoped const";

console.log(changeVar); // Output: "I'm a block-scoped var"
console.log(changeLet); // Output: "I'm a block-scoped let"
console.log(changeConst); // Output: "I'm a block-scoped const"

changeVar = "I can be changed"; // Reassigning var
changeLet = "I can also be changed"; // Reassigning let
// changeConst = "I cannot be changed"; // Throws TypeError: Assignment to constant variable

}

changeVar = "I can be changed outside the block"; // Reassigning var
console.log(changeVar); // Output: "I can be changed outside the block"