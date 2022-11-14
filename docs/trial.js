 window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);}
    
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeColor,true)
buttons[1].addEventListener('click', changeColor2,true)

}

function changeColor() {
var colorMe1 = document.getElementById("colorToggle") 
{colorMe1.style.backgroundColor = "red";}
}

function changeColor2() {
var colorMe1 = document.getElementById("colorToggle") 
{colorMe1.style.backgroundColor = "";}
}

function toggle() {
var id = this.id;
    switch (id) {
        case "nameToggle": {
            var name = document.getElementsByClassName("name");
            for (var i = 0; i < name.length; i++) {
                name[i].classList.toggle("on")
            }
        };
    }
}
