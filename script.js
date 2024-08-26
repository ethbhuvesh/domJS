// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pTag = document.createElement("p");
pTag.textContent = "Hey I'm red!"
pTag.style.color = "red";
container.insertBefore(pTag, content);

const h3Tag = document.createElement("h3");
h3Tag.textContent = "I'm a blue h3!";
h3Tag.style.color = "blue";
container.insertBefore(h3Tag, content);

const divTag = document.createElement("div");
divTag.style.backgroundColor = "pink";
divTag.style.border = "black";
container.insertBefore(divTag, content);

const h1Div = document.createElement("h1");
h1Div.textContent = "I'm in a div";

const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!"

divTag.appendChild(h1Div);
divTag.appendChild(pDiv);