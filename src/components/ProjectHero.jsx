
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function ProjectHero({project}) {
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

	return (
    <div className="relative p-10">
		{/* Hero Background Image */}
		<img src={project.heroBgImg} className="opacity-20 absolute inset-0 w-full h-full object-cover" />
		<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-white/40 to-white/0" />
		{/* Hero Content*/}
		<div className="relative bottom-0 max-w-6xl m-auto left-0 right-0 px-8 mt-6">
			{/* Back */}
			<button onClick={handleBack}
				className="relative text-sm text-neutral-700 font-medium hover:text-neutral-900 transition-colors mb-8">
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
  );
}