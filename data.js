const webDevCards = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    title: "HTML5",
    text: "The core markup language for structuring web content — defines semantics of headings, paragraphs, links, media, forms, and more.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS3_logo_and_wordmark.svg",
    title: "CSS3",
    text: "Stylesheet language used to control the presentation — layout, colors, fonts, responsiveness, animations and transitions of web pages.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    title: "JavaScript",
    text: "The programming language of the web — enables interactivity, DOM manipulation, events, and dynamic data-driven behavior in the browser.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "React",
    text: "A popular front-end library for building component-based, interactive user interfaces and single-page applications.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    title: "Node.js",
    text: "Server-side JavaScript runtime — allows building scalable backend services, APIs, real-time features using JS outside the browser.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Git_icon.svg",
    title: "Git",
    text: "Distributed version control system — important for managing code history, collaborating with other developers, and maintaining clean workflows.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Responsive_Web_Design.svg",
    title: "Responsive Design",
    text: "Design approach ensuring web pages render well on different devices (desktop, tablet, mobile) using fluid layouts, media queries and flexible images.",
  },
];

let ProductCardContainer = document.querySelector("#card-container-p");

for (let i = 0; i < webDevCards.length; i++) {
  ProductCardContainer.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
         <img src=${webDevCards[i].img} class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${webDevCards[i].title}</h5>
      <p class="card-text">
        ${webDevCards[i].text}
      </p>
    </div>
  </div>
</div>;

    
    `;
}
