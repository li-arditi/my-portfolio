

import { useRef } from 'react';

export default function TOC() {
	const TOCHeaders = ["Overview", "Lessons Learned", "My Contributions", "Process Details", "References"]
	// handle scrolling to section
	const TOCRefs = useRef(project.methods.map(() => null));

	const scrollTo = (i) => {
		TOCRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return (
    <aside className={`w-full bg-neutral-500 z-50 sticky top-0`}>
      	<div className="flex flex-col gap-2">
			{TOCHeaders.map((section, i) => (
				/* Scroll to section in page */
				<button
					key={"section_" + i}
					onClick={() => scrollTo(i)}
					className="flex justify-between items-center bg-stone-100 hover:bg-stone-200 transition-colors rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 text-left">
				<span>{section}</span>
				</button>
			))}
		</div>
      
    </aside>
  );
}