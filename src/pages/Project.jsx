import { useParams, useLocation, useNavigate } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect, useRef } from 'react';

import SectionLabel from "../components/SectionLabel.jsx"
import ProcessCard from "../components/ProcessCard.jsx"
import PdfCarousel from "../components/PdfCarousel.jsx"
import Timeline from "../components/Timeline.jsx"



// store theme colors
const themes = {
	blue: { 
		lt: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},  
		md: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},  
		dk:  {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},
	},
	violet: { 
		lt: {text: "text-violet-400", border: "border-violet-400", background: "bg-violet-400"},  
		md: {text: "text-violet-600", border: "border-violet-600", background: "bg-violet-600"},  
		dk:  {text: "text-violet-800", border: "border-violet-800", background: "bg-violet-800"},
	},
	amber: { 
		lt: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},  
		md: {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},  
		dk:  {text: "text-blue-500", border: "border-blue-400", background: "bg-blue-400"},
	},
	coffee: { 
		lt: {text: "text-yellow-600", border: "border-yellow-600", background: "bg-yellow-600"},  
		md: {text: "text-yellow-700", border: "border-yellow-700", background: "bg-yellow-700"},  
		dk:  {text: "text-yellow-800", border: "border-yellow-800", background: "bg-yellow-800"},
	},
	teal: { 
		lt: {text: "text-teal-400", border: "border-teal-400", background: "bg-teal-400"},  
		md: {text: "text-teal-600", border: "border-teal-600", background: "bg-teal-600"},  
		dk:  {text: "text-teal-800", border: "border-teal-800", background: "bg-teal-800"},
	},
	gray: { 
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

	// handle scrolling to method section
	const methodRefs = useRef(project.methods.map(() => null));

	const scrollTo = (i) => {
		methodRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	// handle adding the back button
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

	const projectTheme = project.theme ? themes[project.theme] : themes["gray"]
	console.log("projectTheme ", projectTheme.lt.text)

	return (
	<div className="relative min-h-screen">

		{/* Fixed background image */}
		<div
			className="fixed inset-0 -z-20"
			style={{
			backgroundImage: `url(${project.backgroundImg})`,
			backgroundRepeat: "repeat",
			backgroundSize: "auto",
			}}
		/>

		{/* Blur + dim overlay for background */}
		<div className="fixed inset-0 -z-10 bg-white/90" style={{ backdropFilter: "blur(12px)" }}/>

		{/* Page Content */}
		<div className="font-sans bg-neutral-50 min-h-screen max-w-6xl mx-auto px-20 pb-24 text-neutral-900 shadow-xl/50">
			{/* Hero */}
			<div className="relative max-w-6xl h-[550px] overflow-hidden -mx-20 pt-10">
				{/* Hero Background Image */}
				<img src={project.heroBgImg} className="opacity-30 absolute inset-0 w-full h-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray/40 to-gray/0" />
				{/* Hero Content*/}
				<div className="relative bottom-0 max-w-4xl mx-auto left-0 right-0 px-8 mt-6">
					{/* Back */}
					<button onClick={handleBack}
						className="relative -ml-25 text-sm text-neutral-700 font-medium hover:text-neutral-900 transition-colors mb-8">
						← Back
					</button>
					{/* Title/Summary */}
					<section className="grid grid-cols-2 gap-15 items-center mb-10">
						<div>
							{/* Title */}
							<h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-3">{project.title} {project.active ? "(In Progress)":""}</h1>
							{/* Type and date */}
							<p className="text-sm text-neutral-800 leading-4">{`${project.type} | ${project.start} - ${project.end}`}</p>
							{/* Team # */}
							<p className="text-sm text-neutral-800 leading-6">Team of {project.teamsize}</p>
							{/* Summary */}
							<p className="text-base text-neutral-900 leading-relaxed">{project.summary}</p>
						</div>
						<img
							src={project.thumbnail}
							alt="hero"
							className="ml-10 w-full aspect-[4/3] object-cover rounded-2xl shadow-lg/50"
						/>
					</section>

					{/* Tags — scrollable row below hero */}
					<section className="flex flex-wrap gap-2">
						{project.keywords.map(tag => (
						<span key={tag} className={`text-xs text-neutral-300 border rounded-full px-3 py-1`}>
							{tag}
						</span>
						))}
					</section>
				</div>
			</div>

			{/* Overview */}
			<section className="my-14">
				<SectionLabel >Project Overview</SectionLabel>
				<div className="grid grid-cols-3 gap-6">
				{/* Objective */}
				<ProcessCard step="01" label="Objective" color={[projectTheme.lt.text, projectTheme.lt.border]}>
					<p className="text-sm text-neutral-500 leading-relaxed">{project.objective}</p>
				</ProcessCard>

				{/* Methods */}
				<ProcessCard step="02" label="Methods" color={[projectTheme.md.text, projectTheme.md.border]}>
					<div className="flex flex-col gap-2">
					{project.methods.map((m, i) => (
						/* Scroll to section in page */
						<button
							key={i}
							onClick={() => scrollTo(i)}
							className="flex justify-between items-center bg-stone-100 hover:bg-stone-200 transition-colors rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 text-left">
						<span>{m.title}</span>
						<span className="text-xs text-neutral-300">↓</span>
						</button>
					))}
					</div>
				</ProcessCard>

				{/* Results */}
				<ProcessCard step="03" label="Results" color={[projectTheme.dk.text, projectTheme.dk.border]}>
					{typeof project.results[0] === "string" ? (
						<p className="text-sm text-neutral-500 leading-relaxed">{project.results}</p>
					) : (
						project.results.map((img, i) => (
						<div key={i} className="mb-3">
							<img src={img.src} alt={img.caption} className="max-h-50 rounded-lg aspect-auto mx-auto" />
							<div className="text-xs text-neutral-400 text-center">{img.caption}</div>
						</div>
						))
					)}
				</ProcessCard>
				</div>

				{/* Liat of Team Members */}
				{project.teammembers && (<div className="mt-3 ml-3 text-neutral-300">
					{`Team Members: ${project.teammembers}, (Li Arditi)`}
				</div>)}
			</section>


			
			{/* Methods */}
			<section className="my-14">
				<SectionLabel textColor={projectTheme.md.text}>Methods</SectionLabel>
				<div className="flex flex-col divide-y divide-neutral-200">
				{project.methods.map((m, i) => (
					<div
					key={i}
					ref={el => methodRefs.current[i] = el}
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


			{/* Timeline */}
			<section className="my-14">
				<SectionLabel textColor={projectTheme.dk.text}>Results Timeline</SectionLabel>
				<Timeline entries={project.timeline} theme={projectTheme.dk}/>
				{project.active && (
					<img src={import.meta.env.BASE_URL + "projects/MoreComingSoon.png"} alt={"In Progress"} className="mt-20 rounded-xl max-w-80 mx-auto" />
				)}
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

			{/* PDF Carousel */}
			
			{project.pdfs.length > 0 && (
				<section className="mb-14">
					<SectionLabel>Presentations</SectionLabel>
					<PdfCarousel pdfs={project.pdfs} />
				</section>
			)}

			
		</div>
	</div>
	);
}
