const projectsArray = [
  {
    id: 1,
    name: "Amazon-Clone",
    img: "https://pngimg.com/uploads/amazon/amazon_PNG24.png",
    alt: "Amazon Clone",
    gitLink: "https://github.com/Ronald03/amazon-clone-react",
    liveLink: "https://clone-8aca9.web.app/",
    desc:
      "Designed a clone of the Amazon desktop Website with full payment funcionality as well as 'add to basket'. This project is a copy of the UI and responsiveness of Amazon's website. I have used Stripes API to integrate the payment capability and the power of Google Firebase for users authentication and live hosting of the app. ",
    skills: ["Javascript", "React", "React Content API", "Firebase"],
  },
  {
    id: 2,
    name: "Netflix-Trailer",
    img: "https://pngimg.com/uploads/netflix/netflix_PNG23.png",
    alt: "Netflix Clone",
    gitLink: "https://github.com/Ronald03/netflix-trailer",
    liveLink: "https://netflix-trailer-88f5e.web.app/",
    desc:
      "This is a clone project of the big Giant Netflix desktop Website created with Javascript and React library and also using the power of Flexbox to create a well responsive design. I have named this Netflix Trailers as you will be able to watch most of the trailers of the content currently showing on Netflix home page. ",
    skills: ["Javascript", "React", "TMDb API"],
  },
  {
    id: 3,
    name: "Covid-19 Tracker",
    img:
      "https://pngimg.com/uploads/stop_coronavirus/stop_coronavirus_PNG32.png",
    alt: "C19 Tracker",
    gitLink: "https://github.com/Ronald03/covid-tracker",
    liveLink: "https://covid-tracker-fa21a.web.app/",
    desc:
      "This project is a tool to monitor the activity of COVID-19 all around the globe. It is designed to provide every day data about new Covid cases, recovered and death cases. I haved implemented a graphic chart to visualize the negative and positive growth of this virus. And finally deployed this project using the powerful resources of Google Firebase.",
    skills: ["Javascript", "React", "Firebase", "LeafletJS API"],
  },
  {
    id: 4,
    name: "Messenger App",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Messenger_logo_2018.svg",
    alt: "fb Messenger",
    gitLink: "https://github.com/Ronald03/messenger-app",
    liveLink: "https://facebook-messenger-97a4a.web.app/",
    desc:
      "Created a live messenger app using React library and Firebase for database and hosting functionalities. This chat app is more like a 'group chat' since every person with the link to this app will be able to participate in the chat. Enjoy! :)",
    skills: ["Javascript", "React", "Firebase"],
  },
  {
    id: 5,
    name: "Restaurants BOS",
    img: require("../Images/ProjectsDisplay/restaurant_bos.PNG"),
    alt: "Restaurant BOS",
    gitLink: "https://github.com/Ronald03/restaurant_catalog",
    liveLink: "",
    desc:
      "Designed a web based application fully responsive and mobile friendly to manage Restaurants and their corresponding menus. Configured a user registration and authentication system using one of the Google’s API. Signed users have the ability to post, edit, and delete restaurants and menu items. Used Flask and many of its libraries to create a complete and responsive web server in connection with the database.",
    skills: [
      "Python",
      "Flask",
      "Javascript",
      "HTML/CSS",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  {
    id: 6,
    name: "Movie Trailers",
    img: require("../Images/ProjectsDisplay/movie_trailer.png"),
    alt: "Movie trailers",
    gitLink: "https://github.com/Ronald03/movie_trailers_website",
    liveLink: "",
    desc:
      "Wrote a server-side code on python to store a list of favorite movies, including box art imagery, movie trailer URL and storyline. Then use the code to generate a static and responsive web page to allow users to browse their movies and watch their trailers.",
    skills: ["Python", "Flask", "Javascript", "HTML/CSS"],
  },
  {
    id: 7,
    name: "Log Analisys",
    img: require("../Images/ProjectsDisplay/project-code.jpg"),
    alt: "Photo by Dlanor S on Unsplash",
    gitLink: "https://github.com/Ronald03/log_analysis",
    liveLink: "",
    desc:
      "Build an internal reporting tool with python that will use information from the database to discover what kind of articles the site's readers like. This reporting tool stablishes a connection between the python code and a PostgreSQL database to extract the data, once the program finishes executing it exports the result to a text file.",
    skills: ["Python", "PostgreSQL"],
  },
];

export default projectsArray;
