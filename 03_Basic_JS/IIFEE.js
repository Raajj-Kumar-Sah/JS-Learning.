

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//Un-named IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
