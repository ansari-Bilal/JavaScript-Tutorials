"use strict"; //treat ll JS code as newer version

// alert(3+3) //we cannot use this bcoz we are operating this on node , not browser


let name="Bilal"

let age= 22

let state; //undefined

let color=null

/*
DatTypes:-
> number 
> bigint
> string- ""
> boolean- true/false 
> null- standalone value & it is also an Object
> undefined -it means value is not assigned yet
> symbol- to find uniqueness
*/
 //object

//  console.log(typeof "Bilal");  //=> String
//  console.log(typeof age);      //=>number
//  console.log(typeof state);    //=>undefined
//  console.log(typeof color);  //=> Object

console.table([typeof "Bilal",typeof age,typeof state,typeof color]); //we can write above 4lines like this in the form of table 