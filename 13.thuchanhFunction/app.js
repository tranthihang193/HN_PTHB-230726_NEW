//bai 1
function footToMeter(foot){
    return foot * 0.305
}
let meter=footToMeter(10)

function metToFeet(meter){
    return meter *3.279
}

let foot= metToFeet(30)


//bai 2
let helloRA=()=>{
    console.log('xin chào Rikkei Academy');
}
helloRA()


//bai 3
const square = (number)=>{
    return number * number
}

//bai 4
const centuryFromYear = (year)=>{
    const century = year/100
    return Math.ceil(century)
}
let century = centuryFromYear(1993)
console.log("century: ",century);

//bài 5
const splitString = (string)=>{
    let lengthString = string.length;
    if(lengthString<15){
        return string;
    }
    const spliceStr= string.slice(0,15)
    return spliceStr + "..."
}
const string = splitString('ghjkghjkghjkghjhjk')
console.log("xuat ra chuoi: ",string)



//bai 6
function firstCharUpperCase(string){
    let firstChar = string[0].toUpperCase();
    let speedString=string.slice(1).toLowerCase()
    return firstChar + speedString;
}
const result= firstCharUpperCase('rikkeiJHJ')
console.log("chu cai dau da thay doi thanhin hoa: ",result);


//bai 7

function findMax(arraynumber) {
    let max = arraynumber[0];
    for (let i=0;i<arraynumber.length;i++){
        const number = arraynumber[i];
        if(number>max){
            max=number;
        }
    }
    return max
}
let maxNumber = findMax([1,5,3,7,8,2])
console.log("so lon nhat la: ",maxNumber);

//bài 8: kiem tra so chan le, nguyên tố, hoàn hảo
function laChanle(number) {
    if (number%2===0){
        return (number, "la so chẵn")
    }else{
        return (number, "la so le")
    }
}


function laSonguyento(number){
    let checkSonguyento = true
    if (number<2){
        return false
        return (number,"khong phai la so nguyen to")
    }else{
        for (let i=2;i<number;i++){
            if(number% i===0){
                checkSonguyento = false
                break
            }
        }
    }
    if (checkSonguyento){
        return true
        return (number, " la so nguyen to")
    }
    return false
    return (number, "khong phai la so nguyen to")
}

const laSohoanhao=(number) =>{
    let uocCuanumber=[]
    for (let i = 0; i<number; i++){
        if(number % i===0){
            uocCuanumber.push(i)
        }
    }
    let tongUoc = 0;

    for(let i = 0; i< uocCuanumber.length; i++){
        const uoc= uocCuanumber[i];
        tongUoc = + uoc;
    }
    if(tongUoc === number){
        return (number, "la so hoan hao")
    }
    return (number, "la so meo mo")
}
let value = laSohoanhao(8128)

function main(number) {
    let checkChanle = laChanle(number)
    console.log(number,checkChanle);
    let checkSonguyento = laSonguyento(number)
    console.log(number,checkSonguyento);
    let checkHoanhao = laSohoanhao(number)
    console.log(number,checkHoanhao);
}
main(8128)

//bai 9 trung binh cong
function trungBinhCongCuaMangSo(arraynumber) {
    let tongCuaArray = 0
    for (let i=0;i<arraynumber.length;i++){
        const number = arraynumber[i];
        tongCuaArray += number
    }
    return tongCuaArray / arraynumber.length
}
console.log(trungBinhCongCuaMangSo([3,6,8]));


// bai 10: nhap n, in ra n số nguyên tố tăng dần
function logSoNguyenTo(number){
    for(let i=0 ; i< number; i++){
        const checkNumber = laSonguyento(i)
        if(checkNumber){
            console.log(i);
        }
    }
}
logSoNguyenTo(23)
