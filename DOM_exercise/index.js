
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// Creating the <p> element

const contentp = document.createElement("p");

contentp.classList.add("contentp");
contentp.textContent = "Hey I'm red!";
contentp.style.color = "red";
container.appendChild(contentp);

// Creating the <h3> element
const header3 = document.createElement("h3");
header3.classList.add("header");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

// Creating the <div> element
const mydiv = document.createElement("div");
mydiv.style.border = "solid";
mydiv.style.borderSpacing = "1px";
mydiv.style.borderColor = "black";
mydiv.style.backgroundColor = "pink";
container.appendChild(mydiv);

// Creating the children of the div above
const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
mydiv.appendChild(header1);

const paraChild = document.createElement("p");
paraChild.textContent = "ME TOO!";
mydiv.appendChild(paraChild);


  const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});