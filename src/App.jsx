import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Project from "./pages/Project.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import AllProjects from "./pages/AllProjects.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
  )
}