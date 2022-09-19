    let CCANarr = ["Category","COUPON","SUPER DEALS","APP ONLY","NEW ARRIVALS"]
    for(let i=0 ;i<CCANarr.length ;i++){
        let h3 = document.createElement("h3")
        h3.innerText = CCANarr[i]
        if(i==0){
            h3.style.color = "white"
            h3.style.backgroundColor = "black"
        }else{
            h3.style.backgroundColor = "#ffda00"
        }
        document.querySelector("#CCAN").append(h3)
    }

    let  categoryWiseArr = ["Consumer Electronics","Industrial & Scientific","Cell Phones & Accessories","Appliances","Outdoors, Fitness & Sports","Computers, Tablets & Office","Health & Personal Care","Home Improvement & Tools","Drones, Toys & Hobbies","Home & Garden","Motor & Car Electronics","Mens Fashion","Watches & Jewelry","Gearbest Promotion"]
    for(let i=0 ;i<categoryWiseArr.length ;i++){
        let p = document.createElement("p")
        p.innerText = categoryWiseArr[i]
        document.querySelector(".categoryWise").append(p)
    }

    let images2Arr = ["https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/L900-230X120-en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/C230X120-en.jpg","https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg","https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg"]
    for(let i=0 ;i<images2Arr.length ;i++){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = images2Arr[i]
        img.style.width = "100%"
        div.append(img)
        document.querySelector(".images2").append(div)
    }

    let collectionArr = [
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16407/goods_thumb_220-v3/3dc4fda303b3.jpg",name:"Asseo Go Store"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16519/goods_thumb_220-v1/e9c161b9300d.jpg",name:"Sky Store"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v7/b87b9802f084.jpg",name:"Xiami Laptop & Pad"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16419/goods_thumb_220-v5/2bade2f7be7f.jpg",name:"Tronxy 3D Printer"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16463/goods_thumb_220-v1/fa2088fa6aaa.jpg",name:"Partaker Mini PC"}
    ]
    collectionArr.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.img
        let name = document.createElement("div")
        name.innerText = el.name
        name.style.padding = "10px"
        div.append(img,name)
        document.querySelector(".collection").append(div)
    })

    superDealsArr = [
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16420/goods_thumb_220-v3/d5477f83e8f5.jpg",name:"360 Rotating Flying Ball Globe Shape Magic",Oprice:"24.43",price:"17.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_thumb_220-v1/d68f68d9b088.jpg",name:"KINGROON KP3S 3D Printer High Precision",Oprice:"339.00",price:"159.00"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/eba1ad7b3fd7.jpg",name:"FLSUN Q5 3D Printer 32Bit Mainboard Titan Extruder",Oprice:"299.99",price:"229.00"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16409/goods_thumb_220-v1/335a2035c571.jpg",name:"T6 LED Bicycle Light Front USB Rechargeable MTB",Oprice:"19.99",price:"15.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16481/goods_thumb_220-v1/75a3326fa0e3.jpg",name:"Lenovo HX106 Bluetooth Earphone Pro Ear Hook",Oprice:"22.50",price:"15.75"}
    ]
    superDealsArr.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.img
        let name = document.createElement("p")
        name.innerText = el.name
        name.style.fontSize = "14px"
        name.style.padding = "10px"
        let box = document.createElement("div")
        box.style.display = "flex"
        box.style.padding = "10px"
        let RRR = document.createElement("p")
        RRR.innerText = "RRR :"
        let Oprice = document.createElement("p")
        Oprice.innerText = "$"+el.Oprice
        Oprice.style.textDecoration = "line-through"
        box.append(RRR,Oprice)
        box.style.opacity = ".5"
        let price = document.createElement("h3")
        price.innerText = "$"+el.price
        price.style.padding = "10px"
        price.style.color = "#f30240"
        div.append(img,name,box,price)
        document.querySelector(".superDeals").append(div)
    })

    let new2Arr = [
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16542/goods_thumb_220-v1/185db9573c5f.jpg",Oprice:"44.99",price:"49.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16549/goods_thumb_220-v1/d87e35c0597d.jpg",Oprice:"1099.00",price:"309.80"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16550/goods_thumb_220-v1/b4a76d58b256.jpg",Oprice:"29.99",price:"26.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16522/goods_thumb_220-v1/bad4da8f65a9.jpg",Oprice:"312.00",price:"156.00"}
    ]
    new2Arr.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.img
        let box = document.createElement("div")
        box.style.display = "flex"
        box.style.padding = "10px"
        box.style.opacity = ".5"
        box.style.justifyContent = "center"
        let RRR = document.createElement("p")
        RRR.innerText = "RRR :"
        let Oprice = document.createElement("p")
        Oprice.innerText = "$"+el.Oprice
        Oprice.style.textDecoration = "line-through"
        box.append(RRR,Oprice)
        let price = document.createElement("h3")
        price.innerText = "$"+el.price
        price.style.padding = "10px"
        price.style.color = "#f30240"
        div.append(img,box,price)
        document.querySelector(".new2").append(div)
    })

    recommendedForYouArr = [
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/ed230b4b2700.jpg",name:"Original Xiaomi Mi Band 7 / 7 NFC Smart Wristband 1.62 inch...",price:"48.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6926471294045319168/16529/goods_img-v1/8ad475fc01f3.jpg",name:"WT09 Active Noise Cancelling Headphones Bluetooth 5.1...",price:"18.72"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img-v1/22549f61229b.jpg",name:"Original Xiaomi Smart Magic Cube Bluetooth 3D Dynamic...",price:"19.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16539/goods_img-v1/7a6e1bdf0f46.jpg",name:"Haylou RS4 smart watches Global version Blood oxygen...",price:"49.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v3/5b9d1b9f7836.jpg",name:"ENGWE Bike C20 PRO Adult Electric Bike 36V19.2AH City...",price:"1000.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v1/126354806df6.jpg",name:"Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For",price:"2.59"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",name:"Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell...",price:"107.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16545/goods_img-v3/49bbbbea2c5b.jpg",name:"Xiaomi Fan 2 Smart Standing double layer fan blade Portable...",price:"69.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v3/d238ad6a3d2a.jpg",name:"2022 New Smartphone 7.3 Inch MIX4 72MP Camera Unlock...",price:"114.30"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6901174613791928320/16502/goods_img-v3/31d0d9d6c843.jpg",name:"A9 Mini WiFi Video Surveillance 1080p HD Infrared Night Vision...",price:"10.68"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16519/goods_img-v1/ad5af71dbbf9.jpg",name:"WalkingPad R2 Treadmill Smart APP LED Touch Panel Remote...",price:"585.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16488/goods_img-v1/78ad914ae7ca.jpg",name:"4-color TFT screen Finger Clip Type Oximeter Pulse Oximetry...",price:"15.92"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img-v3/a06e3d5ad873.jpg",name:"Original Xiaomi Backpack 7L/10L/15L/20L Travel Light...",price:"13.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16488/goods_img-v5/b1790ebe72cd.jpg",name:"Xiaomi Redmi Buds 3 Lite TWS Bluetooth 5.2 Earphone...",price:"20.86"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16531/goods_img-v1/ea9ddbe7643e.jpg",name:"Xiaomi 2022 Bluetooth 5.0 Headsets Wireless Earphone",price:"9.90"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6904007303549349888/16474/goods_img-v1/394534e30d4e.jpg",name:"QIDI TECH X-MAX Large Size Intelligent Industrial Grade 3D...",price:"949.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866331933228593152/16418/goods_img-v1/42f52c167490.jpg",name:"Yeelight 1SE E27 6W RGBW AC 100 - 240V Smart LED Bulb...",price:"24.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16508/goods_img-v1/83e81faaf67b.jpg",name:"V9 Wireless Bluetooth CSR V4.1 Headset Sports Headphone...",price:"11.90"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16486/goods_img-v1/965097e8a620.jpg",name:"Aqara Smart Temperature Humidity Sensor Zigbee...",price:"17.99"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16456/goods_img-v1/937ce184d834.jpg",name:"Midea S8+ Robot Vacuum Cleaner for Home Electrolysis...",price:"1260.23"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16498/goods_img-v5/eca3dcc2ab20.jpg",name:"L900 PRO 5G WIFI FPV Foldable GPS RC Drone Quadcopter with...",price:"86.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_img-v1/8fc8853ff3b3.jpg",name:"Xiaomi Redmi Airdots 3 TWS wireless Bluetooth 5.2...",price:"19.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16516/goods_img-v3/ce8cec017eca.jpg",name:"Original Xiaomi Mitu Cubes Spinner Finger Bricks...",price:"9.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_img-v5/2f380d04f8f3.jpg",name:"Original Xiaomi Mi Airdots Air 2 SE TWS Bluetooth Earphone",price:"25.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16204/goods_img-v1/95b7727db8f7.jpg",name:"Mijia Honeywell Fire Alarm Smoke Detector Sensor Audible",price:"39.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16417/goods_img-v3/21ff9307e5ee.jpg",name:"Smart Watch Men 400Mah Big Battery Music Play Fitness",price:"33.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v2/9b1ec073177c.jpg",name:"Finishing Fading Blending Professional Hair Trimmer for...",price:"14.27"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6905960412823613440/16538/goods_img-v5/cb7d91b7d1ad.jpg",name:"Teclast T40 Pro 10.4 Tablet 8GB RAM 128GB ROM UNISOC T618...",price:"201.59"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6907015762637156352/16509/goods_img-v3/64a2a64125fd.jpg",name:"LED Night Light with Smart Sensor Dusk to Dawn Sensor",price:"5.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6908377430696849408/16532/goods_img-v1/bf4080b95b17.jpg",name:"Smartphone Android 16GB 512GB Celulares Octa Core H...",price:"178.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16499/goods_img-v5/d57f7bd6e694.jpg",name:"Original External SSD 2TB 1TB 4TB Mobile Solid State Hard...",price:"66.58"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_img-v2/a50fc3341fef.jpg",name:"M11 Ultra Smartphone 16GB+1TB 24+48MP Global...",price:"114.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16487/goods_img-v1/26ff9a54dea9.jpg",name:"Smartphone S22 Ultra 5G Cellular 6.8 Inch 6800mAh...",price:"119.90"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16504/goods_img-v3/36c5cb490789.jpg",name:"Electronic Chip Hip Hop T Shirt Men Women 3D Machine...",price:"19.59"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16535/goods_img-v1/8885f332f8c5.jpg",name:"Xiaomi Mi Band 7 Smart Bracelet 6 Color AMOLED...",price:"52.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v2/30f912d20659.jpg",name:"RUBF180 U Shape Electrical Shiatsu Back Neck Shoulder...",price:"49.73"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",name:"Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell...",price:"107.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16498/goods_img-v5/a67acb1b17db.jpg",name:"L900 PRO 5G WIFI FPV Foldable GPS RC Drone Quadcopter with...",price:"98.41"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/21342f2b52a3.jpg",name:"Finishing Fading Blending Professional Hair Trimmer for...",price:"15.15"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16045/goods_img-v1/ee513b994d82.jpg",name:"Oclean Brush Head Replacements...",price:"31.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16389/goods_img-v1/21e7018973c0.jpg",name:"Abhoth Running Shoes Comfortable Light Casual Men...",price:"32.40"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16101/goods_img-v9/b572e51099b7.jpg",name:"Original velvet Liquid Silicone Case For Xiaomi mi 9 9SE 10 A...",price:"8.93"},
        {img:"https://gloimg.gbtcdn.com/soa/gb/store/6868553449588584448/16392/goods_img-v1/570021335be9.jpg",name:"Whole kit skateboard Death Wish chocolate spitfire...",price:"110.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16467/goods_img-v1/2b7f89401ed2.jpg",name:"DOOGEE S97 Pro Rugged Phone 40m Laser Rangefinder 48MP...",price:"326.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_img-v1/737cd0e60c5a.jpg",name:"Baseus GaN Power Bank USB Charger 10000mah Powerbank...",price:"55.19"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15966/goods_img-v1/cf4d63c4e653.jpg",name:"Ulefone Armor X7 5.0-inch Android10 Rugged Waterproof...",price:"99.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16492/goods_img-v1/c403d48ec540.jpg",name:"New Jade Resin Couples Watch Band For Samsung Watch...",price:"20.72"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16507/goods_img-v4/11793f7dafcb.jpg",name:"20V Electric Lawn Mower Liion Battery Cordless Grass Trimmer..",price:"174.80"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16521/goods_img-v1/f7341b83c703.jpg",name:"Unlock Phone 5.5 Inch Smartphone Android 16GB RA...",price:"111.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16475/goods_img-v1/8c82890d8a2e.jpg",name:"Autel Robotics EVO NANO/ NANO+ Drone 4k profesional...",price:"790.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img-v1/2d5d2b90bb82.jpg",name:"Mobile Phone Nova8 Pro 12GB+512GB 7.1Inch Face ID..",price:"113.70"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6908377430696849408/16531/goods_img-v2/4c8f496c5225.jpg",name:"Unlocked Smartphone 7.3 Inch Cellphones Android Face ID...",price:"163.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_img-v2/677443d1848e.jpg",name:"Massage Gun Deep Tissue Percussion Mini LCD 32 Spee...",price:"36.90"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/dbf51fda4286.jpg",name:"Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphon...",price:"11.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16531/goods_img-v1/6cd7f3cabfaf.jpg",name:"210/260/300/380/420cm 3 Layer Automatic Inflatable...",price:"143.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16450/goods_img-v3/90843fdc2804.jpg",name:"DOOGEE X96 Pro Cellphones 4GB RAM 64GB ROM Octa Cor...",price:"149.14"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16420/goods_img-v5/93f96987f87e.jpg",name:"ILIFE V8 Plus Robot Vacuum Cleaner Wet Mop Navigation..",price:"273.60"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16500/goods_img-v4/57c809aa41a9.jpg",name:"Retro classic European and American style shortsleeved...",price:"13.72"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16419/goods_img-v5/2bade2f7be7f.jpg",name:"Tronxy Large Size X5SA 24V 3D Printer Factory Price Desktop...",price:"299.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16545/goods_img-v1/a21615331c2d.jpg",name:"Naturehike Hammock Ultralight Camping Hammock 1-2 Person",price:"26.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16061/goods_img-v1/51299ec84910.jpg",name:"Laptop 15.6 inch 8G RAM 128G 256G 512G 1TB SSD ROM...",price:"437.25"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/desc/6615272824267153408/15949/goods_img-v3/9a4e9be91db4.jpg",name:"70mai Dash Cam Pro 1944P Speed Coordinates GPS ADAS...",price:"79.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_img-v4/22be1a02e259.jpg",name:"EWA A106 Pro Mini Bluetooth Speaker with Custom Bass...",price:"24.28"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/store/6908377430696849408/16532/goods_img-v1/c32daeadb4aa.jpg",name:"Smartphone Android 16GB 512GB Celulares Octa Core H...",price:"178.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16164/goods_img-v3/f1c7d0f5685e.jpg",name:"Global Version POCO F3 5G Smartphone Snapdragon 870...",price:"389.80"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16450/goods_img-v3/980e8a024bfa.jpg",name:"I500 TWS Wireless Bluetooth 5.0 Touch HiFi Stereo Sports...",price:"16.68"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6919674405698334720/16533/goods_img-v5/7e7a9c5753ae.jpg",name:"Hiseeu IP POE 5MP CCTV Security Surveillance Camera...",price:"260.25"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16534/goods_img-v1/a164aeb8e460.jpg",name:"Original Xiaomi Mi Band 7 / 7 NFC Smart Wristband 1.62 inch...",price:"59.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_img-v5/cf12af936537.jpg",name:"Xiaomi Redmi Note 9 Pro 5G 6GB RAM 128GB ROM...",price:"365.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16403/goods_img-v1/167be3e01d5c.jpg",name:"KERNUAP SunPower Folding 10W Solar Cells Charger 5V 2.1A..",price:"27.77"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6907015762637156352/16539/goods_img-v1/1b74396adc99.jpg",name:"Dimmable Desk Reading Light Eye Protection Table Lamp...",price:"51.37"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6917171477716594688/16510/goods_img-v5/46b5587ae8ad.jpg",name:"Replacement Soft Silicone Strap For Fitbit ace 2 Kids Smart...",price:"16.50"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16424/goods_img-v1/186cd6966d5f.jpg",name:"Xiaomi Mi Intelligent Remote Control Car SUZUKI JIMNY 4...",price:"51.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16517/goods_img-v1/a00cb9f65d8f.jpg",name:"TRONXY CRUX 1 3D printer Presale 180X180X180mm Fast...",price:"179.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16369/goods_img-v3/ec3a5b9b9920.jpg",name:"UMIDIGI Power 5 Global Version 128GB Smartphone..",price:"219.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6868955312079171584/16502/goods_img-v1/4e9e81a0cd1c.jpg",name:"Prime 8CH 2K HD Wireless Security Camera System 24/7...",price:"129.00"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16396/goods_img-v1/e9f7b8f381fa.jpg",name:"HEPA Filter Side Brush Main Brush for Xiaomi 1s MI Robot...",price:"35.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16105/goods_img-v1/2977181d677d.jpg",name:"Yeelight LED Desk Lamp Clip-On Night Light USB Rechargeable..",price:"19.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16467/goods_img-v2/7f3ed3c839fe.jpg",name:"Global Version Xiaomi Redmi Watch 2 Lite Smart Watch...",price:"59.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16034/goods_img-v1/c1d02761b774.jpg",name:"ZTE Axon 20 5G Cell Phone 6.92 inch 90HZ 8GB RAM 256GB...",price:"405.90"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16480/goods_img-v2/d916ad202d93.jpg",name:"L900 PRO SE 5G Foldable GPS RC Drone Quadcopter with 4K...",price:"74.47"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16486/goods_img-v1/6a0fbd723c9d.jpg",name:"Xiaomi Redmi AX5400 Router 16M RGB WiFi6 512M Memory..",price:"134.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15904/goods_img-v1/b017d09ce353.jpg",name:"Posture Corrector Back Posture Brace Clavicle Support Stop..",price:"21.64"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15905/goods_img-v1/64cdb43f80b2.jpg",name:"Switchable Wireless Home Security WIFI GSM GPRS Alarm...",price:"49.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16135/goods_img-v1/235ac75bd34b.jpg",name:"Global Version Xiaomi Mi 11 Smartphone 8GB RAM 128GB...",price:"1149.99"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_img-v1/8def620e18fd.jpg",name:"Original Lenovo LP1S TWS Bluetooth Earphone Sports...",price:"16.49"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16043/goods_img-v2/9c3494b6348d.jpg",name:"USB Powered Heated Vest Men Women Smart Electric Heating...",price:"34.58"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16056/goods_img-v1/50e18384ddd6.jpg",name:"Dere R9 PRO 15.6inch Laptop 12GB RAM 256GB ROM Intel..",price:"399.27"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15948/goods_img-v2/f63710531d25.jpg",name:"Smart Doorbell Camera Wifi Wireless Call Intercom Video-..",price:"44.55"},
         {img:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/f67c07d453c0.jpg",name:"Electric Neck Massager & Pulse Back 6 Modes Power Control..",price:"12.13"},
    ]
    recommendedForYouArr.forEach(function(el){
        let div = document.createElement("div")
        // box.addEventListener("click",function(){
        //     myFunction(el)
        // })
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
        let flash = document.createElement("p")
        flash.innerText = "flash sale"
        flash.style.color = "#f30240"
        div.append(img,name,price,flash)
        div.style.padding = "10px"
        div.style.marginTop = "26px"
        document.querySelector(".recommendedForYou").append(div)
    })
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
    document.querySelector(".recommendedForYou>div").addEventListener("click",myFunc)
    function myFunc(){
        window.location.href="/productPage.html"
    }