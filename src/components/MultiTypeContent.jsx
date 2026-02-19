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
					<p key={"goal-" + index} className="text-neutral-700 leading-relaxed whitespace-pre-line">
						{section.content}
					</p>
					);
				}

				{/* Image */}
				if (section.type === "image") {
					return (
					<figure key={"goal-"+index} className="my-8 text-center">
						<img
							src={section.src}
							alt={section.alt}
							className="w-md rounded-xl mx-auto"
						/>
						<figcaption className="text-sm text-neutral-500 mt-2">
							{section.caption}
						</figcaption>
					</figure>
					);
				}

				{/* Comparison */}
				if (section.type === "comparison") {
					return (
						<div className="grid gap-8 md:grid-cols-2 mt-6 text-gray-700">
						{/* {section.item1.map((item, i) => (
							<div>{item.problem}  {item.solution} </div>
							
						))} */}
						</div>
					
					);
				}
				
				{/* Other */}
				return null;
			})}
		</div>
	)
}