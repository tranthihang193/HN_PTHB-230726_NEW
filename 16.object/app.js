// console.log(document);

// const divId = document.getElementById("div");
// console.log("djhfhk divID : ",divId);


// const objPersonChuong = {
//     name: "cnchuong",
//     age: 18,
//     heighr: 170,
//     totnghiep : false
// };

// const todos = [
//     {
//         title : "lam bua toi",
//         isCompleted:true,
//         startDate: "5:30",
//         endDate:"6:30",
//         Notification: ()=>{
//         console.log("Notification");
//             return "done";
//     },
//         pet: ["cat","dog"],
//     },
//     {
//         title: "an toi",
//         isCompleted: false,
//         startDate:"6:30",
//         endDate:"6:30",
//     },
// ];

// const item1 = todos[0];
// item1.title = "di cho";
// item1.clean = false;
// //console.log(item1.title);
// console.log(item1.Notification());
// console.log("item 1 : ",item1);


// let obj = {}
//     obj.name = "sdsa";
//     obj.name = "sdsa";
//     obj.name = "sdsa";
//     obj.name = "sdsa";

// const objContr = new Object({
//     age: 23;
// });


//bai 1

// const Rectangle =  {
//     chieuDai: 15,
//     chieuRong: 13,
//     dientich: function(){
//         return this.chieuDai*this.chieuRong;
//     },
//     chuvi: function(){
//         return (this.chieuDai+this.chieuRong)*2;
//     }
//     };
// const dientich=Rectangle.dientich();
// console.log("dien tich: ",dientich);
// const chuvi=Rectangle.chuvi();
// console.log("chu vi: ",chuvi);

    
//bai 2

// const temperature = {
//     doC : 3,
//     doF: function(){
//         return this.doC/5*9+32;
//     },
//     doK: function(){
//         return this.doC+273.15;
//     }
// };
// const doc= temperature.doC;
// console.log("do c: ",doc);
// const dof=temperature.doF();
// console.log("do f: ",dof);
// const dok = temperature.doK();
// console.log("do k: ",dok);


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.getName = this.getName;
    }
    getName(){
        console.log(this.name);
    }
}

const student = new Person("hai",18)
console.log("hoc sinh:",student.getName());