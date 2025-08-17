let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn1 was clicked-Handler1");
    let a=25;
    a++;
    console.log(a);
};
// It overrides Handler1
btn1.onclick=()=>{
    console.log("Handler2")
}
let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("you are inside div");
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY);
}
let btn2=document.querySelector("#btn2");
btn2.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY);
}
let btn3=document.querySelector("#btn3");

btn3.addEventListener("click",(evt)=>{
    console.log("button3 was clicked");
    console.log(evt);//event object
    console.log(evt.type);
});
btn3.addEventListener("click",()=>{
    console.log("button3 was clicked-handler 2")
})
let btn4=document.querySelector("#btn4");
btn4.addEventListener("click", (evt)=>{
    console.log("button 4 was clicked-handler1");
});
btn4.addEventListener("click", (evt)=>{
    console.log("button 4 was clicked-handler2");
});

const handler3=()=>{
    (evt)=>{
    console.log("button 4 was clicked-handler3");
}
}
btn4.addEventListener("click", handler3);
btn4.addEventListener("click", (evt)=>{
    console.log("button 4 was clicked-handler4");
});
btn4.removeEventListener("click",handler3);

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";//dark
modeBtn.addEventListener("click",()=>{
    // console.log("you are trying to change the mode");
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
