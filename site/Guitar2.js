
var info = document.getElementById('infoform');
var get = document.getElementById('getinfo');
var re = document.getElementById('re');

var edit = document.getElementsByID('et');
edit.style.display = 'none';
var c = new Array(document.getElementById('fn'), document.getElementById('ln'), document.getElementById('co'), document.getElementById('em'), document.getElementById('cd'), document.getElementById('cn'), document.getElementById('dt'), document.getElementById('sc'));
var allentered = 0;
function review() {  
    for (var i = 0; i < c.length; i++) {
        if (c[i].value === '' || c[i].value === null) {
            alert('enter a value');
        }
        else {
            allentered = allentered + 1;
        }
    }
    if (allentered == 8) {
        info.style.display = 'none';
        get.style.fontSize = '20px';
        re.style.display = 'none';
        edit.style.display = 'block';
    } 
}
function edit() {
    info.style.display = 'block';
    get.style.display = '10px';
    re.style.display = 'block';
}
function buy() {
    if (allentered == 8) {
        window.location.href = 'Guitar3.html?index=' + index;
        
    }
    else {
        alert('enter value');
    }
}

