import React from 'react';
import { Link } from 'react-router-dom';

// const surfReport = "assets/pexels-lukas-574071.jpg";
// import ledWall from "../assets/pexels-markus-spiske-1089440.jpg";
// import calculator from "../assets/pexels-tima-miroshnichenko-5380642.jpg";
// import pastelPuzzles from "../assets/pexels-markus-spiske-1921326.jpg";
// import runBuddy from "../assets/pexels-cottonbro-6804581.jpg";

const projects = [
    {
      title: "Book Reviews",
      image: '',
      page: "/Books",
    },
    {
      title: "Movie Reviews",
      image: '',
      page: "/Movies",
    },
    {
      title: "Game Reviews",
      image: '',
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