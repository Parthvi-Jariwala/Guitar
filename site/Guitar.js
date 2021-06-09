// JavaScript source code

var data;
function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'guitardata.json', true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                data = JSON.parse(xhttp.responseText);
                
        }
    }
}

var i = 0;
function previous() {
    if (i > 0) {
        i--;
    }    
    loadData();
    document.getElementById('proimg').src = data.allProducts[i].image_path;
}
function next() {
    if (i < data.allProducts.length - 1) {
        i++;
    }
    document.getElementById('proimg').src = data.allProducts[i].image_path;
    document.getElementById('proinfo').innerHTML = data.allProducts[i].product_description;
    
}

function product() {
    var info = document.getElementById('proinfo');
    if (info.style.display === "block") {
        info.style.display = "none";
    }
    else {
        info.style.display = "block";
    }
    info.innerHTML = data.allProducts[i].product_description;
}
function shipping() {
    var ship = document.getElementById('shipinfo');
    if (ship.style.display === "block") {
        ship.style.display = "none";
    }
    else {
        ship.style.display = "block";
    }
    ship.innerHTML = data.allProducts[i].shipping_details;    
}
function review() {
    var cust = document.getElementById('custrev');
    if (cust.style.display === "block") {
        cust.style.display = "none";
    }
    else {
        cust.style.display = "block";
    }
    document.getElementById('custrev').innerHTML = data.allProducts[i].customer_reviews; 
}
function buy() {
    window.location.href = 'Guitar2.html?index='+i;
}