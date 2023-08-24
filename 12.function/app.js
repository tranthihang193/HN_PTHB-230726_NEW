// // khai báo function
// function sum(a,b){
//     console.log(a+b);
//     return a+b;
// }

// // thực thi hàm
// const value=sum(10,200)
// sum(10,20)

// const doubleNumber=function(a){
//     return a*2
// }
// // const value1=doubleNumber(10)
// // console.log(value1)
// console.log(doubleNumber(10));

// (function running(){
//     console.log("hhhfgfhh");
// })()


// //arguments : có thể bao nhiêu đối số cũng được
// function muntiple(){
//     console.log(arguments);
// }
// muntiple(1,2,3,4,5)

// const sum2 = (...resParams)=> {
// console.log('fghj ',resParams)
// }

// const sum3 = function(){
//     console.log(arguments);
//     let a=10
//     function logA(){
//         console.log(a)
//         const b=15
//     }
//     console.log(b);
//    logA()
// }

//function tìm số nguyên tố
function snt(a){
    let flag = true
    if(a < 2){
        return false
    }else{
        for(let i=2; i<a; i++){
            if(a % i===0){
                flag=false
                break;
            }
        }
    }
    return flag
}

let arraySnt=[]
for (let i=0;i<1000;i++){
    const checking=snt(i)
    if(checking){
        console.log(i," la so nguyen to");
        arraySnt.push(i)
    }else{
        console.log(i," không phai so nguyen to");
    }
}
console.log(arraySnt);