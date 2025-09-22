//  console.log(1);
//  var a=20;
//  console.log(a);

// const a=50;
// if(a>10){
//     const a=100;
//     console.log("a="+a);
// }else{
//     console.log("Invalid conditon");
// }
// console.log("Hii"+a);

// const a=50;
// console.log(a);

// function fun(msg){
//     // return "hii";
//     console.log("Helloo");
// }
// const data=fun("Greet");
// console.log(data);

// const data=function(a,b){
//     return a*b;
// }
// console.log(data(12,20));

//arrow function
// const data=(msg)=>{
//     console.log("Heyy"+msg);
// }
// data("Learnign js");

// const data=msg=>msg;
// const output=(data("Hello  i am learnig js"));
// console.log(output);

//IIFE
// (function(){
//     console.log("Welcome to MERN Session");
// })();

// setTimeout(()=>{
//     console.log("Time is");
// },1000);

// function greet(msg="welcome to java"){

//     console.log(msg+" it is a good language");
// }
// greet("python");

function selectlang(lang){
    let result;
    function pycompiler(){
        result="pytohn";
    }
    if(lang=="Java"){
        function javacompiler(){
            // return "Using java compiler";
            console.log( "Using Java compiler");
        }
        result=javacompiler();
    }
    else if(lang=="c"){
        function ccompiler(){
            // return "Using C compiler";
            console.log( "Using C compiler");
        }
        result=ccompiler();
    }
    else{
        // result="No compiler found";
        console.log( "No compiler found");
    }
    return result
}
selectlang("");