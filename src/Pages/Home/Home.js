import React, { useEffect, useState } from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Blog from "../../Components/Blog/Blog";
import Contact from "../../Components/Contact/Contact";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Services from "../../Components/Services/Services";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Portfolio projects={projects}></Portfolio>
      <Blog/>
      <Contact></Contact>
    </div>
  );
};

export default Home;
