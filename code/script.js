// Selecting an HTML element
// const elementToToggle = document.querySelector("#section1");
// A function that adds and remove the class "active" 
// const toggleHTMLElementClass = () => {
//  elementToToggle.classList.toggle("active");
//};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
//elementToToggle.onclick = toggleHTMLElementClass;

section1.onclick = toggleAnswer
function toggleAnswer() {
 this.classList.toggle('active') 
}

document.getElementById("section1").onclick = function () {toggleAnswer() };

function toggleAnswer() { 
  section1.classList.toggle('open');
}