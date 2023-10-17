const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


// img
//Try adding an image. We would need to create the img element, then set the src and alt attributes, and finally append the image to the body. You should use
//element.setAttribute('src', 'path/to/image') to set those attributes. Try it. You can use
//https://picsum.photos/200 for the image path.
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);


// Create a new section element.

//Add an h2 element with the content "CSE 121b"
//Add a paragraph p that says: "Welcome to Javascript Language"
//Add your section to the body.
const newSection = document.createElement("section new");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121B";
NewSection.appendChild(newH2);

const newP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);

or 

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);