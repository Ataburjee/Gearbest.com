let signinArr = JSON.parse(localStorage.getItem("signupPage"))

document.querySelector("form").addEventListener("submit",signinFun)
function signinFun(){
    event.preventDefault()
    let signinObj = {
        email : form.email.value,
        pass : form.pass.value,
    }
    for(let i=0 ;i<signinArr.length ;i++){
        
        if(signinArr[i].email===signinObj.email  &&  signinArr[i].pass===signinObj.pass){
            alert("Sign In successfully")
            window.location.href="/index.html"
        }else{
            alert("User Id or Password incorrect !")
        }
    }
}

let tick = document.querySelector("#tick")
tick.addEventListener("click",tickFun)
function tickFun(){
            let img = document.createElement("img")
            img.src = "https://www.freeiconspng.com/uploads/simple-check-mark-icon-14.png"
            img.style.height = "100%"
            document.querySelector("#tick").append(img)
            tick.style.backgroundColor = "yellow"
}

document.querySelector(".res").addEventListener("click",myFun)
function myFun(){
    event.preventDefault()
    window.location.href="signup.html"
}