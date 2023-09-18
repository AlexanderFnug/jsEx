var button = document.getElementById("b1");
button.onclick = clickme;

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];


function findFunction(event) {
  event.preventDefault();
console.log("Form submitted");
  const clickedButtonValue = event.submitter.value;

  const functionsMap = {
    "Add name": addName,
    "remove first": removeFirst,
    "remove last": removeLast,
  };

  const clickedFunction = functionsMap[clickedButtonValue];
  console.log("Clicked function:", clickedFunction);
  if (clickedFunction) {
    clickedFunction(event);
  }
}


function clickme() {
  console.log("clicked");
  const namesToHtml = function (names) {
    return `<ul>${names.map((name) => `<li>${name}</li>`).join("")}</ul>`;
  };
  document.getElementById("p1").innerHTML = namesToHtml(names);
}
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

function addName(event) {
  // Prevent default form submission
  event.preventDefault();
  const name = document.getElementById("name").value;
  const sanitized = sanitizeInput(name)
    console.log(sanitized, "name");
    
    names.push(sanitized);
    clickme();
}
function removeFirst(event) {
    // Prevent default form submission
    console.log("remove first");
  event.preventDefault();
    names.shift(); // removes the first element from an array
    clickme();
}

function removeLast(event) {
    // Prevent default form submission
    console.log("remove last");
  event.preventDefault();
    names.pop(); // removes the last element from an array
    clickme();
}


// Attach the addName function to the form's submit event
document.querySelector("form").addEventListener("submit", findFunction);
