import TimelineCard from "../components/TimelineCard.jsx"

export default function Timeline({ entries, theme }) {
	// theme is the md entry {text: "", border: "", background: ""} in themes map of Project.jsx
	console.log(theme)
  	return (
    <div className="relative mt-20">
		{/* Center line */}
		<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />

		<div className="flex flex-col gap-0">
			{entries.map((entry, i) => {
			const isLeft = i % 2 === 0;
			return (
				<div key={i} className="relative grid grid-cols-2 gap-0 items-center">
				{/* Left side */}
				<div className={`${entry.margin ? entry.margin :"-my-6"} pr-10 ${isLeft ? "block" : "invisible"}`}>
					{isLeft && <TimelineCard theme={theme} entry={entry} index={i} align="right" />}
				</div>

				{/* Center dot */}
				<div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
					<div className={`w-3 h-3 rounded-full ${theme.background} border-2 border-white shadow-sm`} />
				</div>

				{/* Right side */}
				<div className={`${entry.margin ? entry.margin :"-my-6"} pl-10 ${!isLeft ? "block" : "invisible"}`}>
					{!isLeft && <TimelineCard theme={theme} entry={entry} index={i} align="left" />}
				</div>
				</div>
			);
			})}
		</div>
		</div>
	);
}