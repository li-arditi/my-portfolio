import { useParams } from "react-router-dom"
import { projects } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard.jsx"
import { useState } from 'react';

export default function AllProjects() {
  
  return (
    <section id="allProjects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">All Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
            ))}
          
        </div>

    </section>
  )
}