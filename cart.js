let fromFavor = JSON.parse(localStorage.getItem("cartPage"))
 console.log(fromFavor,"in the cart")
displayCart(fromFavor)
function displayCart(data){
    data.forEach(function(el){
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        let img = document.createElement("img")
        img.src = el.img
        td1.append(img)
        td5 = document.createElement("td")
        td5.innerText = el.name
        let td2 = document.createElement("td")
        td2.innerText ="$" + el.price
        let td3 = document.createElement("td")
        let box = document.createElement("div")
        let box2 = document.createElement("div")
        box2.setAttribute("class","count")
        box2.innerText = 1
        let box1 = document.createElement("div")
        box1.innerText = "-"
        box1.addEventListener("click",function(){
            decreaseFun(el.price)
        })
        let box3 = document.createElement("div")
        box3.innerText = "+"
        box3.addEventListener("click",function(){
            increaseFun(el.price)
        })
        box.append(box1,box2,box3)
        box.style.display = "flex"
        td3.append(box)
        let td4 = document.createElement("td")
        let box4 = document.createElement("div")
        box4.setAttribute("class","subtotal")
        box4.innerText  = "$"+el.price
        box4.style.color = "red"
        td4.append(box4)
        // let td5 = document.createElement("td")

        tr.append(td1,td5,td2,td3,td4)
        document.querySelector("tbody").append(tr)
    })
}
let count = 1

function decreaseFun(price){
    if(count<=1){
        count = 1
    }else{
        count--
    }
    document.querySelector(".count").innerText = count
    let x =+ count*price
     localStorage.setItem("totalPrice",x)
     document.querySelector(".check>h3:first-child").innerText = x
     document.querySelector(".check>h2").innerText = x
    document.querySelector(".subtotal").innerText = "$"+x
}
function increaseFun(price){
    count++
    document.querySelector(".count").innerText = count
    let x =+ count*price
     localStorage.setItem("totalPrice",x)
     document.querySelector(".check>h3:first-child").innerText = x
     document.querySelector(".check>h2").innerText = x
    document.querySelector(".subtotal").innerText ="$"+x
}
document.querySelector(".checkout>h1").addEventListener("click",function(){
    window.location.href="cartnext.html"
})