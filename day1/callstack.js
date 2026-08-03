function two(){
    three();
}
function three(){
   four();
}
function four(){
    console.log("Ponraj");
}
two();


// output is Ponraj because the function two is invoked and it calls the function three and then three calls the function four.
//  This is called call stack. It is a stack data structure that stores the function calls in a last in first out manner. 
// The last function called is executed first and then the previous function is executed.

// it is used for recurision ad async/await. It is also used for debugging and error handling. It is also used for memory management. It is also used for performance optimization. It is also used for code optimization. It is also used for code refactoring. It is also used for code maintenance. It is also used for code readability. It is also used for code reusability.
//  It is also used for code modularity. It is also used for code scalability.
//  It is also used for code flexibility. It is also used for code extensibility.
//  It is also used for code testability. It is also used for code maintainability.
//  It is also used for code portability. It is also used for code compatibility. 
// It is also used for code interoperability. It is also used for code integration.
//  It is also used for code deployment. It is also used for code versioning.
//  It is also used for code documentation. It is also used for code collaboration. 
// It is also used for code communication. It is also used for code coordination.
//  It is also used for code synchronization. It is also used for code orchestration.