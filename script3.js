// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name= div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// // console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","newClass"));

// let div=document.querySelector("div");
// console.log(div);
// console.log(div.style);
//div is a node
// div.style.backgroundColor="green";
// div.style.visibility="hidden";
// div.style.fontSize="26px";

// div.innerText="Hello!";

// let newBtn=document.createElement("button");
// console.log(newBtn);
// newBtn.innerText="clickme";
// console.log(newBtn);

// console.log(newBtn.innerText);
// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let p=document.querySelector("p");
// p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi i am new</i>";
document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
para.remove();

newHeading.remove();
