import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects"
import { skills } from "../data/skills"
import ProjectCard from "../components/ProjectCard.jsx"
import HomeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"
import { useState } from 'react';

export default function Portfolio() {
    const [selectedSkill, setSelectedSkill] = useState(null); // state for skill selection and details
    const [quickViewProject, setQuickViewProject] = useState(null); // state for project quick view selection

  return (
    <div className="min-h-screen text-neutral-900 font-sans">
      {/* Header / Hero */}
      <header className="flex max-w-5xl mx-auto px-6 py-24">
        <div className="m-5">
            <span className="inline-block mb-4 rounded-full bg-neutral-900 text-neutral-50 px-4 py-1 text-sm">
            Available for work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I’m Li
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
                I'm excited to leverage my neuroscience, computer science, and biomedical engineering experience to solve biomedical challenges and help people live healthier and happier lives.        
            </p>
            <div className="flex gap-4 mt-8">
            <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-neutral-50 px-6 py-3 text-sm hover:bg-neutral-800 transition"
            >
                View Resume <ArrowUpRight size={16} />
            </a>
            <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm hover:border-neutral-900 transition"
            >
                Contact Me
            </a>
            </div>
        </div>
        {/* Profile picture */}
        <div>
            <img
                src={HomeImg}
                alt="Home Page Picture"
                className="rounded-full my-10 w-xs"
            />
        </div>
      </header>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-2">Skills</h2>
        <p className="text-sm text-neutral-600 mb-2 pl-1"> Click a Tag to see more details!</p>
        <div className="flex flex-wrap gap-3 mb-5">
            {Object.entries(skills).map(([tag,info]) => (
                <button
                    key={tag}
                    className={`tag ${selectedSkill === tag ? "active" : ""}`} // handles click/unclick of tag
                    onClick={(e) => {
                        e.preventDefault(); // prevents navigating to project page
                        setSelectedSkill(prev => (prev === tag ? null : tag)); // conditionally set state to handle skill info visualization
                    }}
                    >
                    {info.title}
                </button>
            ))}
        </div>
        
        {/* Skill More Info */}
        <div>
            {selectedSkill && skills[selectedSkill] && ( // only show if a skill is selected and have data for it
            <div className="h-100 overflow-y-auto mt-1 p-8 border border-gray-200 rounded-xl bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4">{skills[selectedSkill].title}</h2>

                {/* Skill Keywords */}
                <div className="flex flex-wrap gap-1">
                  {skills[selectedSkill].keywords.map(
                    (keyword) => (
                        <span key={keyword} className="keyword">
                        {keyword}
                        </span>
                    )
                  )}
                </div>
                  {/* Skill Experience/Evidence */}
                  <p className="text-gray-700 mb-6">{skills[selectedSkill].evidence}</p>
                
            </div>
            )}
        </div>
      </section>


      {/* Showcased Projects */}
      <section id="showcase" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-2"> Project Showcase</h2>
        <p className="text-sm text-neutral-600 mb-5 pl-1"> These are some examples of my diverse project experience. 
          You can explore all my projects -- big and small -- on the <span className="font-bold"> All Projects</span> page.
        </p>
        {/* Provide page for all projects */}
        <a
            href="#allprojects"
            className="inline-flex items-center rounded-xl bg-neutral-900 text-neutral-50 px-3 py-2 text-sm hover:bg-neutral-800 transition"
          >
            All Projects <ArrowUpRight size={16} />
        </a>

        <div className="grid gap-8 md:grid-cols-2 mt-6">
            {projects.map((p) => (
              p.showcased && ( // only show showcased projects
                <ProjectCard key={p.slug} project={p} />
              )
            ))}
        </div>
            
        
      </section>

      {/* About me */}
      <section id="aboutme" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Get to Know Me</h2>
        <p className="text-neutral-600 max-w-xl mb-4">
          I'm much more than just my "marketable" skills and professional and academic experiences. 
          I value supportive, collaborative work environments and I believe part of fostering one is getting to know your team as people.   
          You can learn more about me on a personal level on my <span className="font-bold"> About Me</span> page
        </p>
        <a
            href="#aboutme"
            className="inline-flex items-center rounded-xl bg-neutral-900 text-neutral-50 px-6 py-3 text-sm hover:bg-neutral-800 transition"
          >
            About Me <ArrowUpRight size={16} />
          </a>
       
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Let’s work together</h2>
        <p className="text-neutral-600 max-w-xl mb-10">
          Have a project in mind or just want to say hi? I’m always open to new ideas and collaborations.
        </p>
        <div className="flex gap-8 text-neutral-600">
          <a href="#" className="hover:text-neutral-900 transition"><Github /></a>
          <a href="#" className="hover:text-neutral-900 transition"><Linkedin /></a>
          <a href="mailto:you@example.com" className="hover:text-neutral-900 transition"><Mail /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-neutral-500 flex justify-between">
          <span> Li Arditi </span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  );
}
