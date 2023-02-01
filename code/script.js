const section1 = document.querySelector("#section1");
const toggleHTMLElementClass1 = () => {
  section1.classList.toggle("active");
}
  section1.onclick = toggleHTMLElementClass1;
  

const section2 = document.querySelector("#section2");
const toggleHTMLElementClass2 = () => {
    section2.classList.toggle("active");
  }
    section2.onclick = toggleHTMLElementClass2;


// Selecting an HTML element
// const elementToToggle = document.querySelector("#section1");
// A function that adds and remove the class "active" 
// const toggleHTMLElementClass = () => {
//  elementToToggle.classList.toggle("active");
//};
// Adding the toggle function to our selected element, so everytime it's clicked the class will be toggled
//elementToToggle.onclick = toggleHTMLElementClass;