const portfolioData = [
  {
    category: "web",
    title: "Food Website",
    imageSrc: "../week8imageassets/imageAssets/portfolio-1.jpg",
  },
  {
    category: "web",
    title: "Skate Website",
    imageSrc: "../week8imageassets/imageAssets/portfolio-2.jpg",
  },
  {
    category: "web",
    title: "Eating Website",
    imageSrc: "../week8imageassets/imageAssets/portfolio-3.jpg",
  },
  // Add more portfolio items as needed
];

const portfolioContainer = document.getElementById("portfolio-container");

portfolioData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("portfolio-card");
  card.dataset.item = item.category;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const image = document.createElement("img");
  image.src = item.imageSrc;
  image.alt = "Portfolio Item Image";

  const cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.classList.add("card-popup-box");

  const categoryDiv = document.createElement("div");
  categoryDiv.textContent = item.category;

  const title = document.createElement("h3");
  title.textContent = item.title;

  cardLink.appendChild(categoryDiv);
  cardLink.appendChild(title);

  cardBody.appendChild(image);
  cardBody.appendChild(cardLink);

  card.appendChild(cardBody);

  portfolioContainer.appendChild(card);
});
