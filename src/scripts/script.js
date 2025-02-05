// code for the service section
const serviceContainer = document.getElementById("servicecontainer");

const webDev = {
  service: "WEB DEVELOPMENT",
  description:
    "I design and build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript. I also develop backend API's with Node/ExpressJS.",
};

const ApiIntegration = {
  service: "API DEVELOPMENT AND INTEGRATION",
  description:
    "I design and develop RESTful and gRPC APIs that allow seamless communication between frontend applications and backend services. Seamlessly integrate third-party services such as email providers (SendGrid, Mailgun), SMS gateways, social media logins, and analytics tools.",
};

const microservice = {
  service: "MICROSERVICE AND DISTRIBUTED SYSTEMS",
  description:
    "Specialize in designing and building microservice architecture using gRPC ensuring modular, scalable and maintainable services",
};

const paymentIntegration = {
  service: "PAYMENT GATEWAY INTEGRATION",
  description:
    "Integrating payment solutions like Stripe, ensuring secure and seamless transactions for e-commerce platforms. This includes subscription billing, one-time payments, and multiple payment method support.",
};

const responsiveDesign = {
  service: "RESPONSIVE DESIGN",
  description:
    "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
};

const versionControl = {
  service: "VERSION CONTROL AND COLLABORATION",
  description:
    "I am proficient in using tools like Git and Github for easy collaboration.",
};

const services = [
  webDev,
  ApiIntegration,
  microservice,
  paymentIntegration,
  responsiveDesign,
  versionControl,
];

services.forEach((service) => {
  //   <div data-aos="zoom-in" class="max-w-7xl py-20 dark:bg-green-950 rounded-md border border-gray-600 overflow-hidden shadow-md hover:shadow-xl mx-auto px-8  grid items-center">
  //   <h1 class="text-2xl font-crete">${service.service}</h1>
  //   <p class="py-5 font-crete text-gray-300">${service.description}</p>
  // </div>
  const html = `  
        <div data-aos="zoom-in" class="text-white py-20 dark:bg-green-950 rounded-md border border-gray-600 shadow-md hover:shadow-xl mx-auto px-6 sm:px-8 grid items-center ">
        <h1 class="text-2xl font-crete">${service.service}</h1>
        <p class="py-5 font-crete text-gray-300">${service.description}</p>
    </div>`;

  if (serviceContainer) {
    serviceContainer.insertAdjacentHTML("beforeend", html);
  }
});

// project section

const projectcontainer = document.getElementById("projectcontainer");

const ecommerce = {
  name: "Scalable E-commerce API",
  description:
    "I built a microservice E-commerce API with grpc, Go and NestJS that integrates with a payment gateway. It also has some other functionalities like letting the user bid for product.",
  techStacks: ["Golang", "gRPC", "Docker", "NestJS", "RabbitMQ", "Redis"],
  githubLink: "https://github.com/Yelsnik/Scalable-Ecommerce-API",
  image: "./ecommerce.png",
  alt: "ecommerce",
};

const trackingInventory = {
  name: "Tracking Inventory API",
  description:
    "I built an API that helps users track the kind of product they purchase. Keeping in mind the brand, and price of the product.",
  techStacks: ["Golang", "Docker", "PostgresSQL"],
  githubLink: "https://github.com/Yelsnik/Scalable-Ecommerce-API",
  image: "./trackinginventory.png",
  alt: "trackinginventory",
};

const projects = [ecommerce, trackingInventory];

