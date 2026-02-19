import { useParams } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect } from 'react';

import MultiTypeContent from "../components/MultitypeContent"
import CollapsibleSection from "../components/CollapsibleSection"

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
		<div className="text-sm text-gray-500">
				{project.type} • {project.start} - {project.end}
		</div>
		<div className="text-sm text-gray-500">
				Team of {project.teamsize}
		</div>

		{/* Images */}
		{/* <div className="grid grid-flow-col grid-rows-2 gap-4">
			{project.images.map((image, index) => {
				if (index == 0){
					return(
						<div className="row-span-2 rounded-2xl my-10 w-md">
							<img 
								key={"images-" + index}
								src={image.src} 
								alt={image.alt}
								 
							/>
						</div>
					)
				}
				else if (index < 2){
					return (
						<div className="row-span-1 rounded-2xl my-10 w-sm" >
							<img 
								key={"images-" + index}
								src={image.src} 
								alt={image.alt}
								
							/>
						</div>
					)
				}
				// else {
				// 	return (
				// 		<img 
				// 			src={image.src} 
				// 			alt={image.alt}
				// 			className="row-span-1 rounded-2xl my-10 w-sm" 
				// 		/>
				// 	)
				// }
				return null
			})}
			

		</div>
       */}
	   <div >
			<img src={project.thumbnail} className="rounded-2xl my-10 w-md mx-auto">
			
			</img>
	   </div>


		{/* Tags (Keywords) */}
		<div className="flex flex-wrap gap-3 mb-8">
			{project.keywords.map((keyword,i) => (
			<span
				key={"keywords-"+i}
				className="keyword"
			>
				{keyword}
			</span>
			))}
		</div>

		<div className="py-8 max-w-4xl mx-auto">
			{/* Overview */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold mb-3">Overview</h2>

				{/* Context */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Context</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-gray-700 leading-relaxed">
							{project.context}
						</div>}
				/>
				
				

				{/* Problem Statement/Goal */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Problem Statement and Goal</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-gray-700 leading-relaxed">
							<MultiTypeContent content={project.goal} />
						</div>
					}
				/>
				
				{/* Solution */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Solution</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-gray-700 leading-relaxed">
							<MultiTypeContent content={project.conclusion} />
						</div>
					}
					state={true}
				/>
				
				
			</section>

			{/* Responsibilities */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
				<ul className="px-6 space-y-2 list-disc list-inside text-gray-700">
					{project.responsibilities.map((item, i) => (
						<li key={"responsibilities-"+i}>{item}</li>
					))}
				</ul>
			</section>

			{/* Challenges */}
			<section>
				<h2 className="text-xl font-semibold mb-3">Challenges</h2>
				<ul className="px-6 space-y-2 list-disc list-outside text-gray-700">
					{project.challenges.map((item, i) => (
						<li key={"challenges-" + i}>
							<div className="whitespace-pre-line"><b>Problem: </b> {item.problem}</div>

							<div className="whitespace-pre-line"><b>Conclusion: </b> {item.solution}</div>
							
							
						</li>
					))}
				</ul>
				
				
			</section>

		</div>

    </article>
  	)
}
