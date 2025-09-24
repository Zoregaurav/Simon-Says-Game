//   console.log("hello");
//    let a=12;
//    let b=12;
//    console.log(a+b);



//    let pencilPrice=10;
//    let erasorPrice=5;
// //    console.log("the total price is: ", pencilPrice+erasorPrice,"Rupees. ");

//    let output=`the total price is: ${pencilPrice+erasorPrice} Rupees.` ;
//    console.log(output);


// Operators:
// let a=10;
// let b=5;
// console.log(a++);
// console.log(++b); 

//conditional Statments:
// console.log("before my if satement");
// let age = 20;
// if (age >= 18) {
//     console.log("you can vote");
//     console.log("you can drive");
//     let a = 5;
//     console.log(a * 5);
// }
// console.log("after my if statement");
// if (age >= 20) {
//     console.log("you are in your 20's");
// }

//Traffic Light System

//  let marks = 32;

//  if (marks >= 80) {
//     console.log("A+");
//  } else if (marks >= 60) {
//     console.log("A");
//  } else if (marks >= 33) {
//     console.log("B");
//  } else{
//     console.log("F");
//  }

// practice qs:

// let str="aat";
// if((str[0]=='a')&&(str.length>3)){
//     console.log("string is good");
// }else{
//     console.log("bad string");
// }

//Switch Statement:
// let color = "red";
// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken Light");
// }


// let day=8;

// switch(day){
//     case 1 :
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesaday");
//         break;
//     case 3:
//         console.log("wensday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("wrong input");           
// }


// alert("something is wrong!");
// console.log("this is an simple log");
// console.error("this is an error");

// let firstName=prompt("Enter Your name:");
// console.log(firstName);

// let firstName=prompt("enter first name");
// let lastName=prompt("enter last name");
// let msg="welcome"+" "+firstName+" "+ lastName+"!";
// alert(msg);

//ASSIGNMENT-1 QS:
// let a=78;
// b=100;
// c=45;
// if(a>b){
//     if(a>c){
//         console.log(a)
//     }else{
//         console.log(c);
//     }
// }else{
//     console.log(b);
// }

// let a=32;
// let b=47852;
// if((a%10)==(b%10)){
//     console.log("same digit");
// }else{
//     console.log("not same last digit");
// }




//String Methods:
// Methods-actions that can be performed on objects.
// Format: stringName.method()


// let msg=" hello ";
// console.log(msg.trim());

// let password=prompt("set your password");
// let newPass=password.trim();
// console.log(newPass);

//concept of String Immutable in js:
// let str=" apna college  ";
// let newStr=str.trim();
// console.log(str);
// console.log(newStr);


// let name="Apna College";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

//String Methods with Arguments:Argument is a some value that we pass to the method

// Format: stringName.method(arg)

// let str="IloveCoding"; 
// console.log(str.indexOf("love"));
// console.log(str.indexOf("Love"));


//Method Chaining:Using one method after another.order of execution will be left to right.
// Example:
// let str=" apna college ";
// let newStr=str.trim().toUpperCase().indexOf("APNA");
// console.log(newStr);


//Slice:Returns a part of the original string as a new string.
// Example:
// let str="IloveCoding";
// console.log(str.slice(0,5));
// console.log(str.slice(5));//imp  
// console.log(str.slice(-1));//imp  11-1=10 ->'g'
// console.log(str.slice(-3));  //11-3=8 ->'ing'


// replace: Searches a value in the string and return a new string with value replaced.
// Expample:
// let str="I Love coding";
// console.log(str.replace("coding","teaching"));
// let str="apna college";
// console.log(str.replace("college","clg"));  


//repeat: Return a string with number of copies of a string:
// let str="Mango";
// console.log(str.repeat(3));



//Array(Data Structure):
// let nums=[2,4,6,8];
// console.log(nums);  

// let names=["adam","bob","catlyn"];
// let info=["aman",25,6.1];   //mixed array
// console.log(info);
// console.log(names[0]);
// console.log(names[0].length);


//empty arrary:
// let newArr=[];
// console.log(newArr.length);