projects.forEach((project) => {
  const techStackHTML = project.techStacks
    .map(
      (tech) =>
        ` <p class="text-center overflow-hidden border-gray-800 bg-lime-950 rounded-lg border-2 px-3 py-2">${tech}</p>`
    )
    .join("");

  const html = `
  <div class="transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-90 py-10 dark:bg-green-950 rounded-lg border border-gray-600 shadow-lg hover:shadow-2xl mx-auto px-6 sm:px-8 grid items-center">
          <div class="border-2 border-transparent rounded-xl overflow-hidden">
          <img src=${project.image} alt=${project.alt} class="w-full h-auto max-h-60 object-cover">
          </div>
          <h1 class="text-2xl text-white pt-3 font-crete">${project.name}</h1>
        <p class="py-5 font-crete text-gray-300">${project.description}</p>
   <div class="grid overflow-hidden text-white grid-cols-2 sm:grid-cols-3 gap-3">
   ${techStackHTML}
    </div>

  <div class="flex flex-wrap justify-center sm:justify-end mt-5 gap-4">
                  <div class="flex justify-center border-2 w-full sm:w-auto py-2 px-4 bg-white rounded-lg border-transparent text-black font-medium font-crete">
                      <p>View details</p>
                      <img src="./eye.svg" class="w-6 h-6 ml-2" alt="preview">
                  </div>
                  <a href=${project.githubLink} class="border-transparent px-7 border-2 py-2 bg-white rounded-lg flex items-center">
                      <img src="./github.svg" alt="github link" class="bg-white w-6 h-6">
                  </a>
              </div>
          </div>`;

  if (projectcontainer) {
    projectcontainer.insertAdjacentHTML("beforeend", html);
  }
});

// article section
const articlecontainer = document.getElementById("articlecontainer");

const nestjsarticle = {
  name: "How to Add Filtering, Sorting, Limiting, and Pagination to Your Nest.js App",
  description:
    "The article shows the user how to add nice features such as sorting, filtering and pagination to a NestJS API",
  articleLink:
    "https://www.freecodecamp.org/news/how-to-add-filtering-sorting-limiting-pagination-to-nestjs-app/",
  articleImage: "./nestjs-app-image.png",
};

const nodemailerarticle = {
  name: "How to Send Emails With Nodemailer in NestJS",
  description:
    "Sending emails in nodejs is quite simple. This article shows how to send emails with a package called nodemailer",
  articleLink:
    "https://www.freecodecamp.org/news/how-to-use-nodemailer-in-nestjs/",
  articleImage: "./email.jpg",
};

const crudarticle = {
  name: "CRUD operations with mongoose models: a step-by-step guide",
  description:
    "This article shows how to perform CRUD operations like, create, read update and delete with mongoose models",
  articleLink:
    "https://dev.to/itzz_okure/crud-operations-with-mongoose-models-a-step-by-step-guide-o77",
  articleImage: "crud-mongo.jpg",
};

const goArticle = {
  name: "How to Create Database Migrations in Go Using Docker and Postgres",
  description:
    "It is important to make changes to your database in a timely manner. The best way to do that is with database migrations. This article dives deep into that",
  articleLink:
    "https://www.freecodecamp.org/news/how-to-create-database-migrations-in-go/",
  articleImage: "go-migrate.jpg",
}

const asynNodejs = {
  name: "UNDERSTANDING THE ASYNCHRONOUS NATURE OF NODE.JS",
  description:
    "The article helps the reader understand asynchronous programming in nodejs",
  articleLink:
    "https://dev.to/itzz_okure/understanding-the-asynchronous-nature-of-nodejs-3blg",
  articleImage: "./async.jpg",
}

const propagationArticle = {
  name: "How Event Propagation and Delegation Work in JavaScript",
  description:
    "In this article, you will learn how event propagation and delegation work in JavaScript and how to effectively use them to handle events on your page.",
  articleLink:
    "https://dev.to/itzz_okure/how-event-propagation-and-delegation-work-in-javascript-5efe",
  articleImage: "./propagation.jpg",
}

const articles = [goArticle, nestjsarticle, nodemailerarticle, crudarticle, asynNodejs, propagationArticle];

articles.forEach((article) => {
  const html = `
        <a href=${article.articleLink} target="_blank" class="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-90 text-white py-5 dark:bg-green-950 rounded-md border border-gray-600 shadow-md hover:shadow-xl mx-auto px-6 sm:px-8 grid items-center ">
                <img src=${article.articleImage} alt="nestjs article" class="w-full rounded-lg">
                <h1 class="text-2xl font-crete mt-4">${article.name}</h1>
                <p class="py-5 font-crete text-gray-300">${article.description}</p>
          </a>`;

  if (articlecontainer) {
    articlecontainer.insertAdjacentHTML("beforeend", html);
  }
});
