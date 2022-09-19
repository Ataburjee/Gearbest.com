let form = document.querySelector("form")
form.addEventListener("submit",signupFun)
let signupArr =JSON.parse(localStorage.getItem("signupPage")) || []
function signupFun(){
    event.preventDefault()
    let signupObj = {
        email : form.email.value,
        pass : form.pass.value,
        repass : form.repass.value
    }
    if(signupObj.pass != signupObj.repass){
        alert("Password mismatch")
    }else{
        if(checkEmailPass(signupObj.email)===true){
            signupArr.push(signupObj)
            alert("Signup Successfull")
            localStorage.setItem("signupPage",JSON.stringify(signupArr))
            
        }else{
            alert("email is already taken")
        }
    }
}

function checkEmailPass(email){
    let filter = signupArr.filter(function(el){
        return el.email===email
    })
    if(filter.length>0){
        return false;
    }else{
        return true ;
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

document.querySelector("#head>h3:first-child").addEventListener("click",myFun)
function myFun(){
    event.preventDefault()
    window.location.href="signin.html"
}