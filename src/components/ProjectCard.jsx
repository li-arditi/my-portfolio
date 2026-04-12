import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <Link
      	to={`/projects/${project.slug}`}
      	className={`group overflow-hidden hover:border-neutral-900 transition bg-neutral-50 rounded-xl`}
    >
		{/* Background image */}
		<img
			src={project.thumbnail}
			alt={project.title}
			className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 rounded-xl border border-neutral-300"
		/>

		{/* Default overlay — always visible, fades out on hover */}
		<div className="absolute inset-0 bg-gradient-to-t from-black/90 from-25% via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0  rounded-xl" />

		{/* Hover overlay — slides up on hover */}
		<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

		{/* Default state — title + tags pinned to bottom */}
		<div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 rounded-xl">
			<h3 className="text-white font-bold text-sm leading-tight mb-2">{project.title}</h3>
			<div className="flex flex-wrap gap-1">
			{project.keywords.map(t => (
				<span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/40 text-white/90">
				{t}
				</span>
			))}
			</div>
		</div>

		{/* Hover state — centered summary slides up */}
		<div className="absolute inset-0 flex flex-col justify-center p-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-xl">
			<h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
			<p className="text-white/80 text-xs leading-relaxed mb-4">{project.summary}</p>
			<div className="flex flex-wrap gap-1">
			{project.keywords.map(t => (
				<span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/40 text-white/90">
				{t}
				</span>
			))}
			</div>
			<span className="text-white/60 text-xs mt-4 font-medium">View project →</span>
		</div>
      
    </Link>
  )
}
