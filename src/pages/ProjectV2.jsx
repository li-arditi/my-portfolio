import { useParams, useLocation, useNavigate } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect, useRef, useState } from 'react';

import SectionLabel from "../components/SectionLabel.jsx"
import ProcessCard from "../components/ProcessCard.jsx"
import PdfCarousel from "../components/PdfCarousel.jsx"
import Timeline from "../components/Timeline.jsx"
import ProjectHero from "../components/ProjectHero.jsx"



// store theme colors
const themes = {
	blue: { 
		default: {text: "text-blue-900", border: "border-blue-200", background: "bg-blue-400"},  
		lt: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},
		md: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},  
		dk:  {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},
	},
	violet: { 
		default: {text: "text-violet-900", border: "border-violet-200", background: "bg-violet-400"},  
		lt: {text: "text-violet-400", border: "border-violet-400", background: "bg-violet-400"},
		md: {text: "text-violet-600", border: "border-violet-600", background: "bg-violet-600"},  
		dk:  {text: "text-violet-800", border: "border-violet-800", background: "bg-violet-800"},
	},
	amber: { 
		default: {text: "text-amber-900", border: "border-amber-200", background: "bg-amber-400"},  
		lt: {text: "text-amber-500", border: "border-amber-400", background: "bg-amber-400"},
		md: {text: "text-amber-500", border: "border-amber-400", background: "bg-amber-400"},  
		dk:  {text: "text-amber-500", border: "border-amber-400", background: "bg-amber-400"},
	},
	coffee: { 
		default: {text: "text-yellow-900", border: "border-yellow-900", background: "bg-yellow-600"},  
		lt: {text: "text-yellow-600", border: "border-yellow-600", background: "bg-yellow-600"},
		md: {text: "text-yellow-700", border: "border-yellow-700", background: "bg-yellow-700"},  
		dk:  {text: "text-yellow-800", border: "border-yellow-800", background: "bg-yellow-800"},
	},
	teal: { 
		default: {text: "text-teal-900", border: "border-teal-900", background: "bg-teal-400"},  
		lt: {text: "text-teal-400", border: "border-teal-400", background: "bg-teal-400"},
		md: {text: "text-teal-600", border: "border-teal-600", background: "bg-teal-600"},  
		dk:  {text: "text-teal-800", border: "border-teal-800", background: "bg-teal-800"},
	},
	gray: { 
		default: {text: "text-gray-900", border: "border-gray-200", background: "bg-gray-400"},  
		lt: {text: "text-gray-400", border: "border-gray-400", background: "bg-gray-400"},
		md: {text: "text-gray-500", border: "border-gray-500", background: "bg-gray-500"},  
		dk:  {text: "text-gray-600", border: "border-gray-600", background: "bg-gray-600"},
	},
  
};

