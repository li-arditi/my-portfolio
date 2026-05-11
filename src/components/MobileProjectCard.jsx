import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
  return (
    <Link
		to={`/projects/${project.slug}`}
		className="block rounded-xl overflow-hidden border border-neutral-300 bg-neutral-900 h-full"
    >
      {/* Image */}
	  
      <div className="relative w-full h-60">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
		{/* Transition */}
		<div className="absolute h-60 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-black/20 to-neutral-900" />
      </div>


      {/* Info below image */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-xs leading-relaxed mb-4">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.keywords.map(t => (
            <span
              key={t}
              className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/40 text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="text-white/60 text-xs mt-4 font-medium">View project →</span>
      </div>
    </Link>
  );
}
