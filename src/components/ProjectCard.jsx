import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group rounded-3xl border border-neutral-200 overflow-hidden hover:border-neutral-900 transition"
    >
      <div className="aspect-[12/10] bg-neutral-100 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium flex justify-between">
          {project.title}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" />
        </h3>
        <p className="mt-2 text-neutral-600">{project.summary}</p>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-1">
                    {project.keywords.map(
                      (keyword) => (
                        <span key={keyword} className="keyword">
                        {keyword}
                        </span>
                      )
                    )}
                  </div>
      </div>
    </Link>
  )
}