//Arrays are Mutable:
// let name="rohit";
// name[0]='m';
// console.log(name);

// let fruits=["mango","apple","litchi"];
// fruits[0]="banana";
// fruits[1]="orange";
// fruits[10]="papya";
// console.log(fruits);


//Array Methods:
// push:add to end

// unshift:add to start

//pop:delete from end and return it

//shift:delete from start and return it

// let cars=["audi","bmw","xuv","maruti"];
// cars.push("toyota");    //add the end
// console.log(cars);

// cars.pop("toyota");  //delete from end and return it   
// console.log(cars);

// cars.unshift("hundai");  //Add to the start
// console.log(cars);

// cars.shift("hundai");  //delete from start and return it
// console.log(cars);


//practice qs:
// let start=['january','july','march','august'];
// start.shift();
// start.shift();
// console.log(start);
// start.unshift("july","june");
// console.log(start);


//indexOf:return index of something
// Expample:
// let cars=["audi","bmw","xuv","maruti"];
// console.log(cars.indexOf("bmw"));

//includes:search for a value
// console.log(cars.includes("audi"));

//concat:merge 2 arrays: no change in original array
// let primary=["red","yellow","blue"];
// let secondary=["orange","green","violet"];
// let all=primary.concat(secondary);
// console.log(all);


//reverse: original array main chege hoga!
// let cars=["audi","bmw","xuv","maruti"];
// let rev=cars.reverse();
// console.log(rev);

//Slice: Copies a portion of an array

// let colors=["red","yellow","blue","orange","pink","white"];

// console.log(colors.slice(1,3));
// console.log(colors.slice(-2));
// console.log(colors.slice(2));


//Splice: removes/replace/add elements in place splice(start,deleteCount,item0...itemN)

//  let cars=["audi","bmw","xuv","maruti"];
//   cars.splice(1,0,"mercedese");
//   cars.splice(4,0,"hundai");
//   cars.splice(1,0,"ferari");

// cars.splice(0,1,"xuv");



//sort: sort an array
// Exapample:
// let char=['a','c','b','f'];
// console.log(char.sort());
// Note: not work for numbers basically it converted no to string and then sort


//Array References:
//  refer notebook

//const Arrays:Note varable ka address change nahi kar sakte but ham array ke andar ki value change kar sakte hain!
// Example:
// const arr=[1,2,3,4];
// arr.push(5);
// console.log(arr);


//Neasted arrays:

// let nums=[[2,4],[3,6],[4,8]];

// assignment qs:
// QS:1
// let arr=[7,9,0,-2];
// let n=arr.length-1;
// let newArr=arr.slice(0,n);
//  console.log(newArr);

//QS:5  
// let str=" apna college ";
// console.log(`orginal  string=${str}`);
// console.log(`string without spaces =${str.trim()}`);

//QS:6
// let arr=['a','b','c'];
// let item='d';

// if(arr.indexOf(item)!=-1){
//       console.log("Element  exist");
// }else{
//     console.log("Element not exist");
// }


//QS:4
// let str="gaurav";
// let idx=3;

// if(str[idx]==str.toLocaleLowerCase){
//     console.log("character is lowercase");

// }else{
//     console.log("character is not lowercase");
// }

//for loop:used to iterate a piece of code

// let  n=5;
// for(let i=0;i<n;i++){
//     console.log(i);
// }


// print all odd numbers:
// also you can do->i=i+2
// for(let i=1;i<=15;i++){
//       if(i%2!=0){
//         console.log(i);
//       }
// }


//print all even numbers:

// for(let i=1;i<=15;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Infinite Loops:
// for(let i=1;i>=0;i++){

// }
// for(let i=1;i<=5;i--){

// }
// for(let i=1; ;i++){

// }

//print the multiplication table for 5:
// for(let i=5;i<=5*10;i+=5){
//     console.log(i);
// }


//Neasted for loop:

// for(let i=1;i<=3;i++){
//     console.log(` outer loop: ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }


//while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

//Activity:

// const favMovie="avatar";

// let guess=prompt("guess my favorite movie");

// while(guess!=favMovie){

