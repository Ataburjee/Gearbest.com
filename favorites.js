let fromFav = JSON.parse(localStorage.getItem("favorites"))
console.log(fromFav)
let cartArr = []

function displayFun(data){
  data.forEach(function(el){
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.img
    img.style.width = "100%"
    let name = document.createElement("p")
    name.innerText = el.name
    name.style.fontSize = "14px"
    name.style.marginTop = "10px"
    let price = document.createElement("h3")
    price.innerText = "$"+el.price
    price.style.color = "#f30240"
    let box = document.createElement("div")
    let cart = document.createElement("img")
    cart.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAn1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqJAAUEQD/2QAAAABJPgAAAAAAAAAAAAD/2gD/2gAAAAAAAAD/2gAAAAAAAAAAAAD/2QAAAAAAAAD/2wAAAAAAAAD/2QAAAAD/4wAAAAD/2gD51ADQsQCiigB0YwBGOwCQauaIAAAALnRSTlMA09hV4UL48rFIE/zazLuVfXZJIR39++3r5+fk29TJqKakm46JgG9lW1pNNjISfz/FPQAAALRJREFUKM+dz1cKwzAQRdHn7vRip/feX+r+1xaDLDx2Igi5XyMODCP8mcWkvpkYwVDIg4mabBhkxs9qinx+qZxe0ka+Mn01zNkq0JmWvmJwFU0Ah6GiIzuSekCLa0UReRM0BRrcQRXwLmgB1OmlVOND0AaoMk5pyaegPVCpIG3Ll6ATYtqaPHYFXZJ3mH2+2Aq6ekF8D79UGrklPTu27Qgakq6ex6QlyBVk56kdBNnCqlpo7g1Gxypv685O3AAAAABJRU5ErkJggg=="
    cart.addEventListener("click",function(){
        event.preventDefault()
        if(favFun(el.name)===true){
            cartArr.push(el)
            console.log(cartArr,"in the favorite")
            localStorage.setItem("cartPage",JSON.stringify(cartArr))
            alert("Product added to Cart succesfully")
        }else{
            alert("Already present in the Cart")
        }
    })
    let dele = document.createElement("img")
    dele.style.width = "16%"
    dele.src = "https://e7.pngegg.com/pngimages/891/322/png-clipart-rubbish-bins-waste-paper-baskets-computer-icons-brilliant-android-delete-key-rectangle-logo-thumbnail.png"
    dele.addEventListener("click",function(){
        deleteFun(el.name)
    })
    box.append(cart,dele)
    box.style.padding = "10px"
    box.style.marginTop = "10px"
    div.append(img,name,price,box)
    div.style.padding = "10px"
    div.style.marginTop = "26px"
    document.querySelector(".favorites").append(div)
  })
}
displayFun(fromFav)

function favFun(name){
    for(let i=0 ;i<cartArr.length ;i++){
        if(name===cartArr[i].name){
            return false;
        }
    }return true ;
}

function deleteFun(name){
   let filtered = fromFav.filter(function(el){
      return el.name!==name ;
   })
   document.querySelector(".favorites").innerHTML = ""
   displayFun(filtered)
}

document.querySelector("#signIn").addEventListener("click",signinFun)
    function signinFun(){
        window.location.href="/signin.html"
    }
    document.querySelector("#favourites").addEventListener("click",favoriteFun)
    function favoriteFun(){
        window.location.href="/favorites.html"
    }
    document.querySelector("#cartPage").addEventListener("click",cartFun)
    function cartFun(){
        window.location.href="/cart.html"
    }