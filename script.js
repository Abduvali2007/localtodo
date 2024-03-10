const email=document.querySelector(".email")
const pass=document.querySelector(".password")
const btn=document.querySelector(".add")
const list=document.querySelector(".list")
const img =document.querySelector(".img")


getTodo();
btn.addEventListener("click",()=>{

    btn.style.width = "200px"
    let obj ={
        email: email.value ,
        pass: pass.value ,
        img: img.value,
    };
    let data =JSON.parse(localStorage.getItem("todo")) ||[];
    data.push(obj);
    localStorage.setItem("todo",JSON.stringify(data));
    getTodo();
})


function getTodo() {
    list.innerHTML ="";
    let newData = JSON.parse(localStorage.getItem("todo")) || [];
    newData.forEach((el) => {
        let emailTitle = document.createElement("li");
        let passwordTitle = document.createElement("li")
        let imgTitle = document.createElement("img")
        let div = document.createElement("div")
        list.append(div);
        div.append(emailTitle);
        div.append(passwordTitle);
        div.append(imgTitle);
        emailTitle.innerText =`${el.email}`
        passwordTitle.innerText =`${el.pass}`
        imgTitle.src =`${el.img}`
    });
    
}