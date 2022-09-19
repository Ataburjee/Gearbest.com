let products = [
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_thumb_220-v1/9cddbe59a65e.jpg",name:"ENGWE Bike C20 20inch Adult Electric Bike 36V10A City Bike..",price:"1299.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/d429b1e24825.jpg",name:"DOOGEE S97 Pro Global Bands IP68&IPIP69K 8GB",price:"289.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/d9e75c2e41fd.jpg",name:"DOOGEE V10 Global Bands Dual 5G IP68&IP69K 8GB",price:"275.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/ceced3aa3e7c.jpg",name:"Blackview BV8800 Global Bands 8GB 128GB Helio G96",price:"299.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_thumb_220-v1/5ef9d5b1a9a0.jpg",name:"Ulefone Power Armor 13 Global Version 13200mAh",price:"339.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v3/0a67fcdfec3b.jpg",name:"FLSUN SR Super Racer 3D Printer Fast 200mm/s FDM",price:"435.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/eba1ad7b3fd7.jpg",name:"FLSUN Q5 3D Printer 32Bit Mainboard Titan Extruder",price:"239.00 "},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_thumb_220-v1/42405dc55cb8.jpg",name:"OUKITEL WP15 5G Global Bands 15600mAh Battery",price:"329.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/0b0ff330204b.jpg",name:"BMAX MaxPad I11 UNISOC T618 Octa Core 8GB RAM",price:"172.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/d9e6c7ef810e.jpg",name:"Samebike MY-SM26 Electric Bike 26 Inch Tires 350W Mot",price:"899.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v1/c4ea52da5c8e.jpg",name:"FLSUN QQ-S-Pro Delta 3D Printer 32-bit Motherboard",price:"289.00"},
    {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/839d27b14964.jpg",name:"FLSUN Q5 3D Printer 32Bit Mainboard Titan Extruder",price:"239.00"},
    
]
let favArr = []
products.forEach(function(el){
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.img
    img.style.width = "100%"
    let name = document.createElement("p")
    name.innerText = el.name
    name.style.fontSize = "14px"
    name.style.marginTop = "10px"
    let box = document.createElement("div")
    let price = document.createElement("h3")
    price.innerText = "$"+el.price
    price.style.color = "#f30240"
    let fav = document.createElement("img")
    fav.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAA81BMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGxsYTExMAAAAAAADg4OAAAADf39/g4OAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh4eEAAADi4uIAAADt7e3d3d1iYmLf39+RkZEAAADg4OAAAAArKyvf398QEBCoqKglJSXg4OAXFxfg4OAKCgohISHf39/f398dHR3f398AAADHx8cAAAAAAABSUlIvLy8AAAAAAAD////g4OAAAACSkpLV1dW0tLSHh4dycnJUVFRDQ0NMKKmhAAAASHRSTlMA+vTB+ZAoIAwF/NummWpAM/z89vHw5OHc0Me7mIuHc3BmU0tHPjwiFA37+/r47Ovr5drTz8C0s62to6GIgoB3ZF1WThsZEwOBbnz7AAAA+klEQVQoz73Q1W7DQBRF0WPm2GFsOCkzM7c+5f//msa3ELvtW6Wsh5krbc2MNJg5y9BUakNgqFHVDGta+kUK36coDr7KwGXTRNQmWeo6d1cN6iHEgsquDJdUIhkMbtgytOnjQ6f3OdTZkd3j+L5VjbdGGB2Uq8eLAHpsJMUh7b04cSJrbdJMluQp8iJOawEWVTmlcCeT1oGQdSQ0LscZ8wg4JylHN59NJpVbSY7Ht3Qpo5kcEqbCl1Q6C1ixJciVfPguNYNrqf89nLaVI6oRUvbJZylLu1RCZJy6fH2M4/w29T5+uC6w8LSqszLGLzebnAhs/OXc03P4r3d0M0A98TPbIwAAAABJRU5ErkJggg=="
    fav.addEventListener("click",function(){
        event.preventDefault()
        if(favFun(el.name)===true){
            favArr.push(el)
            console.log(favArr,"in the productPage")
            localStorage.setItem("favorites",JSON.stringify(favArr))
            alert("Product added to favorite succesfully")
        }else{
            alert("Already present in the favorite")
        }
    })
    fav.style.height = "50%"
    box.append(price,fav)
    box.style.display = "flex"
    box.style.justifyContent = "space-between"
    box.style.alignItems = "center"
    div.append(img,name,box)
    div.style.padding = "10px"
    div.style.marginTop = "26px"
    document.querySelector(".products").append(div)
})

function favFun(name){
    for(let i=0 ;i<favArr.length ;i++){
        if(name===favArr[i].name){
            return false;
        }
    }return true ;
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