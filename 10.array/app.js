
//let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
//let str=myColor.join(',');
//console.log(str);


//bai 2
// let number=245468
// let str=number.toString();
// console.log("so vua nhap chuyen thanh chuoi:",str);
// let listNumber=str.split("");
// console.log("chuyen chuoi thanh so:", listNumber);
// let result=[]

// for(let i=0;i<listNumber.length;i++){
//     let currentElement= listNumber[i];
//     let numberCurrent=parseInt(currentElement)
//     let nextElement=listNumber[i+1]
//     let numberNext=parseInt(nextElement)

//     let checking=numberCurrent%2===0 && numberNext%2===0
//     result.push(numberCurrent)

//     if(checking){
//         result.push("-")
//     }
// }
// console.log(result.join(''));


//bai 3
// let str='Nhap cHu IN hoa và THUong';
// let strArray=str.split("")
// console.log("chuoi vua nhap:",strArray);

// let result="";

// let temp=strArray.map((item)=>{
// let hoa=item.toLowerCase()
// let thuong=hoa===item
// if(thuong){
//     return item.toUpperCase()
// }else{
//     return item.toLowerCase()
// }})
// console.log(temp.join(''));


// let tu=prompt('nhap tu can tra: ')
// let english=["school","hello","bye"]
// let vietnam=["truong","xin chao","tam biet"]

// let temp=english.map((item)=>{
// if(item==tu){
//     console.log(vietnam.push())
// }
// else{
//     console.log('khong co')
// }})


// let arrayInt=[2,4,5,7,8];
// console.log(arrayInt);
// let  newarrayInt=arrayInt.filter((item,index,Array)=>{
//     return item %2===0;
    
// }  )
    
// console.log(newarrayInt);

// function sumArray(newarrayInt){
//     sum = 0;
//     newarrayInt.map(function(value){
//         sum += value;
//     });
     
//     return sum;}
// console.log(sumArray(newarrayInt));

// let  newarrayInt1=arrayInt.filter((item,index,Array)=>{
//     return item %2!==0;  
// }  )

// console.log(newarrayInt1);
// function sumArray(newarrayInt1){
//     sum = 0;
//     newarrayInt1.map(function(value){
//         sum += value;
//     });
     
//     return sum;}
// console.log(sumArray(newarrayInt1));



// for (let i=0;i<arrayInt.length;i++)
//  if(arrayInt[i]<arrayInt[i+1])


