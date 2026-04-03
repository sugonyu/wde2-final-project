# MovieWorld Website
[Trello Board](https://trello.com/invite/b/69cc318200b954546fb48caa/ATTI81d760ca96e33f144cbc53deeb6a087033A03914/web-development-environment-2-final-project)
[GitHub Repository](https://github.com/sugonyu/wde2-final-project.git)

## The Team
| Team Member                  | Role                    |
| ---------------------------- | ----------------------- |
| **(Mo) Muhamed Karim Kahil** | Lead Frontend Developer | 
| **(Tony) Soo Gun Yu**        | DevOps / Git Lead       |
| **Kylene Anne Aguila**       | Documentation Lead      |

## Concept
We created this website to display and discover some of the world's best movies. 

_The wireframe concept we brainstormed together._

<img width="440" height="2110" alt="Version 3 of website template" src="https://github.com/user-attachments/assets/09233032-cffd-4eaa-9713-e31f2796d46b" />

## About The Project
### Languages Used: 
- [x] HTML
- [x] CSS
- [x] JavaScript.

### Setup
In your local environment, clone the repository. Make sure to pull changes to the repository before each work session to help avoid difficulties with merging changes when you push your changes to the GitHub repository. If you are using GitHub desktop, you can stash and restore the changes in your branch after pulling from the main repository to keep the work you have done while implementing the changes other team members have pushed to the main repository.

### Project Build
We have created the main sections for the webpage: Hero, About, Latest Movies, Classic Movies, Best Rated Movies, and a Random Movie Selector. The project keeps shared movie data in `data/movies-data.js`. Production scripts are placed in the `js` folder, test scripts are placed in the `scripts` folder, and demo pages are placed in the `demos` folder. `main.js` renders the movie cards dynamically, and `random-movie.js` shows a random movie in the modal when the Surprise Me button is clicked.

|             | Root contents | Subfolder contents |
| ----------- | ------------- | ------------------ |
| **Project** |               |                    |
|             | **css**       |                    |
|             |               | style.css          |
|             | **data**      |                    |
|             |               | movies-data.js     |
|             | **js**        |                    |
|             |               | main.js            |
|             |               | random-movie.js    |
|             | **scripts**   |                    |
|             |               | test JS files      |
|             | **demos**     |                    |
|             |               | movies-demo.html   |
|             | index.html    |                    |
|             | README.md     |                    |

_folders are in **bold**_

### CI / CD Diagram
<img width="2816" height="1536" alt="Final Project CI-CD Workfkow" src="https://github.com/user-attachments/assets/e6685221-2cec-4eb0-b8ff-c33a67e9f950" />
