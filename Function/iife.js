
// Immediately Invoked Function Expressions (IIFE)


// -------- named IIFE ----------

( function chai() {
    console.log(`DB CONNECTED`);            // DB CONNECTED
} )();



// -------- unnamed IIFE ----------

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);            // DB CONNECTED TWO Nishant
} )('Nishant');

