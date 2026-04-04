import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Project from "./pages/ProjectV2.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import AllProjects from "./pages/AllProjects.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar";

export default function App() {
  return ( //[#f7f5f2] [#f7f5f2] neutral-50
    <div className="text-neutral-900 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/allprojects" element={<AllProjects className="bg-neutral-50" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
  )
}