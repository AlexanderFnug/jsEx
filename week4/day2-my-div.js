//Første kode opgave
const getID = (event) => {
  console.log(event.target.id, "Clicked with the first method");
};

var divs = document.getElementsByClassName("my-div");
for (let div of divs) {
  div.onclick = getID;
}
//Anden kode opgave
DivOuter.onclick = function (event) {
  console.log(
    event.target.id,
    "Clicked with the second method that lars wanted"
  );
    const myText = document.getElementById("textHere").innerText = `${event.target.id}
     Clicked with the second method that lars wanted`;
    
};