//     if(guess=="quit"){
//         console.log("you quit");
//         break;  
//     }
//     guess=prompt("wrong guess.please try again");

// }

// if(guess==favMovie){
//     console.log("congratts!!");
// }



//break keywords:
// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
// }
// console.log("we used break at 3");


//Loops with Arrays:

// let fruits=["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);

// }


//Neasted Loops with Neasted Arrays:

// let heroes=[
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]

// ]

// let student=[["aman",95],["shrdha",94.4],["karan",100]];

// for(let i=0;i<student.length;i++){
//     console.log(`info of student # ${i}`)
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }


//for of loop: recently added   ->mostly used for collection of array and string!

// let fruits=["mango","apple","banana","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// let char=["apnaCollege"];
// for(char of "apnaCollege"){
//     console.log(char);
// }

//Neasted for-of loop
// let heroes=[
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ];

// for(list of heroes){
//     for(name of list){
//         console.log(name);
//     }
// }




//Activity:(Todo App):
//  let todo = [];

//     let req = prompt("please enter your request");

//     while (true) {
//         if (req == "quit") {
//             console.log("quitting app");
//             break;
//         }
//         if (req == "list") {
//             console.log("--------------");
//             for (let i = 0; i < todo.length; i++) {
//                 console.log(i, todo[i]);

//             }
//             console.log("----------------");
//         } else if (req == "add") {
//             let task = prompt("please enter task you want to add");
//             todo.push(task);
//             console.log("task added");
//         } else if (req == "delete") {
//             let idx = prompt("please enter index you want to delete");
//             todo.splice(idx, 1);
//             console.log("task deleted");
//         }
//         else {
//             console.log("wrong request");
//         }

//         req = prompt("please enter your request");

//     }

//   Object Literals:used to store keyed collections and complex entities.
//    let arr[] -> type of array: object 


// const student ={
//     name:"shardha",
//     age:23,
//     marks:94.4,  
// };

// const  item ={
//     price:100.99,
//     discount:50,
//     colors : ["red","pink"]
// };

// const post={
//     username:"@guaravzore",
//     Content:"is very smart",
//     likes:150,
//     reposts:34,
//     tags:["@apnacollege","@delta"]
// };


//Get Values:
// let prop="reposts";
// undefined
// post
// {username: '@guaravzore', Content: 'is very smart', likes: 150, reposts: 34, tags: Array(2)}
// let prop="reposts";
// undefined
// post.prop
// undefined
// post[prop];
// 34

//NOte:"Dot operator will not help at max case but "[]"" will help to access the value "


//NOTE:js automatically converts object keys to strings.even if we made the number as a key. the number will be conveted to sting:

//Example:
// const obj={
//     1:"a",
//     2:"b",
//     null:"d",//reserved key 
//     true:"c", //reserved key 
//     undefined:"e"//reserved key 
// };


//Add Update Value:
// const student ={
//      name:"shardha",
//      age:23,
//      marks:94.4,
//      city:"delhi"
// };

//output window:
// {name: 'shardha', age: 12, marks: Array(3), gender: 'male'}
// age
// : 
// 12
// gender
// : 
// "male"
// marks
// : 
// (3) [45, 56, 67]
// name
// : 
// "shardha"
// [[Prototype]]
// : 


// Object of objects:storing inforamation of multiple students

// const classInfo={
//     aman:{
//      grade:"A",
//      city:"delhi",

//     },

//     shrdha:{
//     grade:"B",
//     city:"mumbai",

//     },

// }

//Object of array:
// const classInfo=[
//     {
//      grade:"A",
//      city:"delhi"

//     },

//     {
//     grade:"B",
//     city:"mumbai"

//     }

// ];


//Math Object:Math.abs(),Math.pow(),Math.floor(),Math.ceil(),Math.random()


//Math.random function(): From 1 to 10:
// let random=Math.floor(Math.random()*10)+1;


//NOTE:
// if me break likhna matlab → "Agar condition true hai to loop tod do".

// if apne aap loop ko nahi todta.
//Activity:
// const max=prompt("enter the max number");

