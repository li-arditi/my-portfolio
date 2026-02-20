import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
// DATA
import { projects } from "../data/projects"
import { skills } from "../data/skills"

// COMPONENTS
import ProjectCard from "../components/ProjectCard.jsx"
import HomeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"

// REACT
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Portfolio() {
	// scroll to top when home page is opened
		useEffect(() => {
			window.scrollTo(0, 0);
		}, []); // Empty dependency array ensures it runs only once on mount
	
	// handle skill selection and details
    const [selectedSkill, setSelectedSkill] = useState(null); 

	// handle project quick view selection
    const [quickViewProject, setQuickViewProject] = useState(null); 

	// handle copying email
	const [contactCount, setContactCount] = useState(0);
	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		if (contactCount <= 2) {
			await navigator.clipboard.writeText("liarditi@gmail.com");
			setCopied(true);
			setContactCount(contactCount + 1);
			setTimeout(() => setCopied(false), 2000);
		}
	};

	// handle navigating to project page
	const navigate = useNavigate();
	const handleNaviagte = (slug) => {
		navigate(`/project/${slug}`, {
			state: { scrollY: window.scrollY }
		});
	};

	


  	return (
    <div className="min-h-screen text-neutral-900 font-sans">
      	{/* Header / Hero */}
		<header className="flex max-w-5xl mx-auto px-6 pt-10">
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
					<a href= {import.meta.env.BASE_URL + "src/assets/personal/LA_resume.pdf"}
  						target="_blank"
  						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-neutral-50 px-6 py-3 text-sm hover:bg-neutral-800 transition">
						View Resume <ArrowUpRight size={16} />
					</a>
					<button onClick={handleCopy}
						className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm hover:border-neutral-900 transition">
						<Mail size={16} />
						{copied ? "Email Copied!" : "Contact Me"} 
					</button>
					
				</div>
				<div className="text-sm text-neutral-600 mt-3">
						{contactCount > 2 ? "Error in copying my email? My email is liarditi@gmail.com" : ""}
				</div>
				
			</div>
			{/* Profile picture */}
			<div>
				<img
					src={HomeImg}
					alt="Home Page Picture"
					className="rounded-full my-10 w-120"
				/>
			</div>
		</header>

		

		{/* Showcased Projects */}
		<section id="showcase" className="max-w-5xl mx-auto px-6 py-5">
			<h2 className="text-3xl font-semibold mb-2"> Project Showcase</h2>
			<p className="text-md text-neutral-600 mb-5 pl-1"> 
				These are some examples of my diverse project experience. You can explore all my projects -- big and small -- on my <span className="font-bold"> All Projects</span> page.
			</p>
			{/* Provide page for all projects */}
			<a href="#allprojects"
				className="inline-flex items-center rounded-xl bg-neutral-900 text-neutral-50 px-3 py-2 text-sm hover:bg-neutral-800 transition">
				All Projects <ArrowUpRight size={16} />
			</a>

			<div className="grid gap-8 md:grid-cols-3 mt-6">
				{projects.map((p) => (
					p.showcased && ( // only show showcased projects
						<ProjectCard key={p.slug} project={p} 
						onClick={() => handleClick(p.slug)}/>
					)
				))}
			</div>
		</section>

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
					<p className="whitespace-pre-line text-gray-700 m-6">{skills[selectedSkill].evidence}</p>
					
				</div>
				)}
			</div>
		</section>

		{/* About me */}
		<section id="aboutme" className="max-w-5xl mx-auto px-6 py-20">
			<h2 className="text-3xl font-semibold mb-6">Get to Know Me</h2>
			<p className="text-neutral-600 max-w-xl mb-4">
				I'm much more than just my "marketable" skills and professional and academic experiences. I value supportive, collaborative work environments and I believe part of fostering one is getting to know your team as people. You can learn more about me on a personal level on my <span className="font-bold"> About Me</span> page
			</p>
			<a href="#aboutme"
				className="inline-flex items-center rounded-xl bg-neutral-900 text-neutral-50 px-6 py-3 text-sm hover:bg-neutral-800 transition">
				About Me <ArrowUpRight size={16} />
			</a>
		
		</section>

		{/* What I'm looking for */}
		<section id="contact" className="max-w-5xl mx-auto px-6 py-20">
			<h2 className="text-3xl font-semibold mb-6">My Goals</h2>
			<p className="text-neutral-600 max-w-xl mb-10">
				As I'm entering the medical device industry from the construction industry, I am looking to further my exposure to all aspects of medical device development. One of my favorite aspects of biomedical engineering is the multidisciplinary nature of it. I look forward to using my diverse background while continuously learning and making a positive impact on the world.
			</p>
			
		</section>

		{/* Footer */}
		<footer className="border-t border-neutral-200 mt-20">
			<div className="max-w-5xl mx-auto px-6 py-10 text-sm text-neutral-500 flex justify-between">
			<span> Li Arditi </span>
			<span>Built with React, hosted by Github Pages</span>
			</div>
		</footer>
		</div>
	);
}
