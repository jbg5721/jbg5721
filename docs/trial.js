 window.addEventListener('DOMContentLoaded',init,false);

function init() {
    
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