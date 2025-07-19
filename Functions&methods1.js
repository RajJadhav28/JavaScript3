function myFunction(){
    console.log("Welcome to apna college");
    console.log("We are learning JS");
}
myFunction();//invoking the function
myFunction();

function myFunction1(msg, n){//paramater->input
    console.log(msg*n);//NaN-not a number
}
myFunction1("I love js",200);//arguments

function sum(a,b){
    //local variables->scope
    console.log("a+b:",a+b);
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
//it is a higher order function/method
function abc(){
    console.log("hello");
}
abc();
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
    console.log(val+":",val*val);//val**2-another way to write it
});
console.log("=========================");
let calcSquare=(nums)=>{
    console.log(nums+":",nums*nums);
}
nums.forEach(calcSquare);
console.log("===============================");
//Map method-creates a new array with the result of some operations. The value its callback returns are
//used to form new array.
//arr.map(callbackFnx(value, index, array))
//it is similar to forEach but the difference is forEach only does the calcukation but map return a new array.

let newArr=nums.map((val)=>{
    return val*val;
});
console.log(newArr);
let arr2=[1,2,3,4,5,6,7];
let evenArr=arr2.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);
let Arr=arr2.filter((val)=>{
    return val>3;
});
console.log(Arr);
//reduce is used to reduce an array to a single value-it returns a single result
let arr1=[1,2,3,4,5];
const output=arr1.reduce((res, curr)=>{
    return res+curr;
});
console.log(output);
const output1=arr1.reduce((prev, curr)=>{
    // if(prev>curr){
    //     return prev;
    // }else{
    //     return curr;
    // }
    return prev> curr ? prev:curr
});
console.log(output1);
let marks=[97,64,90, 32,49,99,96,86];
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
let factorial=arr3.reduce((prev, curr)=>{
    return prev*curr;
});
console.log(factorial);