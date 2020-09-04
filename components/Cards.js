// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";

const cardsContainer = document.querySelector(".cards-container");

const getPromise = () => {
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")

    .then((res) => {
      //console.log(res);
      res.data.articles.javascript.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
      const bootstrapArt = res.data.articles.bootstrap;
      bootstrapArt.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
      res.data.articles.bootstrap.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
      res.data.articles.technology.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
      res.data.articles.jquery.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
      res.data.articles.node.forEach((item) => {
        cardsContainer.appendChild(createCard(item));
      });
    })
    .catch((error) => {
      console.log("error:", error);
    });
};
getPromise();

function createCard(objects) {
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const container = document.createElement("div");
  container.classList.add("img-container");
  const img = document.createElement("img");
  const name = document.createElement("span");

  //Append
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(container);
  author.appendChild(name);
  container.appendChild(img);

  //Text
  headline.textContent = objects.headline;
  img.src = objects.authorPhoto;
  name.textContent = objects.authorName;

  card.addEventListener("click", () => {
    console.log(headline);
  });

  return card;
}
