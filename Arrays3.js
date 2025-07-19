let marks=[97,82,75,64,36];
console.log(marks);
console.log("Length:"+marks.length);
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
console.log("=======================");
for(let hero of heroes){
    console.log(hero);
}
console.log("========================");
let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let city of cities){
    console.log(city);
}
console.log("=============================");
let size=0;
let str="JavaScript";
for(let i of str){
    console.log("val:"+i);
    size++;
}
console.log(size);
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
console.log(`average marks of the class:${avg}`);
 
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`val at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`)
    i++;
}
console.log("Final Price:")
console.log(items)
console.log("After using for loop:")
let items1=[250,645,300,900,50];

for(let i=0;i<items1.length;i++){
    let offer=items1[i]/10;
    items1[i]=items1[i]-offer;
}
console.log(items1);

let foodItems=["potato","apple","litchi","tomato"];
foodItems.push("chips","burger","paneer");
console.log(foodItems);
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log("deleted:",deletedItem);
console.log(foodItems.toString());

let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let heroes1=marvelHeroes.concat(dcHeroes);
console.log(heroes1);
console.log(dcHeroes);
console.log(marvelHeroes);

marvelHeroes.unshift("antman");
console.log(marvelHeroes);
let val1=marvelHeroes.shift();
console.log("deleted_value:"+val1);

// unshift->used to add at the start
// shift is used to delete from start
// Slice():returns a piece of the array->does not changes the original array.
//  slice(startIdx, endIdx)
//  Splice():change original array(add, remove, replace)
//  splice(startIdx, delCount,newEl1...)

marvelHeroes.push("Perman","RedRanger");
marvelHeroes.unshift("BlueRanger");
console.log(marvelHeroes);

console.log(marvelHeroes.slice(1,3));

let arr=[1,2,3,4,5,6,7];
console.log(arr);
//Add element
arr.splice(2,0,101);
console.log(arr);

//Delete elements

arr.splice(3,1);//(idx, deleteidx, addItem)
console.log(arr);

//Replace
arr.splice(3, 1, 102);
console.log(arr);

arr.splice(4);
console.log(arr);

arr.splice();
console.log(arr);

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Neflix"];
console.log(companies);

//Remove 1st company
//pop and shift
companies.shift();
console.log(companies);

//Remove Uber and Add Ola in its place
//splice
companies.splice(1,1,"ola");
console.log(companies);

//Add amazon at the end
//push and unshift
companies.push("Amazon");
console.log(companies);
