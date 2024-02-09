var products = [
    {
        pname: "Apple",
        pcode: 95667,
        openstock: 120,
        price: 50,
        img: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
    },
    {
        pname: "Orange",
        pcode: 953427,
        openstock: 120,
        price: 70,
        img: "https://media.istockphoto.com/id/182463420/photo/tangerine-duo-with-leafs.jpg?s=612x612&w=0&k=20&c=d3JZRAqgqZ5RWyN4ryFteCnmFNbeD9e3TNJkS2IC0vU="
    },
    {
        pname: "Kiwi",
        pcode: 236532,
        openstock: 150,
        price: 100,
        img: "https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-kiwi-fruit-blank-background-vector-illustration_1284-66048.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704499200&semt=ais"
    },
    {
        pname: "Banana",
        pcode: 987032,
        openstock: 120,
        price: 60,
        img: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="
    },
]

var container = document.getElementById('Mainpage');


for (var i = 0; i < products.length; i++) {
    var product = products[i];


    var productCard = document.createElement("div");
    productCard.className = "Product-Card";


    var productPic = document.createElement("div");
    productPic.className = "Product-pic";
    var img = document.createElement("img");
    img.src = product.img;
    img.alt = "product img";
    productPic.appendChild(img);


    var productInfo = document.createElement("div");
    productInfo.className = "Product-info";
    var h1 = document.createElement("h1");
    h1.style.color = "orange";
    h1.textContent = product.pname;
    var p1 = document.createElement("p");
    p1.innerHTML = "<span style='font-weight: bold;'>PCode :</span> " + product.pcode;
    var p2 = document.createElement("p");
    p2.innerHTML = "<span style='font-weight: bold;'>Stock :</span> " + product.openstock;
    var h2 = document.createElement("h1");
    h2.innerHTML = "<span style='font-weight: bold;'>Price :</span> Rs." + product.price + " per kg";

    
    productInfo.appendChild(h1);
    productInfo.appendChild(p1);
    productInfo.appendChild(p2);
    productInfo.appendChild(h2);

    productCard.appendChild(productPic);
    productCard.appendChild(productInfo);

    container.appendChild(productCard);
}


