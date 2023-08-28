// console.log("============================");
// console.log("DOM + EVENT");
// console.log("============================");

// console.log("selector");

// const divID= document.
// getElementById("divID")
// console.log("div id ",divID);

// const classDiv = document.
// getElementsByClassName("className")
// console.log(" class Div ",classDiv);

// let divTag = document.
// getElementsByTagName("div")

//const btn = document.getElementById("btn")

//onClick
//cách 1
// function clickShowPass(e) {
//     console.log(e.target.textContent);
//     console.log(e.target.innerHTML);
//     e.target.innerHTML = "hidden pass"
// }
// //btn.addEventListener("click",clickShowPass)
// btn.addEventListener("click",(e)=>{
//     console.log(e);
// })

//cách 2
// btn.onclick = (e)=>{
//     console.log(e);
// }

 
//onChange
// const input =document.getElementById("input")
// console.log("input : ",input);

// input.addEventListener("change ",(e)=>{
//     console.log(e.target.value);
// })
// input.addEventListener("keydown",(e)=>{
//     console.log(e.target.value);
// })


// const btnTogglePass = document.getElementById("btn")
// //const input = document.getElementById("input") 
// let isHiddenPass =  true

// btnTogglePass.addEventListener("click",(e)=>{
//     console.log("click btn");
//     const input = document.getElementById("input")
 
//     if(isHiddenPass){
//         input.setAttribute("type","text")
//         isHiddenPass = false
//     }else{
//         input.setAttribute("type","password")
//         isHiddenPass = true;
//     }   
// })

// btnTogglePass.addEventListener("dblclick",(e)=>{
//     alert("sống chậm thôi")
// })

// btnTogglePass.addEventListener("mousemove",(e)=>{
//     console.log("mouse move");
// })

// btnTogglePass.addEventListener("mouseout",(e)=>{
//     console.log("mouse out");
// })

// btnTogglePass.addEventListener("mouseover",(e)=>{
//     console.log("mouse over");
// })

// btnTogglePass.addEventListener("mouseup",(e)=>{
//     console.log("mouse up");
// })

// btnTogglePass.addEventListener("mousedown",(e)=>{
//     console.log("mouse down");
// })

//tao dong ho dien tử
//sau 1s thì log ra giá trị mới

let id = setInterval(()=>{
    console.log("sau 1 giây");
},5000)
clearInterval(id)

const date = new Date()
console.log("giờ : ",date.getHours())
console.log("phút : ", date.getMinutes());
console.log("giây : ",date.getSeconds());
