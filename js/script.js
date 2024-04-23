// Copyright Date
const rightNow = new Date();
document.querySelector("#year").textContent = rightNow.getFullYear();

// hamburger btn
const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
  pw.classList.toggle("moveOver");
});

// get the cabin data
import { cabins } from "../js/cabins.js";

const cabinCards = document.querySelector("#cards");

cabins.forEach((cabin) => {
  const mySection = document.createElement("section");

  const theImage = document.createElement("img");
  theImage.src = `images/${cabin.photo}`;
  theImage.alt = cabin.name;

  const theName = document.createElement("h3");
  theName.textContent = cabin.name;

  const theAddress = document.createElement("address");
  theAddress.innerHTML = `${cabin.address[0]}<br>${cabin.address[1]}`;

  const bookNow = document.createElement("p");
  bookNow.textContent = "Call To Book!";

  const thePhone = document.createElement("a");
  thePhone.textContent = cabin.phone;
  thePhone.href = `tel:${cabin.phone}`;

  mySection.appendChild(theImage);
  mySection.appendChild(theName);
  mySection.appendChild(theAddress);
  mySection.appendChild(bookNow);
  mySection.appendChild(thePhone);

  cabinCards.appendChild(mySection);
});
