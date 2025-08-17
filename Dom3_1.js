let newBtn=document.createElement("button");
newBtn.innerText="clickme";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);

//Qs2//element para,
// element-content
let para=document.querySelector("p");
console.log(para);
para.getAttribute("class");
// para.setAttribute("class","newClass");
console.log(para.classList);
para.classList.add("newClass");