export const websites = [
  {
    imgSrc: "./unitconversion.PNG",
    title: "Weight Conversion website",
    description:
      "This website is made with HTML, CSS, and JavaScript. It helps to convert weight conversion. Users can enter a number in pounds, and it will show the results in grams, kgs, and ounce.",
    link: "https://avinashbawage.github.io/Weight-Conversion-website-or-App/",
  },
  {
    imgSrc: "./mathwebsite.PNG",
    title: "Math Website (html+css)",
    description:
      "This is a simple website made with HTML and CSS. It is an educational website and an online tutorial website.",
    link: "https://avinashbawage.github.io/SingleWebsite/",
  },
  {
    imgSrc: "./stunninglandingpage.PNG",
    title: "Stunning landing Page website (html+css)",
    description: "This is a simple website made with HTML and CSS.",
    link: "https://avinashbawage.github.io/Stunning_landing_page/",
  },
  {
    imgSrc: "./calculator.PNG",
    title: "Calculator (html,css & React js)",
    description:
      "This is a new calculator made with HTML, CSS, and React.js. It allows users to add, subtract, multiply, and divide numbers.",
    link: "https://avinashbawage.github.io/caltors/",
  },
  {
    imgSrc: "wordcount1.PNG",
    title: "Word Count Tool (Bootstrap + React Js)",
    description:
      "This is a new Word Count Tool. It is used to count the number of words, characters, time to read, and convert text to capital or lowercase.",
    link: "https://avinashbawage.github.io/wordcount/",
  },
  {
    imgSrc: "./educationwebsite.PNG",
    title: "Education Website (html+css+Js)",
    description:
      "This is an education website made with HTML, CSS, and JavaScript. It includes multiple pages - Home, About, Contact us. It is responsive and best viewed on all devices.",
    link: "https://avinashbawage.github.io/Html-css-Js-Website/",
  },
  {
    imgSrc: "edutech.PNG",
    title: "E-Courses Website(Bootstrap)",
    description:
      "This is an E-Course website made with Bootstrap. It is responsive and best viewed on all devices.",
    link: "https://avinashbawage.github.io/Bootstrap.Edn.website/",
  },
  {
    imgSrc: "./kafeneproject.PNG",
    title: "kafeneproject",
    description:
      "This project consists of a Sign-in and logout page, Order page, Product page, and users page with filter and search functionality.",
    link: "https://avinashbawage.github.io/Bootstrap.Edn.website/",
  },
  {
    imgSrc: "./movies.PNG",
    title: "Movie React Js App",
    description:
      "This is a Movie App with search functionality. It uses React.js, useState, and useEffect.",
    link: "https://avinashbawage.github.io/Bootstrap.Edn.website/",
  },
  {
    imgSrc: "./adminpanel.PNG",
    title: "Basic Admin Panel",
    description:
      "This is a basic Admin Panel with search functionality. It displays details on the right sidebar. It uses an API.",
    link: "https://avinashbawage.github.io/Bootstrap.Edn.website/",
  },
  {
    imgSrc: "./texttospeech.PNG",
    title: "Text to Speech",
    description: "This is a Text to Speech tool.",
    link: "https://avinashbawage.github.io/Bootstrap.Edn.website/",
  },
];

export const renderedWebsites = websites.map((website, index) => {
  return `
      <li class="glide__slide">
        <div class="team">
          <div class="img-cover">
            <img src="${website.imgSrc}" alt="" />
          </div>
          <h3><strong>${website.title}</strong></h3>
          <p>${website.description}</p>
          <br />    
          <a style="color: aliceblue;" href="${website.link}" class="btn" target="_blank">Click Here</a>
        </div>
      </li>
    `;
});

// Render the renderedWebsites as a string
const html = `<ul>${renderedWebsites.join("")}</ul>`;
