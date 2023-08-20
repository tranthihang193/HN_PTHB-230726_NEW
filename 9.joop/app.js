//let year=prompt("nhap nam");

//if(year%4==0){
//    if(year%100!=0){
//            console.log(year,'la nam nhuan');
//        }else{
//            if(year%400!==0){
//                console.log('khong phai la nam nhuan');
//            }
//            else{
//                console.log(year,'la nam nhuan');
 //               }
//        } 
// }else{
//    console.log(year,'khong phai la nam nhuan');
//}



// luyen tap voi cau truc if/else
//let input=prompt('What is the "offical" name of JavaScript');

//if(input=="ECMAScript"){
 //   console.log('Right');
//}else{
//    console.log("Didn't know");
//}




//luyen tap vơi if...else if
//let name=prompt('nhap ten');
//if(name=='Admin'){
 //   let password=prompt('nhap mat khau');
 //   if(password=='TheMaster'){
 //       console.log('Welcome');
  //  }else if(password==null){
 //       console.log('canceled');
  //  }else{
  //      console.log('Wrong password');
   // }
//}else if(name==null){
//    console.log('thoat');
//}else{
//    console.log("I don't know you");
//}


//luyen tap voi switch
//let browser=prompt('input');
//switch(browser){
 //   case'Edge':
 //       alert("you've got the Edge");
 //       break;
 //   case'Chrome':
  //  case'Firefox':
  //  case'Safari':
  //  case'Opera':
  //      alert("Okey we support these browsers too");
  //      break;
  //  default:
  //      alert("we hope tha this page looks ok!");
//}


//chi so can nang cua co the
//let weight=prompt('nhap can nang');
//let height=prompt('nhap chieu cao');
//let bmi=weight/(height^2);
//if(bmi<18.5){
 //   alert('can nang thap gay');
//}else if(bmi<25){
 //   alert('Binh thuong');
//}else if(bmi<25){
//    alert('thua can');
//}else if(bmi<30){
//    alert('tien beo phi');
//}else if(bmi<35){
 //   alert('beo phi do 1');
//}else if(bmi<40){
 //   alert('beo phi do 2');
//}else{
 //   alert('beo phi do 3');
//}


//tinh so ngay trong mot thang

let thang=prompt('nhap thang')
switch(thang){
    case'1':
    case'3':
    case'5':
    case'7':
    case'8':
    case'10':
    case'12':
        console.log('thang',thang,'có 31 ngày');
        break;
    case'2':
        console.log('thang',thang,'co 28 hoac 29 ngay');
        break;
    default:
        console.log('thang ',thang,'co 30 ngay');
    }