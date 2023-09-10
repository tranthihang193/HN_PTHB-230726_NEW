const btn = document.getElementById("btn");
const btnGetLocal = document.getElementById("btn-getLocal");
const btnD = document.getElementById("btn-D-local");
const btnClear = document.getElementById("btnClear");
btn.addEventListener("click",()=>{
    localStorage.setItem("user","pitter");
});

btn.addEventListener("click",()=>{
    const obj = {
        sayHi: "hi"
    };
    localStorage.setItem("user",JSON.stringify(obj));
});

btnGetLocal.addEventListener("click",()=>{
    const user = localStorage.getItem("user");
    console.log("sjdnf ",JSON.parse(user));
});
btnClear.addEventListener("click",()=>{
    localStorage.clear();
})

// const addSession = document.getElementById("addSession");
// addSession.addEventListener("click",()=>{
//     sessionStorage.setItem("user","text");
// })

