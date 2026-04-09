
export default function TimelineCard({ theme, entry, index, align }) {
	return (
		<div className={`flex flex-col gap-3 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
			<div>
				{/* Number */}
				<span className={`text-xs font-bold tracking-widest ${theme.text} block mb-1`}>
				{String(index + 1).padStart(2, "0")}
				</span>
				{/* Title */}
				<h3 className="text-base font-bold text-neutral-900 mb-1">{entry.title}</h3>
				{/* Text */}
				<p className="text-sm text-neutral-500 leading-relaxed">{entry.text}</p>
			</div>
			<img
				src={entry.image}
				alt={entry.title}
				className="w-full object-contain max-h-100"
			/>
		</div>
	);
}