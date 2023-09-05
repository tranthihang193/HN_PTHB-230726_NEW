
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
function time() {
    let date = new Date()
    let hour = date.getHours();
    let minute=date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digital-clock").innerText = hour + ": "+ minute + ": " + second;
}
let id = setInterval(()=>{
    console.log("sau 5 giây");
},5000)
clearInterval(id)