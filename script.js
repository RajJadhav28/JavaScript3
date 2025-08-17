// console.log("hello");
// alert("apna college");
// // console.log(window)
// window.console.log("hello2");
// window.alert("mello");
// console.dir(document);
// console.dir(document.body);
// console.log(document.body);
// document.body.childNodes[3].innerText="abcd";
// console.dir(document.body);

//  using id -- to access elements
// let  heading=document.getElementById("heading");//h1
// console.dir(heading);

//using class -- to access elements
// let button=document.getElementById("myId");
// console.dir(button);

// let headings=document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

//using tags -- to access elements
// let firstelements=document.querySelector(".myclass");
// console.dir(firstelements);


// let allelements=document.querySelectorAll(".myclass");
// console.dir(allelements);

// let buttonelements=document.querySelector("#myId");
// console.dir(buttonelements);

// let firstelements1=document.querySelector("#myId");
// console.dir(firstelements1.tagName);

// let firstelements2=document.querySelector("p");
// console.dir(firstelements2.tagName);

// console.dir(document.body.firstChild);
 
// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");

// let h2=document.querySelector("h2");
// console.dir(h2);
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from Apna College students";

let divs=document.querySelectorAll(".box");
let idx=0;
for(div of divs){
    div.innerText=`new unique value${idx}`;
    idx++;
    
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";

