import { useParams, useLocation, useNavigate } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect } from 'react';

import MultiTypeContent from "../components/MultitypeContent"
import CollapsibleSection from "../components/CollapsibleSection"

export default function Project() {
	// scroll to top when the project is opened
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []); // Empty dependency array ensures it runs only once on mount

	// handle which project to show
	const { slug } = useParams()
	const project = projects.find((p) => p.slug === slug)

	if (!project) return <p>Project not found</p>

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


  return (
    <article className="max-w-4xl mx-auto py-15 px-5">
		<button onClick={handleBack} 
			className="pb-4 cursor-pointer text-gray-500 hover:text-blue-400">
			← Back
		</button>
		{/* Header */}
		<h1 className="text-4xl font-bold">{project.active ? project.title + "  (In Progress)" : project.title}</h1>
		<div className="text-sm text-gray-500">
				{project.type} • {project.start} - {project.end}
		</div>
		<div className="text-sm text-gray-500">
				Team of {project.teamsize}
		</div>
		<div className="text-md text-neutral-700 pt-5 px-5">
			{project.summary}
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
	   <div className="grid grid-flow-col grid-rows-1 gap-4 ">
			<img src={project.images[0]} className=" row-span-2 rounded-2xl my-10 w-full aspect-auto"></img>
			<img src={project.images[1]} className=" row-span-1 rounded-2xl my-10 w-full aspect-auto"></img>
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

		{/* Project Details */}
		<div className="py-8 max-w-4xl mx-auto">
			{/* Overview */}
			<section className="mb-12">
				<h2 className="text-xl font-semibold mb-3">Overview</h2>

				{/* Context */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Context</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							{project.context}
						</div>}
				/>
				
				{/* Problem Statement/Goal */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Technical Background</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							<MultiTypeContent content={project.background} />
						</div>
					}
				/>
				
				{/* Conclusion */}
				<CollapsibleSection 
					title={<h4 className="text-md font-semibold ml-3">Conclusion</h4>}
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							<MultiTypeContent content={project.conclusion} />
						</div>
					}
					state={true}
				/>
			</section>

			{/* Components */}
			<section className="mb-12 leading-5">
				<h2 className="text-xl font-semibold mb-3">Components</h2>
				<ol className="list-decimal list-inside list-[font-semibold]">
				{project.components.map((component, i) => (
					<li key={"component-"+i} className="font-semibold">
						<CollapsibleSection 
							title={<h4 className="text-md ml-3">{component.title}</h4>}
							children={
								<div className="whitespace-pre-line px-6 mb-5">
									{/* Componenet content */}
									<div className="ml-4">
										{/* Objective */}
										<h4 className="text-md mt-3">Objective</h4>
										<div className="ml-10 mb-6 font-normal text-neutral-700">
											{component.objective}
										</div>

										{/* Methods */}
										<h4 className="text-md mt-3">Methods</h4>
										<div className="ml-10 mb-6 font-normal">
											<MultiTypeContent content={component.methods} />
										</div>
										

										{/* Results */}
										<h4 className="text-md mt-3">Results</h4>
										<div className="ml-10 mb-6 font-normal">
											<MultiTypeContent content={component.results} />
										</div>
										
										{/* Documents */}
										<h4 className="text-md mt-3">Relevant Documents</h4>
										<div className="ml-10 mb-6 font-normal">
											<MultiTypeContent content={component.documents} />
										</div>
									</div>



								</div>
							}
						/>
					</li>

					
					
						
				))}
				</ol>

			</section>

			{/* Results */}
			{/* <section>
				<h2 className="text-xl font-semibold mb-3">Results</h2>
				<ol className="list-decimal list-inside">
				{project.results.map((step, i) => (
					
						<li key={"method-"+i}>
							<CollapsibleSection 
						title={<h4 className="text-md font-semibold ml-3">{step.title}</h4>}
						children={
							<div className="whitespace-pre-line px-6 mb-5 text-gray-700 ">
								<MultiTypeContent content={step.content} />
							</div>
						}
					/>
						</li>

					
					
						
				))}
				</ol>
				
				
			</section> */}

		</div>

    </article>
  	)
}
