function receivesAFunction(fn){
    //! The following line hardcodes the fn rather than using the argument provided
    // function fn() {
    // }
    fn(); //! fn will run its own function's body
    return fn();  //! fn will run its own function's body; whatever the function body returns, receivesAFunction WILL ALSO return
}

console.log(receivesAFunction(parseInt))
// const receivesAFunctionArrow = fn => {
//     //! The following line hardcodes the fn rather than using the argument provided
//     // function fn() {

//     // }
//     fn(); //! fn will run its own function's body
//     return fn();  //! fn will run its own function's body; whatever the function body returns, receivesAFunction WILL ALSO return
// }

// const returnsANamedFunction = () => {
//     // return returnsANamedFunction
//     return function xyz(){}
// }
function returnsANamedFunction() {
    // return returnsANamedFunction
    return function xyz(){}
}

console.log(returnsANamedFunction())

function returnsAnAnonymousFunction(){
    return () => {}
}

console.log(returnsAnAnonymousFunction())


