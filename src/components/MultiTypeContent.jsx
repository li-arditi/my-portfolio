
export default function MultiTypeContent({ content, className="" }) {
	/** content is an array of objects where object have structures:
	 * TEXT 
	 * {
            type: "text",
            content: 
                `However, insufficient traction is common due to improperly hung weights, insufficient countertraction resulting in the patient sliding down the bed, and the need to remove traction for scans because the traction apparatus is secured to the hospital bed.`
        }
	 * 
	 * IMAGE
	 * {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt text",
            caption: "Caption text",
            aspect: "16/9"
        },
	 * */
	return (
		<div className={className}>
			{content.map((section, index) => {
				{/* Text Block */}
				if (section.type === "text") {
					var className = "text-neutral-700 whitespace-pre-line "
					if(section.className){
						className += section.className
					}
					return (
					<p key={"goal-" + index} className={className}>
						{section.content}
					</p>
					);
				}

				{/* Image */}
				if (section.type === "image") {
					var className = `rounded-xl mx-auto ${section.className ? section.className : "w-md"}`
					return (
					<figure key={section.src} className="my-8 text-center">
						<img
							src={section.src}
							alt={section.alt}
							className={className}
						/>
						<figcaption className="text-sm text-neutral-500 mt-2">
							{section.caption}
						</figcaption>
					</figure>
					);
				}

				{/* Quote */}
				if (section.type === "quote") {
					return (
						<div key={section.by + index} className="mx-15 my-5 font-light">
							<div className="italic leading-6">
								"{section.content}"
							</div>
							{section.includeBy ? <div className="text-sm flex justify-end">- {section.by}</div>: <div></div>}
						</div>
					
					);
				}

				{/* Bullet */}
				if (section.type === "bullet") {
					return (
						<div key={section.title + index} className="flex leading-5 mb-6 border border-neutral-200 rounded-xl" dir="ltr">
							{/* bullet and bold title "•" */}
							<div className={`bg-neutral-50 p-6 rounded-l-xl ${section.border ? section.border : ""}`}>
								<div className=""> {section.style ? section.style : ""}</div>
								<div className={section.title? "flex-none w-40 text-neutral-700 font-semibold": ""}>{section.title}</div>
								
							</div>
							
							
							{/* content of bullet */}
							<div  className="text-neutral-700 whitespace-pre-line p-6">
								{section.content}
							</div>
							
						</div>
					
					);
				}

				{/* List */}
				if (section.type === "list") {
					return (
						<ol key={section.name + "_list"} className="mx-10 mt-3 mb-5 font-light list-decimal">
							{section.content.map((item, index) => {
								return (
									<li key={section.name + index} className="pl-3 mb-1 leading-5">
										{item}
									</li>)
							})}
							
						</ol>
					);
				}

				{/* Header */}
				if (section.type === "header") {
					return (
					<h4 key={"header" + index} className="text-md mt-3 font-semibold">
						{section.content}
					</h4>
					);
				}
				{/* url */}
				if (section.type === "url") {
					return (
					<a href={section.url} key={"url" + index}
						target="_blank"
						className="text-blue-600">
						{section.urlText ? section.urlText : section.url}
					</a>
					);
				}

				{/* iframe */}
				if (section.type === "iframe") {
					return (
					<iframe
						key={section.name + index}
						src={section.filepath + "#toolbar=0"}
						className="w-3/4 h-100 my-5 border-3 border-neutral-500"
					/>
					);
				}
				
				{/* Other */}
				return null;
			})}
		</div>
	)
}