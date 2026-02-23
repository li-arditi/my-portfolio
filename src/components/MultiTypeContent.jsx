export default function MultiTypeContent({ content }) {
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
		<div>
			{content.map((section, index) => {
				{/* Text Block */}
				if (section.type === "text") {
					return (
					<p key={"goal-" + index} className="text-neutral-700 whitespace-pre-line">
						{section.content}
					</p>
					);
				}

				{/* Image */}
				if (section.type === "image") {
					var className = `rounded-xl mx-auto ${section.width ? section.width : "w-md"}`
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
						<div key={section.title + index} className="flex gap-2 leading-6 mb-4">
							{/* bullet and bold title */}
							<div className="mr-1"> {section.style ? section.style : "•"}</div>
							<div className={section.title? "flex-none w-40 text-neutral-700 font-semibold": ""}>{section.title}</div>
							<div className={section.border ? section.border : ""}> {section.border ? "" : ":"}</div>
							
							{/* content of bullet */}
							<div  className="text-neutral-700 whitespace-pre-line">
								{section.content}
							</div>
							
						</div>
					
					);
				}

				{/* List */}
				if (section.type === "list") {
					return (
						<ol className="mx-10 mt-3 mb-5 font-light list-decimal">
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
					<h4 className="text-md mt-3 font-bold">
						{section.content}
					</h4>
					);
				}

				
				{/* Other */}
				return null;
			})}
		</div>
	)
}