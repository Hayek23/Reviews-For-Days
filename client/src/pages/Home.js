import React from 'react';
import { Link } from 'react-router-dom';

const bookLibrary = "assets/books.jpg";
const movieReel = "assets/movie.jpg";
const videoGame = "assets/videogame.jpg"

const styles = {
  navBar: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
  },
  navItem: {
    marginLeft: "2rem",
  },
};


const projects = [
    {
      title: "Book Reviews",
      image: bookLibrary,
      page: "/Books",
    },
    {
      title: "Movie Reviews",
      image: movieReel,
      page: "/Movies",
    },
    {
      title: "Game Reviews",
      image: videoGame,
      page: "/Games",
    },
];

function Home () {
    return (
      <div>
        <section id="Work" className="Work">
          <h2>Pick a review catagory!</h2>
        </section>
        <section id="container" className="container">
          {projects.map((project) => {
            return (
              <div className="box">
                {project.title}
                <Link to={project.page}><img src={project.image} alt={project.title} /></Link>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
  
  export default Home;