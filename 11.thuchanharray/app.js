//bai 4
// let userInput= "1,3,5,7,9";
// //dung split tach dau phay và lay ra dươc mang so
// const arrayNumber= userInput.split(",")

// let sum=0;
// for (let i=0; i<arrayNumber.length;i++){
//     const element=arrayNumber[i];
//     sum=sum+Number(element)
// }
// console.log(sum);


// bai 5
// let userInput= "1,3,5,7,9";
// //dung split tach dau phay và lay ra dươc mang so
// const arrayString= userInput.split(",")

// let arrayNumber=[]

// for(let index=0;index<arrayString.length;index++){
//     const element=arrayString[index];
//     const number=Number(element)
//     console.log("xuat ra: ",number)
//     arrayNumber.push(number)
// }

// console.log("abc:",arrayNumber)
// let min=arrayNumber[0]
// console.log("cdg :",min)
// for(let i=1;i<arrayNumber.length;i++){
//     const element=arrayNumber[i];
//     console.log("hjgkf :",element)
//     if(element<min){
//         min=element;
//     }
// }



//bai 6
// let number=[1, 55, 99, 73, 64, 28];
// let userInput="2"





//bai 7

// let sheeps=[5,7,300,90,24,50,75]
// //7.1
// console.log("xin chao day la dan cua cua toi:",sheeps);
// //7.2
// let maxSheep=sheeps[0];
// console.log("gdjs:",maxSheep);

// for (let i=1;i<sheeps.length;i++){
//     const sheep=sheeps[i];
//     if(sheep>maxSheep){
//         maxSheep=sheep;
//     }
// }
// console.log('con cuu lon nhat cua toi có kich thuoc', maxSheep, 'hay thien no');

// //7.3


// //for thường
// // const indexMaxSheep=sheeps.indexOf(maxSheep);
// //  let newsheeps=[]

// //  for (let i=0;i<sheeps.length;i++){
// //     const element=sheeps[i];
// //     console.log("phan tu :",element,i)
// //     if(indexMaxSheep===i){
// //         newsheeps.push(8)
// //     }else{
// //         newsheeps.push(element)
// //     }
// //  }
// //  console.log("sau khi thien, day la dan cuu cua toi: ",newsheeps);



// //forEach
// // const indexMaxSheep=sheeps.indexOf(maxSheep);
// //  let newsheeps=[];

// // sheeps.forEach((sheep,index)=>{
// //     if(index===indexMaxSheep){
// //         newsheeps.push(8)
// //     }else{
// //         newsheeps.push(sheep)
// //     }
// // })
// // console.log("sau khi thien, day la dan cuu cua toi: ",newsheeps);

// //sheeps[indexMaxSheep]=8

// //map

//  const indexMaxSheep=sheeps.indexOf(maxSheep);
//  let newsheeps=sheeps.map((sheep,index)=>{
//     if(index===indexMaxSheep){
//         return 8
//     }else{
//         return sheep;
//     }
//  })
// console.log("đây là gì gì đó: ",newsheeps)


// //7.4 tang kich thuoc dan cuu len 50kg

// let sheepAfterMonth=[]

// for(let i=0;i<newsheeps.length;i++){
//     const sheep=newsheeps[i];
//     let newsheep=sheep+50;
//     sheepAfterMonth.push(newsheep)
// }
// console.log("sau 1 thang bay cuu da lon, và đây là kích thước của nó: ",sheepAfterMonth);

// //7.5 con cuu lon nhat sau 1 thang
// let maxSheep1=sheeps[0];
// console.log("gdjs:",maxSheep1);

// for (let i=1;i<sheepAfterMonth.length;i++){
//     const sheep=sheepAfterMonth[i];
//     if(sheep>maxSheep1){
//         maxSheep1=sheep;
//     }
// }
// console.log('con cuu lon nhat cua toi có kich thuoc', maxSheep1, 'hay thien no');


// const indexMaxSheep1=sheepAfterMonth.indexOf(maxSheep);
// let newsheeps1=sheepAfterMonth.map((sheep,index)=>{
//    if(index===indexMaxSheep1){
//        return 8
//    }else{
//        return sheep;
//    }
// })
// console.log("đây là gì gì đó: ",newsheeps1)


