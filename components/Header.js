// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const myHeader = document.createElement("div");
  myHeader.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");

  const title = document.createElement("h1");

  const temp = document.createElement("span");
  temp.classList.add("temp");

  //Appending
  myHeader.appendChild(date);
  myHeader.appendChild(title);
  myHeader.appendChild(temp);

  //Text content
  date.textContent = "MARCH 28, 2020";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";

  return myHeader;
}

const headContainer = document.querySelector("div.header-container");
headContainer.appendChild(Header());