// const random=  Math.floor(Math.random()*max)+1;

// let guess=prompt("guess the number");

// while(true){

//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess==random){
//         console.log("you are right!congrats!! random number was",random);
//        break;

//     }else if(guess<random){
//         guess=prompt("hint: guess is too small.please try again");
//     } else{
//         guess=prompt("hint: guess was too large.please try again")
//     }


// }

//Assignment:


// Qs3.Create an object representing a car that stores the following properties for the
// const car={
//     name:"Grand-vitara",
//     model:"Zeta",
//     color:"black",

// };

//Qs2.Create an object representing a car that stores the following properties

// const person = {
//     name: "Gaurav",
//     age: 23,
//     city: "vashi",

// };
//ANS:person["city"]="New-York";
// 'New-York'
// person
// { name: 'Gaurav', age: 23, city: 'New-York' }
// age
// :
// 23
// city
// :
// "New-York"
// name
// :
// "Gaurav"
// [[Prototype]]
// :
// Object

// person.country="united states";
// 'united states'
// person
// {name: 'Gaurav', age: 23, city: 'vashi', country: 'united states'}
// age
// : 
// 23
// city
// : 
// "vashi"
// country
// : 
// "united states"
// name
// : 
// "Gaurav"
// [[Prototype]]
// : 
// Object

// Q1:Qs1.Create a  program that generates a random number representing a dice roll.[The number should be between 1 and 6]

//    let dice=Math.floor(Math.random()*6)+1;
//    console.log(dice);



//FUNCTIONS IN JS:(IMP)

// function hello(){
//     console.log("hello");
// }

// function isAdult(){
//     let age=18;
//     if(age>=18){
//      console.log("you are Adult");
//     }
// }

// hello();


//Function with Arguments:

//  function printName(name,age){
//     console.log(name);
//  }

//  printName(name);

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("aman");

//avg of 3 numbers:

// function sum(num1,num2,num3){
//     let avg=(num1+num2+num3)/3;
//     console.log(avg);

// }
// sum();


//create a function that prints the multiplication table of a number:

// let n=console.log("enter thr number");
// function mul(n){
//   for(let i=n;i<n*10;i=i+n){
//     console.log(i);
//   }
// }


//Return: return keyword is used to return some value from the function.

// function sum(a,b){

//   return a+b;
// }

// sum(sum(1,2),3);
// console.log();

// function isAdult(age){
//   if(age>=18){
//     return "adult";
//   }else{
//     return "not adult";
//   }
//   console.log("bye bye");
// }

//sum of numbers from 1 to n

// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <=n; i++) {
//       sum=sum+i;
//   }
//     return sum;
// }


//concatenation of all strings in an array:

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//   let result="";
//   for (let i = 0; i < str.length; i++) {
//      result+=str[i];
//   }

//   return result;

// }

//Block Scope:alreday we studied in code 

//Lexical Scope:

// function outerFunc(){  //function scope
//     let x=5;
//     let y=6;

//     function innerFunc(){  //function scope
//       let a=10;
//       console.log(x);//lexical scope
//       console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }

//hoisting:


//Function Expression:(nameless function)

// let hello=function(){
//   console.log("hello");
// }

// hello=function(){
//   console.log("namste");
// }

//Higher Order Functions:takes one or multiple functions as arguments

// function multipleGreet(func,count){ //higher order function
//   for(let i=1;i<=count;i++){
//     func();
//   }
// }

// let greet=function(){
//   console.log("hello");
// }

// multipleGreet(greet,4);  //nam se pass karna  "()":-function  ko execute kake nahi behja 


//Higher order Functions(Return a Function):


// function oddorEvenFactory(request) {

//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     }
//     return odd;
//   } else if (request == "even") {
//     return function (n) {
//      console.log(n % 2 == 0);
//     } 
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "odd";


//Methods:Actions that can be performed on an object

// const calculator={

//   add(a,b){
//     return a+b;
//   },
//   sub(a,b){
//     return a-b;
//   },
//   mul:function(a,b){
//     return a*b;
//   }

// };


//Assignment:

// QS:1 Write a JavaScript function that returns array elements larger than a number.



