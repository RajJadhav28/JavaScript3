const student={//object
    fullName:"Raj Jadhav",
    marks:65.27,//marks-variables, property
    //printMarks - Method
    printMarks: function(){
    console.log("marks=", this.marks);  // Use 'this.marks' to access the object property
},
};
console.log(student);
console.log(student.fullName);
console.log(student.fullName);
console.log(student.marks);
student.printMarks();
student.toString;
let arr=["apple","mango","Banana"];
console.log(arr);
arr.push("Litchi");
console.log(arr);
const employee={
    calTax1(){
        console.log("tax rate is 10%");//method 1 for defining function--this is used most
    },
    calTax2:function(){
        console.log("tax rate is 10%");//method 2 for defining function
    },
};
employee.calTax1();
const karanArjun1={
    salary:50000,
}
const karanArjun2={
    salary:50000,
}
const karanArjun3={
    salary:50000,
}
const karanArjun4={
    salary:50000,
}
console.log(karanArjun1);
karanArjun1.__proto__=employee;
karanArjun2.__proto__=employee;
karanArjun3.__proto__=employee;
karanArjun4.__proto__=employee;
console.log(karanArjun1);
console.log(karanArjun2);
console.log(karanArjun3);
console.log(karanArjun4);
karanArjun1.calTax1();
