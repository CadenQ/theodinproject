import './style.css';
import Logo from './logo.png';

// Content div
const contentDiv = document.getElementById("content");

// Create navbar-container
let navbarContainer = document.createElement("div");
navbarContainer.id = "navbar-container";
contentDiv.appendChild(navbarContainer);

// Create logo and name area in navbar-container
let logoName = document.createElement("div");
logoName.id = "logo-name";
navbarContainer.appendChild(logoName);

// Populate logo-name
// Add logo
let image = new Image();
image.src = Logo;
logoName.appendChild(image);

// Add name of company
let nameDiv = document.createElement("div");
nameDiv.id = "name";
let para = document.createElement("h2");
para.textContent = "CenterPizza";
logoName.appendChild(nameDiv);
nameDiv.appendChild(para);

// Create navigation portion of navbar
let navbar = document.createElement("div");
navbar.id = "navbar";
navbarContainer.appendChild(navbar);

// Add navigation links
let homeLink = document.createElement("a");
homeLink.textContent = "Home";
let menuLink = document.createElement("a");
menuLink.textContent = "Menu";
let contactLink = document.createElement("a");
contactLink.textContent = "Contact";

navbar.appendChild(homeLink);
navbar.appendChild(menuLink);
navbar.appendChild(contactLink);
console.log("Testing");