//This Keywords: "this" keywords refers to an object that is executing the current piece of code
// this->"student object ko this ne call ki"
// const student ={
//     name:"shrdha",
//     age:23,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){   //method
//         console.log(this);// "this yane student object"
//         let avg=(this.eng+this.math+this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg(){
//     console.log(this);
// }


//try and catch:
//Example:
// console.log("hello");
// console.log("hello");
// // let a=5
// try {
//     console.log(a);  ///error ko fekta hain try
// } catch {
//     console.log("caught an error.. a is not defined"); //error ko catch karta hain catch


// }

// console.log("hello2");

// console.log("hello2");

// console.log("hello2");



//Arrow function:

//  const sum=(a,b)=>{
//     console.log(a+b);

//  }

//  const cube=n=>{
//     console.log(n*n*n);
//  }


//Implicit return:
// ⚡Main Difference:
// Implicit return → Short syntax, curly braces aur return nahi hota.

// Explicit return → Curly braces {} lagane ke baad return likhna zaroori hai.

// const mul=(a,b)=>(a*b); 
// //Example:
//  const sum=(a,b)=>(a+b);

//  const cube=n=> n*n*n;


//Set Timeout:
// console.log("hi there!");

//  setTimeout(()=>{
//    console.log("Apna college");
//  },4000);

//  console.log("welcome to");


//Set Interval:



// let id=setInterval(()=>{
//   console.log("Apna college");
// },2000)

// console.log(id);


// let id2=setInterval(()=>{
//   console.log("Apna college");
// },2000)

// console.log(id2);



//rokana hai kisi id ko to clearInterval use karte hain! taki function stop ho nahi to who continue chalu rahta hain

// clearInterval(id);

//This in arrow function:

// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, //global sope

//     getName: function () {
//         console.log(this); //student 
//         return this.name;
//     },

//     getName: () => {
//         console.log(this);//parent's scope-->window
//         return this.name;
//     },

//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this);  //student
//         }, 2000);
//     },
//     getInfo2: function () {
//         setTimeout(function () {
//             console.log(this);  //window
//         }, 2000);
//     },

// };


//Practice Qs:

// const square=(n)=>n*n;

// const square = (n) => {
//  return n*n;
// }

//write a function to print "hello world 5 times" at interval of 2s each

// let id=setInterval(()=>{
//     console.log("hello world");
// },2000);


// setTimeout(()=>{
//      clearInterval(id);
//      console.log("clear interval ran");
// },10000);


//javascript part-8:

//Array Methods:1.forEach -> arr.forEach(some fuction defination or name).
// 2.map
// 3.filter
// 4.some
// 5.every
// 6.reduce

// Example:

// let arr=[1,2,3,4,5];

//Arrow Function:
// arr.forEach((el)=>{
//     console.log(el);
// });

// //Normal Function:
// arr.forEach(function(el){
//     console.log(el);
// });


// //function Expression:
// let print=function(el){
//     console.log(el);
// };

// arr.forEach(print);

//object in array:
// let arr=[
//     {
//         name:"aman",
//         marks:95,
//     },
//     {
//         name:"shrdha",
//         marks:94.4,
//     },
// ];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });


//Map: let newArr=arr.map(some function defination or name)

//EXample:


// let num=[1,2,3,4];

// //Arrow function used in function expression
// let double= num.map((el)=>{
//     return el*el;
// });


// let students=[
//     {
//         name:"aman",
//         marks:95,
//     },
//     {
//         name:"shrdha",
//         marks:94.4,
//     },
// ];


// let gpa=students.map((el)=>{
//     return el.marks/10;

// });


//Filter: let newArr=arr.filter(some function defination or name)

// let nums=[1,2,3,4,5,6,7,8,9,10,11];


// let ans=nums.filter((el)=>{
//     return el<=5;
// })


//Evey:  or some->basically opp to Every

// let arr=[2,4,6];

//Arrow function
// let even=arr.every((el)=>{
//     return el%2==0;
// });


//Normal function:
// arr.every(function(el){
//     console.log(el%2==0);
// })



