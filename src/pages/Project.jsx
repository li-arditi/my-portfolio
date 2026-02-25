import { useParams, useLocation, useNavigate } from "react-router-dom"
import { projects } from "../data/projects.js"
import { useEffect } from 'react';

import MultiTypeContent from "../components/MultitypeContent"
import CollapsibleSection from "../components/CollapsibleSection"
import PDFViewer from "../components/PDFViewer";

// handle 

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
    <article className="max-w-7xl mx-auto py-15 px-15">
		<button onClick={handleBack} 
			className="pb-4 cursor-pointer text-gray-500 hover:text-blue-400">
			← Back
		</button>
		{/* Header */}
		<h1 className="text-4xl font-bold">{project.active ? project.title + "  (In Progress)" : project.title}</h1>
		<div className="text-neutral-500 text-md mt-2">
				{project.type} • {project.start} - {project.end}
		</div>
		<div className="text-sm text-gray-500">
				Team of {project.teamsize}
		</div>
		

		{/* Images */}
		<div className="bg-neutral-200 my-10">
			<img src={project.images[0]} className="max-h-100 w-full rounded-lg object-contain mx-auto shadow-sm ring-1 ring-neutral-200"  />
	   	{/* <div className="grid md:grid-cols-2 gap-10 items-start my-10">
			<div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 p-4">
				<img src={project.images[0]} className="rounded-xl w-full object-contain"  />
			</div> */}
			{/* <div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 p-4">
				<img src={project.images[1]} className="rounded-xl w-full object-contain"></img>
			</div> */}
	   </div>


		{/* Tags (Keywords) */}
		<div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 p-8">
			<h2 className="text-xl font-semibold mb-6">Keywords</h2>
			<div className="flex flex-wrap gap-3 my-8">
				{project.keywords.map((keyword,i) => (
				<span
					key={"keywords-"+i}
					className="keyword"
				>
					{keyword}
				</span>
				))}
			</div>
		</div>
		

		{/* Project Details */}
		<div className="py-8 mx-auto">
			{/* Overview */}
			<section className="mb-12  leading-5">
				<div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 p-8">
				<h2 className="text-xl font-semibold mb-3">Overview</h2>
				<div className="text-neutral-600 text-md mb-10 ml-6 max-w-3xl">
					{project.summary}
				</div>
				{/* Context */}
				<CollapsibleSection 
					title="Context"
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							{project.context}
						</div>}
				/>
				
				{/* Technical Backgroung */}
				<CollapsibleSection 
					title="Technical Background"
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							<MultiTypeContent content={project.background} />
						</div>
					}
				/>
				
				{/* Conclusion */}
				<CollapsibleSection 
					title="Conclusion"
					children={
						<div className="whitespace-pre-line px-6 mb-5 text-neutral-700 leading-5">
							<MultiTypeContent content={project.conclusion} />
						</div>
					}
					state={true}
				/>
				</div>
			</section>

			{/* Components */}
			<section className="mb-12 leading-5">
				<div className="rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 p-8">
				<h2 className="text-xl font-semibold mb-6">Components</h2>
				
				{project.components.map((component, i) => (
					<div key={"component-"+i} className="">
						<CollapsibleSection 
							title={component.title}
							// title={<h4 className="text-md font-semibold ml-3">{component.title}</h4>}
							subtitle={component.subtitle}
							children={
								<div className="whitespace-pre-line px-6 mb-5">
									{/* Componenet content */}
									<div className="ml-4">
										{/* Objective */}
										<h4 className="text-md mt-3 font-semibold mb-5">Objective</h4>
										<div className="ml-10 mb-10 text-neutral-700">
											<MultiTypeContent content={component.objective} />
										</div>

										{/* Methods */}
										<h4 className="text-md mt-3 font-semibold mb-5">Methods</h4>
										<div className="ml-10 mb-10">
											<MultiTypeContent content={component.methods} />
										</div>
										

										{/* Results */}
										<h4 className="text-md mt-3 font-semibold mb-5">Results</h4>
										<div className="ml-10 mb-10">
											<MultiTypeContent content={component.results} />
										</div>
										
										{/* Documents */}
										{/* {component.documents.length > 0 && (
											<div>
												<h4 className="text-md mt-3">Relevant Documents</h4>
												<div className="ml-10 mb-6 font-normal">
													
													
												</div>
											</div>
										)} */}
										
									</div>



								</div>
							}
						/>
					</div>

					
					
						
				))}
				
				</div>
			</section>

			

		</div>

    </article>
  	)
}
