import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import Navbar from "./Components/Navbar/Navbar";
import Blog from "./Components/Blog/Blog";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}

        <Route path="/portfolio/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