//Reduce:  reduce the array to a single value.

//This is logic of sum of all element of the array:
// let nums=[1,2,3,4];
// let finalAns= nums.reduce((res,el)=>{
//     return res+el
// });



//Find max value in array:

// let arr =[1,4,2,5,6,7,2,9,2];


// let max=arr.reduce((max,el)=>{

//     if(el>max){
//         return el
//     }else{
//         return max
//     }
// });

//practice Qs:
// check if all numbers in our array are multiples of 10 or not:(every)

// let nums=[10,20,30,40];

// let ans=nums.every((el)=>{
//      return el%10==0
// });
// console.log(ans);


//check a function to find the min number in an array:(reduce)

// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         } else {
//             return el;
//         }

//     });
//     return min;

// }

// let nums = [10, 20, 30, 40];


//Default Parameters:
// Example:

// function sum(a,b=2){
//     return a+b;
// }

// sum(1,3);
// sum(1); //a=1 ,b=2



//Spread:Expands an iterable into multiple valules:

//Spread with array Literals:

// let arr=[1,23,4,56,7,83,35,5,10];

// // console.log(Math.min(...arr));
// console.log(...arr);

// let chars=[..."hello"];

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8];

// let nums=[...even,...odd];



//Spread with Object Literals:


// const data={
//     email:"ironman@gmail.com",
//     password:"abcd",
// }

// const dataCopy={...data, id:123 , country:"india"};

// let arr=[1,2,3,4,5];///val

// const obj1 ={...arr}; //obj-> key:val;


// let obj2= {..."hello"};




//Rest: Allow a function to take an indefinite number of arguments and bundle them in an array:


// function sum(...args){  //arguments
//     for(let i=0;i<args.length;i++){  

//         console.log("you gave us:",args[i]);

//     }

// }


// function min(a,b,c,d){
//     console.log(arguments);//collection->arguments
//     console.log(arguments.length);
//     arguments.push(1); //not work show error beacause arguments is collection then array method will not apply on collection...
// }



// // using Rest:
// function sum(...args){
//     return  args.reduce((sum,el)=> sum+el );
// }

// //find min value:
  
// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     })
// }


//Destructuring:storing values of array into multiple varibles.


// let names=["tony","bruce","peter","steve"];

// let winner=names[0];
// let runnerup=names[1];
// let secondRunnerup=names[2];


// let[winnner,runnerup,...others]=names;  //here we combined rest and destructuring concepts.


//Desstrcuturing for objects:

// const student={
//     name:"karan",
//     age:14,
//     class:9,
//     subjects:["hindi","english","math","science"];
//     username:"karan@123",
//     password:"abcd"

// };

// let{username:user,password:secret,city="mumbai"}=student;



//Assisgnment Js:(part 8)
//Qs1.Square and sum the array elements using the arrow function and then find the average of the array

// let arr=[2,3,4,5,6,7];


// let square=arr.map((el)=>{
//     return  el*el;
  
// })

// let sum=arr.reduce((res,el)=>{
//     return res+el;
// })

// let avg=sum/arr.length;
// console.log(avg);

//Q2:Qs2.Create a new array using the map function whose each element is equal to the original element plus 5


// let arr=[2,3,4,5,6];
// let newArr=arr.map((el)=>{
//     return el+5;
// })

// Q3:.Create a newarray whose elements are in uppercase of words present in the original array

// let strings=["apple","banana","orange"];

// console.log(strings.map((string)=>{
//      return string.toUpperCase();
// }));

//Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
// 👉 One line meaning:
// Spread (...) = take out everything from the box and place it outside.
// const doubleAndReturnArgs=(arr,...args)=>[

//     ...arr, ...args.map((v)=>v*2),
// ];

//  console.log(doubleAndReturnArgs([1,2,3],4,4));
// doubleAndReturnArgs([2],10,4);

// Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object 


// const mergeObject=(obj1,obj2)=>({...obj1},{...obj2});

// mergeObject({a:1,b:2},{c:3,d:4});



//part-9:introduction:
//DOM(Document Object Model):


console.log(dir);
console.log(document);




















































































































































































