// console.dir(document);


// console.dir(document.all);


// console.dir(document.all[8].innerText);



//selecting elements:

//Selcting Elements by Id: getElementById :returns the element as an object or null(if not found)
//Example:
// console.log(document.getElementById("mainImg"));

// let imgObj= document.getElementById("mainImg");
// console.dir(imgObj);

// console.log(imgObj.tagName);
// imgObj.src="assets/creation_1.png";

// document.getElementById("description");


//getElementByClassName:returns the element as an HTML collections or empty collection (if not found)

//Exmaple:
// let smallImages=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){

//    smallImages[i].src="assets/creation_1.png";
//    console.dir(`value of image no.${i} is changed`);
// }


//getElementByTagName:return the elements as an Html collection or empty collection(if not found)

// document.getElementsByTagName("p")[1].innerText="abc";


//Query Selector:Allow us to use any css selector:


// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector("div a"));

// console.log(document.querySelectorAll("div a"));


// Setting content in object:
//innerText: scrren pe jo likha hain whai dikhata hain!
//textContent: html ka  content!
//innerHtml:Recognize the tags!

//Manipuating Attributes:

//  Object.getAttribute(attr)
// obj.setAttribute(attr,val)
// let img=document.querySelector('img');

// img.getAttribute('id');
// img.setAttribute('id','spidermanImg');


// img.setAttribute('src',"assets/ceation_3.jpeg");

// img.setAttribute("class","images");


//Manipulating Style: style Property

// Object.style:


// let Links=document.querySelector(".box a");

// for(let i=0;i<Links.length;i++){
//     Links[i].style.color="yellow";

// }



//Manipulating Style:using ClassList:

//Obj.classList:

// let img=document.querySelector('img');

// console.log(img.classList);


// let heading=document.querySelector('h1');
// heading.classList.add("green");
// heading.classList.add("underline");

// heading.classList.remove("green");

// heading.setAttribute('class','green');//not prefered



//  console.log(heading.classList.contains("green"));


//  console.log(heading.classList.toggle("green"));

//  let box=document.querySelector(".box");

//  box.classList.add("yelloWBg");



//Adding Elements:   document.createElement('p')


//  let newP=document.createElement('p');
//  console.dir(newP);
//  newP.innerText="Hi, I am a new P";
//  let box=document.querySelector('.box');
//  box.appendChild(newP);


//  let btn=document.createElement('button');
//  btn.innerText="click me!";
//  box.appendChild(btn);


//  newP.append("this is new text");

//  box.prepend(newP);


//  let btn =document.createElement("button");
//  btn.innerHTML="New Button!";

//  let p=document.querySelector('p');
//   p.insertAdjacentElement("beforebegin",btn);

// p.insertAdjacentElement("afterend",btn);



//Removing Elements:
// Example:

// let p=document.createElement("p");
// p.innerText="New p";

// let box=document.querySelector(".box");
// box.appendChild(p);


// box.removeChild(p);

//  p.remove();


//Practice QS:

// QS1:
// let para1=document.createElement("p");
// para1.innerText="Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

//QS:2

// let heading=document.createElement("h3");
// heading.innerText="I'm a blue h3";

// document.querySelector('body').append(heading);
// heading.classList.add("blue");

// //QS:3

// let div= document.createElement("div");


// let h1=document.createElement("h1");
// let para2=document.createElement("p");

// h1.innerText="I m in div";
// para2.innerText="ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);


//Navigation:

//parentElement:
//childern/childElementCount:
//previousElementSibiling/nextElementSibiling


// let img=document.querySelector('img');

// console.log(img.previousElementSibling.style.color="green");

//ASSIGNMENT:9:





//Dom Events:Events are signals that something has occurred.(user input/actions)
// let btns = document.querySelectorAll("button");

// btn.onclick=function(){
//     alert("button was clicked");
// };



// function sayHello() {
//     alert("hello");
// }

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you enterd a button");
//     };
// }



//Event Listener:  addEventListner
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     //   btn.addEventListener("click",sayHello);
//     //   btn.addEventListener("click",sayName);

//       btn.addEventListener("dblclick",function(){
//         console.log("you double click me");
//       });

// }

// function sayHello() {
//     alert("hello");
// }

// function sayName(){
//     alert("apna college");
// }



//Activity:
// let btn=document.querySelector("button");


// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     console.log("color updated");

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;

// });


// function getRandomColor(){

//     let red=Math.floor(Math.random()*255);
//     let green =Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;

// }

//Event Listeners for Elements:

// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })


// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div");
// })

//this in Event Listeners: when "this" is used in a callback of event handler of something,it refers to that something:

// let btn= document.querySelector("button");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");


// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click",changeColor)

// p.addEventListener("click",changeColor);

// h1.addEventListener("click",changeColor);

// h3.addEventListener("click",changeColor);



//KeyWords Event:

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");

// });


// let inp=document.querySelector("input");


// inp.addEventListener("keydown",function(){
//     console.log("key was pressed");

// })



// inp.addEventListener("keyup",function(event){
//     console.log(event);
//     console.log(`key=${event.key}`);
//     console.log(`key code= ${event.code}`);
//     console.log("key was Released");

// })


//Form events:

//  let form=document.querySelector("form");

//  form.addEventListener("submit",function(event){
//  event.preventDefault();
//     alert("form submitted");
//  })


//Extracting from data:


//  let form=document.querySelector("form");

//  form.addEventListener("submit",function(event){
//  event.preventDefault();
// console.dir();

//    let inp=document.querySelector("input");
//    console.dir(inp);
//    console.log(inp.value);

//    console.dir(form);

//    let user=this.elements[0];
//    let pass=this .elements[1]

//  })



//More Events: change event,input event


// let form=document.querySelector("form");
// let inp=document.querySelector("#text");
// let p=document.querySelector("p");
//   form.addEventListener("submit",function(event){
//    event.preventDefault();

//   });

// let user=document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final val=",this.value);

// })


// inp.addEventListener("input",function(){
//     // console.log("input event");
//     console.log("final val=",this.value);

//     p.innerText=inp.value;

// })


//Event bubbling: means yah event kisibhi child ke parent ko bhi triggerd karata hain !matlab child ko click kiya vaisehi who parent element ko bhi triggerd karata hain
// to stop the event bubbling we used: event.stopPropagation();
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");


// div.addEventListener("click",function(event){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//   event.stopPropagation();
//     console.log("ul was clicked");
// });


// for(li of lis){
//     li.addEventListener("click",function(event){
//       event.stopPropagation();
//     console.log("li was clicked");
// });

// }


//Todo app:

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";

});
 //Event bubbling:
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });

// }

//Event Delegation:
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    // console.dir(event.target.nodeName);
3
//    console.log("button clicked");


  
});











































