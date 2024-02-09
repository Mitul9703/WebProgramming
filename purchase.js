var purchase = [
    {
        pname: "Apple",
        pcode: 95667,
        openstock: 120,
        qty:2,
        price: 100,
        img: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
    },

    {
        pname: "Kiwi",
        pcode: 236532,
        qty:3,
        openstock: 150,
        price: 100,
        img: "https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-kiwi-fruit-blank-background-vector-illustration_1284-66048.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=ais"
    },

]

var container = document.getElementById('Mainpage');


for (var i = 0; i < purchase.length; i++) {
    var purchase = purchase[i];
    console.log(purchase.pname,i)

    var purchaseCard = document.createElement("div");
    purchaseCard.className = "Purchase-Card";


    var purchasePic = document.createElement("div");
    purchasePic.className = "Purchase-pic";
    var img = document.createElement("img");
    img.src = purchase.img;
    img.alt = "Purchase img";
    purchasePic.appendChild(img);


    var purchaseInfo = document.createElement("div");
    purchaseInfo.className = "Purchase-info";
    var h1 = document.createElement("h1");
    h1.style.color = "orange";
    h1.textContent = purchase.pname;
    var p1 = document.createElement("p");
    p1.innerHTML = "<span style='font-weight: bold;'>PCode :</span> " + purchase.pcode;
    var p2 = document.createElement("p");
    p2.innerHTML = "<span style='font-weight: bold;'>Stock :</span> " + purchase.openstock;
    var p3 = document.createElement("p");
    p3.innerHTML = "<span style='font-weight: bold;'>Total Qty :</span> " + purchase.qty;
    var h2 = document.createElement("h1");
    h2.innerHTML = "<span style='font-weight: bold;'>Total Price :</span> Rs." + purchase.price ;

    
    purchaseInfo.appendChild(h1);
    purchaseInfo.appendChild(p1);
    purchaseInfo.appendChild(p2);
    purchaseInfo.appendChild(p3);
    purchaseInfo.appendChild(h2);

    purchaseCard.appendChild(purchasePic);
    purchaseCard.appendChild(purchaseInfo);

    container.appendChild(purchaseCard);
    console.log(i)
}