// //7.6 tang kich thuoc dan cuu len sau 3 thang


// for(let i=0;i<3;i++){
//     //tang kich thuoc dan cuu
//     console.log('month ',i+1);
//     let sheepsAfterMonth=[]
//     for (let i=0;i<newsheeps1.length;i++){
//         const sheep=newsheeps1[i];
//         let newsheep=sheep+50;
//         sheepsAfterMonth.push(newsheep)
//     }

// console.log("sau 3 thang bay cuu da lon, và đây là kích thước của nó: ",sheepsAfterMonth);

// //tim ra con lon nhat de thien no
// let maxSheep=sheeps[0];
// console.log("gdjs:",maxSheep);

// for (let i=1;i<sheepsAfterMonth.length;i++){
//     const sheep=sheepsAfterMonth[i];
//     if(sheep>maxSheep){
//         maxSheep=sheep;
//     }
// }
// console.log('con cuu lon nhat cua toi có kich thuoc', maxSheep, 'hay thien no');

// //cao long
// const indexMaxSheep1=sheepsAfterMonth.indexOf(maxSheep);
// newsheeps1=sheepsAfterMonth.map((sheep,index)=>{
//    if(indexMaxSheep1===index){
//        return 8
//    }else{
//        return sheep
//    }
// })
// console.log("đây là gì gì đó: ",newsheeps1);

// }


function findMaxSheep(sheeps){
let maxSheep=sheeps[0];

for (let i=1;i<sheeps.length;i++){
    const sheep=sheeps[i];
    if(sheep>maxSheep){
        maxSheep=sheep;
        }
    }
    return maxSheep;
}

const resetSheepByMaxsheep=(maxSheep,sheeps)=>{
    const indexMaxSheep=sheeps.indexOf(maxSheep);
    let newsheeps=sheeps.map((sheep,index)=>{
        if(index===indexMaxSheep){
        return 8
    }else{
        return sheep
    }  
})
    return newsheeps
}

const updateSheep50kg=function(sheeps){
    let sheepAfterMonth=[]
    for(let i=0;i<sheeps.length;i++){
        const sheep=sheeps[i];
        let newsheep=sheep+50;
        sheepAfterMonth.push(newsheep)
    }
    return sheepAfterMonth
}



let sheeps =[5,7,800,90,50,75]
console.log('day la dan cuu cua toi: ', sheeps);
// let maxSheep=findMaxSheep(sheeps)
// console.log('con cuu lon nhat cua toi có kich thuoc', maxSheep, 'hay thien no')

// // const newsheep=resetSheepByMaxsheep(maxSheep,sheeps)
// // console.log('dan cuu sau khi thien cua toi: ',newsheep);
// sheeps=resetSheepByMaxsheep(maxSheep,sheeps)
// console.log('dan cuu sau khi thien cua toi: ',sheeps);


// let sheepAfter1Month=updateSheep50kg(sheeps)
// console.log("sau 1 thang bay cuu da lon, và đây là kích thước của nó: ",sheepAfter1Month);

// let maxSheep1=findMaxSheep(sheepAfter1Month)
// console.log('con cuu lon nhat sau 1 tháng cua toi có kich thuoc', maxSheep1, 'hay thien no')


// let newSheep2=resetSheepByMaxsheep(maxSheep1,sheepAfter1Month)
// console.log('dan cuu sau khi thien cua toi: ',newSheep2);

for(let i=0;i<3;i++){
    console.log('============== tháng',i+1);
    maxSheep=findMaxSheep(sheeps)
    console.log('con cuu lon nhat cua toi có kich thuoc', maxSheep, 'hay thien no')
    sheeps=resetSheepByMaxsheep(maxSheep,sheeps)
    console.log('dan cuu sau khi thien cua toi: ',sheeps);
    sheeps=updateSheep50kg(sheeps)
    console.log("sau 1 thang bay cuu da lon, và đây là kích thước của nó: ",sheeps);
}
 const sum=sheeps.reduce((total,sheep)=>{
total=total+sheep
return total
 },0)
 console.log('sum: ',sum+2);