export default function Project() {


	// scroll to top when the project is opened
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []); // Empty dependency array ensures it runs only once on mount

	// handle which project to show
	const { slug } = useParams()
	const project = projects.find((p) => p.slug === slug)

	if (!project) return <p>Project not found</p>

	// handle back to project showcase
	const location = useLocation();
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);

		if (location.state?.scrollY !== undefined) {
			setTimeout(() => {
				window.scrollTo(0, location.state.scrollY);
			}, 0);
		}
	};

	// handle sidebar highlighting
	const [active, setActive] = useState('Overview');
	// handle scrolling to section
	const sectionHeaders = ["Overview", "Lessons Learned", "Roles and Responsibilities", "Process Details", "References"]
	const sectionRefs = useRef(sectionHeaders.map(() => null));

	useEffect(() => {
		let ready = false;
  		setTimeout(() => { ready = true; }, 100);
		const observer = new IntersectionObserver(
			entries => {
				if (!ready) return;
				
				entries.forEach(e => {
					console.log(e.target.id, e.isIntersecting);
					e.isIntersecting && setActive(e.target.id)
				})
					

			},
			{ 
				threshold: 0, rootMargin: "-15% 0px -40% 0px"}
		);
		sectionHeaders.forEach(id => {
			const el = document.getElementById(id);
			console.log(id, el); // should not be null
			if (el) observer.observe(el);
			
		});
		return () => observer.disconnect();
	}, []);
	
	// handle references scrolling

	const scrollToSection = (i) => {
		console.log(sectionRefs.current[i])
		sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
		// setActive(sectionRefs.current[i].id)
	};
	
	const projectTheme = project.theme ? themes[project.theme] : themes["gray"]

	return (
	<div id="page-content" className="bg-neutral-50 min-h-screen">
		{/* Header */}
		<ProjectHero project={project} />

		{/* Header Separation Line */}
		<div className="bg-neutral-700 h-1"></div>

		{/* back to project showcase */}
		<button
			onClick={handleBack}
			className="fixed z-50 bottom-4 m-2 p-3 text-sm text-neutral-800 font-sm bg-neutral-100 hover:text-neutral-400 transition-colors cursor-pointer rounded-full">
			← Back to Project Showcase
		</button>

		{/* Page Content */}
		<div id="scrollable-content" className="grid grid-cols-[220px_1fr] gap-5 items-start">
			{/* sidebar */}
			<aside className="sticky top-16 bg-neutral-600 pt-5 -mb-16 h-screen"> 
				<div className="flex flex-col gap-2">
					{/* section headers */}
					{sectionHeaders.map((section, i) => (
						/* Scroll to section in page */
						<button
							key={"section_" + i}
							onClick={e => { e.preventDefault(); document.getElementById(section).scrollIntoView({ behavior: 'smooth' }) }}
							className={`flex justify-between items-center cursor-pointer hover:bg-stone-200 hover:text-neutral-600 transition-colors px-3 py-2 text-sm font-medium text-neutral-400 text-left ${active == section ? "bg-neutral-200 text-neutral-600": "bg-neutral-600 text-neutral-400"}`}>
						<span>{section}</span>
						</button>
					))}
				</div>
				
			
			</aside>

			{/* Scrollable content */}
			<main className="">  
				{/* Page Content */}
				<div className="font-sans bg-neutral-50 min-h-screen px-5 pt-14 text-neutral-900 ">

					{/* Overview */}
					<section className="scroll-mt-20 px-5" 
						ref={el => sectionRefs.current[0] = el}
						id={sectionHeaders[0]}>
						<SectionLabel>{sectionHeaders[0]}</SectionLabel>
						{/* <div className={`bg-stone-200 -mx-5 px-5 mb-7 ${active == sectionHeaders[0] ? "sticky top-14 py-5 ": ""}`}>
							<SectionLabel>{sectionHeaders[0]}</SectionLabel>
						</div> */}
						
						{/* Goal */}
						<div className="mb-10">
							<ProcessCard label="Goal" color={[projectTheme.default.text, projectTheme.default.border]}>
								<p className="text-sm text-neutral-500 leading-relaxed px-10 pb-5">{project.objective}</p>
							</ProcessCard>
						</div>
						<div className="grid grid-cols-3 gap-6">
						{/* Context */}
						<ProcessCard label="Context" color={[projectTheme.lt.text, projectTheme.lt.border]}>
							<img src={project.context.src} alt={project.context.caption} className="aspect-auto mx-auto max-h-sm" />
						</ProcessCard>

						{/* Problem */}
						<ProcessCard label="Problem" color={[projectTheme.md.text, projectTheme.md.border]}>
							<img src={project.problem.src} alt={project.problem.caption} className="aspect-auto mx-auto" />
						</ProcessCard>

						{/* Outcome */}
						<ProcessCard label="Outcome" color={[projectTheme.dk.text, projectTheme.dk.border]}>
							<img src={project.outcome.src} alt={project.outcome.caption} className="aspect-auto mx-auto" />
						</ProcessCard>
						</div>

						{/* List of Team Members */}
						{project.teammembers && (<div className="mt-3 ml-3 text-neutral-400">
							{`Team Members: ${project.teammembers}, (Li Arditi)`}
						</div>)}
					</section>


					
					{/* Lessons Learned */}
					<section className="my-14 scroll-mt-20 px-5" 
						ref={el => sectionRefs.current[1] = el}
						id={sectionHeaders[1]}>
						{/* Section Header */}
						<SectionLabel textColor={projectTheme.md.text}>{sectionHeaders[1]}</SectionLabel>
						{/* <div className={`${active == sectionHeaders[0] ? "sticky top-14 bg-white": ""}`}>
							<SectionLabel textColor={projectTheme.md.text}>{sectionHeaders[1]}</SectionLabel>
						</div> */}
						
						<div className="flex flex-col divide-y divide-neutral-200 ">
						{project.lessons.map((m, i) => (
							<div
							key={i}
							className="grid grid-cols-[1fr_1.3fr] gap-10 items-center pb-10 pt-5 h-md"
							>
							<div className="flex flex-col gap-3">
								{/* Number */}
								<span className={`text-xs font-bold tracking-widest ${projectTheme.md.text}`}>
								{String(i + 1).padStart(2, "0")}
								</span>
								{/* Title */}
								<h3 className="pl-4 text-lg font-bold text-neutral-900">{m.title}</h3>
								{/* Body */}
								<p className="pl-4 text-sm text-neutral-600 leading-relaxed">{m.body}</p>
								{/* Tags */}
								<div className="pl-4 pt-3 flex flex-wrap gap-2">
									{m.keywords.map(tag => (
										<span key={tag} className={`text-xs  border rounded-full px-3 py-1 whitespace-nowrap shrink-0`}>
											{tag}
										</span>
									))}
								</div>
							</div>
							{/* Lesson Image */}
							<div className="">
								<div className="flex ">
									<img src={m.images[0].src} alt={m.images[0].caption} className={`max-h-70 aspect-auto  rounded-xl ring-2 ring-neutral-100 shadow-lg/70 bg-white mx-auto`} />
									
								</div>
							</div>
							
							</div>
						))}
						</div>
					</section>

					{/* Roles and responsibilities */}
					<section className="my-14 scroll-mt-20 px-5" 
						ref={el => sectionRefs.current[2] = el}
						id={sectionHeaders[2]}>
						<SectionLabel textColor={projectTheme.md.text}>{sectionHeaders[2]}</SectionLabel>
						<div className="flex flex-col divide-y divide-neutral-200">
						{project.responsibilities.map((m, i) => (
							<div
							key={"responsibility_" + i}
							className="grid grid-cols-[1fr_1.3fr] gap-10 items-center pb-10 pt-5 h-md"
							>
							<div className="flex flex-col gap-3 ">
								{/* Number */}
								<span className={`text-xs font-bold tracking-widest ${projectTheme.md.text}`}>
								{String(i + 1).padStart(2, "0")}
								</span>
								{/* Title */}
								<h3 className="pl-4 text-lg font-bold text-neutral-900">{m.title}</h3>
								{/* Body */}
								<p className="pl-4 text-sm text-neutral-600 leading-relaxed">{m.body}</p>
								{/* Tags */}
								<div className="pl-4 pt-3 flex flex-wrap gap-2">
									{m.keywords.map(tag => (
										<span key={tag} className={`text-xs  border rounded-full px-3 py-1 whitespace-nowrap shrink-0`}>
											{tag}
										</span>
									))}
								</div>
							</div>
							{/* Methods Image */}
								<div className="flex ">
									<img src={m.images[0].src} alt={m.images[0].caption} className={`mt-10 max-h-80 aspect-auto  rounded-xl ring-2 ring-neutral-100 shadow-lg/70 bg-white mx-auto`} />
									
								</div>
							
							</div>
						))}
						</div>
					</section>

					{/* Process Details */}
					<section className="my-14 scroll-mt-20 px-5" 
						ref={el => sectionRefs.current[3] = el}
						id={sectionHeaders[3]}>
						<SectionLabel textColor={projectTheme.dk.text}>{sectionHeaders[3]}</SectionLabel>
						<Timeline entries={project.timeline} theme={projectTheme.dk}/>
						{project.active && (
							<img src={import.meta.env.BASE_URL + "projects/MoreComingSoon.png"} alt={"In Progress"} className="mt-20 rounded-xl max-w-80 mx-auto" />
						)}
					</section>

					{/* Bloopers */}
					<section className="my-14 scroll-mt-20 hidden" 
						ref={el => sectionRefs.current[2] = el}
						id={sectionHeaders[2]}>
						<SectionLabel textColor={projectTheme.md.text}>{sectionHeaders[2]}</SectionLabel>
						<div className="flex flex-col divide-y divide-neutral-200">
						{project.responsibilities.map((m, i) => (
							<div
							key={"responsibility_" + i}
							className="grid grid-cols-[1fr_1.3fr] gap-10 items-center pb-10 scroll-mt-8"
							>
							<div className="flex flex-col gap-3 ">
								{/* Number */}
								<span className={`text-xs font-bold tracking-widest ${projectTheme.md.text}`}>
								{String(i + 1).padStart(2, "0")}
								</span>
								{/* Title */}
								<h3 className="text-lg font-bold text-neutral-900">{m.title}</h3>
								{/* Body */}
								<p className="text-sm text-neutral-600 leading-relaxed">{m.body}</p>
								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{m.keywords.map(tag => (
										<span key={tag} className={`text-xs  border rounded-full px-3 py-1 whitespace-nowrap shrink-0`}>
											{tag}
										</span>
									))}
								</div>
							</div>
							{/* Methods Image */}
							<div className="pt-10">
								<div className="flex ">
									<img src={m.images[0].src} alt={m.images[0].caption} className={`max-h-80 aspect-auto  rounded-xl ring-2 ring-neutral-100 shadow-lg/70 bg-white mx-auto`} />
									
								</div>
							</div>
							
							</div>
						))}
						</div>
					</section>

					{/* Video */}
					{/* <section className="mb-14">
						<SectionLabel>Video</SectionLabel>
						<div className="rounded-2xl overflow-hidden shadow-md bg-black">
						<iframe
							className="w-full aspect-video border-none block"
							src={`https://www.youtube.com/embed/${project.videoId}`}
							title="Project video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						</div>
					</section> 

					<hr className="border-neutral-200 mb-14" /> */}

					{/* References */}
					<section className="my-14 scroll-mt-20" 
						ref={el => sectionRefs.current[4] = el}
						id={sectionHeaders[4]}>
						<SectionLabel textColor={projectTheme.dk.text}>{sectionHeaders[4]}</SectionLabel>
						{/* PDF Carousel */}
					
						{project.pdfs.length > 0 && (
							<div id="presentations-section" className="">
								<div className={`text-md font-bold uppercase tracking-widest  whitespace-nowrap text-neutral-500`}>Presentations</div>
								<PdfCarousel pdfs={project.pdfs} />
							</div>
						)}
						
					</section>
					

					
				</div>
			</main>
		</div>
	</div>
	);
}
