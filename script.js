var btn = document.getElementById('kuntun');


btn.onclick = function () {
    var top = document.getElementById('top');
    if (top.getAttribute('href') =='css/style.css'){
        top.href='css/styledark.css';
    }
    else {
        top.href='css/style.css';
    }
}