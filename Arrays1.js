let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);
let heroes=["Ironman","Thor","Shaktiman1","Spiderman","Superman","Antman2"];
console.log(heroes);
console.log(typeof marks);
console.log(marks[0]);
console.log(marks[5]);
marks[2]=66;
console.log(marks);
console.log(marks[2]);
for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);
}
console.log("=====");
//for of
for(let hero of heroes){
    console.log(hero);
}
console.log("===========");
let cities=["delhi","pune","mumbai","hyderabad","gurgaon1"];
for(let city of cities){
    console.log(city);
}
console.log("============");
for(let city of cities){
    console.log(city.toUpperCase());
}
console.log("=========");
let size=0;
let str="JavaScript";
for(let i of str){//it is used for Arrays, strings, Maps, Sets, TypedArrays
    console.log("val="+i);
    size++;
}
console.log("String size:",size);
let student={
    name:"Rahul Kumar",
    age:20,
    cgpa:8.5,
    isPass:TextTrackCue
};
let marks1=[85,97,44,97,76,60];
let sum=0;
for(let val of marks1){
    sum=sum+val;
}
let avg=sum/marks1.length;
console.log(`avg marks of the class:${avg}`);
