import { useParams } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect } from 'react';

export default function Project() {
  // scroll to top when the project is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once on mount

  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <p>Project not found</p>


  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <div className="mb-8 text-sm text-gray-500">
            {project.type} • {project.start} - {project.end}
      </div>

      {/* Images */}
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        <img src={project.images[0]} alt="Showcase Image 1"
            className="row-span-2 rounded-2xl my-10 w-sm" />
        <img src={project.images[1]} alt="Showcase Image 1"
            className="row-span-1 rounded-2xl my-10 w-sm" />
        <img src={project.images[2]} alt="Showcase Image 1"
            className="row-span-1 rounded-2xl my-10 w-sm" />

      </div>
      

      <div className="flex flex-wrap gap-3 mb-8">
        {project.keywords.map((keyword) => (
          <span
            key={keyword}
            className="keyword"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="px-8 py-16 max-w-4xl mx-auto">


        {/* Overview */}
        <section className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
            {project.overview}
            </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-12">
            <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
            {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
            </ul>
        </section>

        {/* Challenges */}
        <section>
            <h2 className="text-xl font-semibold mb-3">Challenges</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
            {project.challenges.map((item, i) => (
                <li key={i}>{item.problem}  {item.solution} </li>
            ))}
            </ul>
        </section>

      </div>

    </article>
  )
}
