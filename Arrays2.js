let marks=[97,82,75,64,36];
console.log(marks);
console.log("Length of array:",marks.length);

let heroes=["Ironman","Thor","Shaktiman","Spiderman","Superman",
    "Antman"
];
console.log(heroes);
console.log("Length of char array:",heroes.length);
console.log("typeof:",typeof marks);
console.log("marks[0]:",marks[0]);
console.log("marks[1]:",marks[1]);
marks[2]=66;
console.log(marks);
console.log("Iterating using for loop:")
for(let idx=0; idx<heroes.length;idx++){
    console.log(idx+"."+heroes[idx]);
}
console.log("Iterating using for-of loop:")
let cities=["delhi","pune","mumbai","hyderabad","gurgaon1"];
for(let city of cities){
    console.log(city);
}
console.log("converting using toupperCase():")
for(let city of cities){
    console.log(city.toUpperCase());
}
console.log("=============");
let size=0;
let str="JavaScript";
for(let i of str){
    console.log("val:"+i);
    size++;
}
console.log("String size:", size);
let student={
    name:"Raj Jadhav",
    age:20,
    cgpa:8.40,
    isPass:TextTrackCue
};
console.log(student);
let marks1=[85,97,44,97,76,60];
let sum=0;
for(let val of marks1){
    sum=sum+val;
}
let avg=sum/marks1.length;
console.log(`avg marks of the class:${avg}`);