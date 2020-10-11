const projectsArray = [
	{
		id: 1,
		name: "Restaurants BOS",
		img: require("../Images/ProjectsDisplay/restaurant_bos.PNG"),
		alt: "Restaurant BOS",
		gitLink: "https://github.com/Ronald03/restaurant_catalog",
		desc: "Designed a web based application fully responsive and mobile friendly to manage Restaurants and their corresponding menus. Configured a user registration and authentication system using one of the Google’s API. Signed users have the ability to post, edit, and delete restaurants and menu items. Used Flask and many of its libraries to create a complete and responsive web server in connection with the database.",
		skills: ["Python","Flask","Javascript","HTML/CSS", "SQLAlchemy", "SQLite"]
	},
	{
		id: 2,
		name: "Movie Trailers",
		img: require("../Images/ProjectsDisplay/movie_trailer.png"),
		alt: "Movie trailers",
		gitLink: "https://github.com/Ronald03/movie_trailers_website",
		desc: "Wrote a server-side code on python to store a list of favorite movies, including box art imagery, movie trailer URL and storyline. Then use the code to generate a static and responsive web page to allow users to browse their movies and watch their trailers.",
		skills: ["Python", "Flask", "Javascript", "HTML/CSS"]
	},
	{
		id: 3,
		name: "Log Analisys",
		img: require("../Images/ProjectsDisplay/project-code.jpg"),
		alt: "Photo by Dlanor S on Unsplash",
		gitLink: "https://github.com/Ronald03/log_analysis",
		desc: "Build an internal reporting tool with python that will use information from the database to discover what kind of articles the site's readers like. This reporting tool stablishes a connection between the python code and a PostgreSQL database to extract the data, once the program finishes executing it exports the result to a text file.",
		skills: ["Python", "PostgreSQL"]
	}
];

export default projectsArray;
