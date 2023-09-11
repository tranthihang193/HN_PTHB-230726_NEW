
// //bai 1
// function sum(a,b,c){
//     return a+b+c;
// }

// // thực thi hàm
// let sinh = prompt("nhap diem toan")
// let ly = prompt("nhap diem lý")
// let hoa = prompt("nhap diem hóa")
// const tongDiem = sum(Number(sinh),Number(ly),Number(hoa))
// const tbc = tongDiem/3
// alert("Diem trung binh = " + tbc +  "  Tong diem = " + tongDiem)

//bài 2
// function doiCSangF(c){
//     let f = c*1.8+32;
//     return f;
// }

// let c = prompt("nhap vào do C: ")
// alert(c + " do c doi sang do f là "+doiCSangF(c))


//BAI DONG HO
// function time() {
//     let date = new Date()
//     let hour = date.getHours();
//     let minute=date.getMinutes();
//     let second = date.getSeconds();
//     setTimeout("time()",1000);
//     document.getElementById("digital-clock").innerHTML = hour + ": "+ minute + ": " + second;
// }
// time();

// let id = setInterval(()=>{
//     console.log("sau 5 giây");
// },5000)
// clearInterval(id)




//TẠO ĐỒNG HỒ ĐẾM NGƯỢC
let thoiluong = 0;
function thoigian(x){
    thoiluong=x;
    //dem ngược
    demnguoc();
}
function demnguoc(){
    thoiluong--;
    sophut = Math.floor(thoiluong / 60);
    sogiay = thoiluong % 60;
    document.getElementById("sophut").innerHTML=sophut;
    document.getElementById("sogiay").innerHTML=sogiay;
    if(thoiluong>0){
        setTimeout(demnguoc,1000);
    }else{
        document.getElementById("hetgio").style.display= "block"
    }
}
const btn1=document.getElementById("btn1");
btn1.addEventListener("click",demnguoc);

const btn2=document.getElementById("btn2");
btn2.addEventListener("click",demnguoc);

const btn3=document.getElementById("btn3");
btn3.addEventListener("click",demnguoc);

const btn4=document.getElementById("btn4");
btn4.addEventListener("click",demnguoc);

const btn5=document.getElementById("btn5");
btn5.addEventListener("click",demnguoc);
