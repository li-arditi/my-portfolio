import { useParams } from "react-router-dom"
import { projects } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard.jsx"
import { useState, useEffect } from 'react';

export default function AllProjects() {
  	// scroll to top when the project is opened
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []); // Empty dependency array ensures it runs only once on mount
  
  return (
    <section id="allProjects" className="bg-neutral-50">
		<div className="max-w-5xl mx-auto px-6 py-15">
        <h2 className="text-3xl font-semibold mb-12">All Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
          
        </div>
		</div>

    </section>
  )
}