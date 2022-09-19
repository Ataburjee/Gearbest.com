let miArr = ["<","https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_thumb-v1/ed230b4b2700.jpg",
         "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_thumb-v1/461e1ef0b023.jpg",
         "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_thumb-v1/11d36e31e403.jpg",
         "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_thumb-v1/d2016150a60d.jpg",
         "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_thumb-v1/575635dba604.jpg",
         ">"
        ]
for(let i=0 ;i<miArr.length ;i++){
if(i==0 || i==6){
    let img = document.createElement("div")
    img.innerText = miArr[i]
    img.style.fontSize = "50px"
    document.querySelector(".slideChange").append(img)
    
}else{
    let img = document.createElement("img")
    img.src = miArr[i]
    img.style.width = "15%"
    if(i==1){
        img.style.border = "1px solid black"
    }else{
        img.style.border = "2px solid yellow"
    }
    
    document.querySelector(".slideChange").append(img)
}  
}
let flex = document.querySelector(".slideChange")
flex.style.display = "flex"
flex.style.justifyContent = "space-between"
flex.style.marginTop = "20px"

let social = [
    "https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1Lp0Coz1D82wxilwE0w93-eZxeNb8tr5I4JuTZZt2jHSAEk6U6CDfQbPPskImIjKkS0&usqp=CAU",
    "https://www.kindpng.com/picc/m/145-1450270_transparent-business-clipart-social-media-logo-whatsapp-hd.png",
    "https://w7.pngwing.com/pngs/820/112/png-transparent-social-media-computer-icons-youtube-plant-matter-bistro-social-network-youtube-logo-text-trademark-logo.png",
    "https://cdn-icons-png.flaticon.com/512/174/174863.png",
    "https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-56-512.png",
    "https://i.dlpng.com/static/png/5336096-snapchat-logo-png-snapchat-icons-black-and-white-transparent-snapchat-logo-transparent-840_882_preview.png",
    "data:image/png;base64,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", 
]
for(let i=0 ;i<social.length ;i++){
    let box = document.createElement("div")
    let img = document.createElement("img")
    img.src = social[i]
    box.append(img)
    document.querySelector(".social").append(box)
}