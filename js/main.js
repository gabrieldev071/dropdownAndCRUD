const dropDown0 = document.getElementsByClassName('dropDown')[0];

function dropDownFocus() {
    dropDown.style.display = "block";
}

function dropDownOnBlur() {
    dropDown.style.display = "none";
}

function dropDown(p){
    let e = document.getElementsByClassName('dropDown')[0];
    let d = [
        'block',
        'none'
    ]

    e.style.display = d[p]

    var t = ['0px', '0px,-10px'];
    setTimeout(function () {
      dropDown.style.transform = 'translate(' + t[p] + ')';
    }, 0);
    e.style.transition = '0.5s'
}

function category(params) {
    let item = document.getElementById('item-' + params).innerHTML; //captando valores do element

    document.getElementsByTagName('input')[0].value = item;
}