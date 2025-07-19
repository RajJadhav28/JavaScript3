function myFunction(){
    console.log("Welcome to apna college");
    console.log("We are learning JS");
}

myFunction();
myFunction();

function myFunction1(msg, n){//paramater->input
    console.log(msg*n);
}
myFunction1("I love js",200);//arguments

function sum(a,b){
    //local variables->scope
    console.log(a+b);
}
sum(1,2);

function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(1,2);
console.log(val);

//Arrow functions->used for small functions

const arrowSum=(a,b)=>{
    console.log(a+b);
};
console.log(arrowSum);
arrowSum(3,4);
// console.log(arrowSum(3,4));

const arrMul=(a,b)=>{
    console.log(a*b);
};
arrMul(3,2);

let arrowSum1=(a,b)=>{
    return a*b;
}
console.log(arrowSum1(5,2));

const printHello=()=>{
    console.log("hello");
}
printHello();

function countVowels(str){
    let count=0, spacecount=0;
    for(const char of str){
        const lowerChar = char.toLowerCase();
        if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
            count++;
            console.log("Vowel:", char);
        }
        if (char === " ") {
            spacecount++;
        }
    }
    const words=str.trim().split(/\s+/);
    const wordcount=words.length;
    console.log("vowels count:",count);
    console.log("Space count:",spacecount);
    console.log("word count:",wordcount);
    console.log("character count:",str.length);
    
}
countVowels("ApnaCollege javascript cousre");
console.log("=========================");
//Using arrow function
const vowels=(str)=>{
    let count=0, spacecount=0;
    for(const char of str){
        const lowerChar = char.toLowerCase();
        if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
            count++;
            console.log("Vowel:", char);
        }
        if (char === " ") {
            spacecount++;
        }
    }
    const words=str.trim().split(/\s+/);
    const wordcount=words.length;
    console.log("vowels count:",count);
    console.log("Space count:",spacecount);
    console.log("word count:",wordcount);
    console.log("character count:",str.length);
}
vowels("ApnaCollege javascript cousre");

//forEach loop
//we can pass function as paremeters in js.
//eg:-it is called call back function
//it will only be used for arrays not for String
function abc(){
    console.log("hello");
}
function myFunc(abc){
    return abc;
}
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});
console.log("============================");
arr.forEach((val)=>{
    console.log(val);
});
let cities=["pune","mumbai","delhi"];
cities.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr);
});
//we can have value, index, array & we can only use it for arrays not for Strings , if we do we will get an error.
console.log("Square root:")
let nums=[2,3,4,5];
nums.forEach(val=>{
    console.log(val+":",val*val);
});
console.log("============================");
//another way
let nums1=[67,52,39];
let calcSquare=(num)=>{
    console.log(num+":",num*num);
};
nums1.forEach(calcSquare);
//Map method-creates a new array with the result of some operations. The value its callback returns are
//used to form new array.
//arr.map(callbackFnx(value, index, array))
let newArr=nums1.map((val)=>{
    return val*val;
});
console.log(newArr);

let arr2=[1,2,3,4,5,6,7];
let evenArr=arr2.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);

const output=arr.reduce((prev, curr)=>{
    return prev+curr;
});
console.log(output);
const output1=arr2.reduce((prev, curr)=>{
    // if(prev>curr){
    //     return prev;
    // }else{
    //     return curr;
    // }
    return prev> curr ? prev:curr
});
console.log(output1);

let marks=[97,64,32,49,99,96,86];
let topper=marks.filter((val)=>{
    return val>=90;
});
console.log(topper);

let n=prompt("enter a number:");
let arr3=[];
for(let i=1;i<=n;i++){
    arr3[i-1]=i;//1(0), 2(1), 3(2), 4(3)
}
console.log(arr3);
let sum11=arr3.reduce((prev, curr)=>{
    return prev+curr;
});
console.log(sum11);

let sum22=arr3.reduce((prev, curr)=>{
    return prev*curr;
});
console.log(sum22);