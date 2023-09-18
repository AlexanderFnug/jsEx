const changeColor = () => { 
    document.getElementById("d1").style.backgroundColor = "darkgrey";
    document.getElementById("d2").style.backgroundColor = "lightgrey";
    document.getElementById("d3").style.backgroundColor = "purple";
}
const changeBorder = () => {
    document.getElementById("d1").style.border = "5px solid blue";
    document.getElementById("d2").style.border = "10px solid red";
    document.getElementById("d3").style.border = "1px solid green";
}
var button = document.getElementById("b1");
button.onclick = changeBorder;
