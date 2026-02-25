import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group border border-neutral-200 shadow-md ring-1 ring-neutral-200 overflow-hidden hover:border-neutral-900 transition bg-neutral-50"
    >
      <div className="aspect-[12/10] bg-neutral-100 overflow-hidden ">
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
            (keyword, i) => {
				if (i < 6){
					return (<span key={keyword} className="keyword">
					{keyword}
					</span>)
				}
				else if (i == 6){
					return (<span key="dots" className="">...</span>)
				}

			}
          )}
        </div>
      </div>
    </Link>
  )
}
