import ProjectCard from "./ProjectCard2";

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);

  const go = (dir) => {
    const next = Math.max(0, Math.min(projects.length - 1, active + dir));
    setActive(next);
    setExpanded(null);
  };

  // offset centers the active card
  const offset = active * (CARD_W + GAP);

  return (
    <div className="font-sans bg-stone-50 min-h-screen flex flex-col items-center justify-center py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Projects</h1>
        <p className="text-neutral-400 text-sm mt-2">A selection of engineering work</p>
      </div>

      {/* Carousel viewport — wider than one card so neighbours peek in */}
      <div className="overflow-hidden w-full" style={{ maxWidth: CARD_W + (CARD_W / 2) }}>
        <div
          className="flex transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
          style={{ gap: GAP, transform: `translateX(-${offset}px)` }}
        >
          {projects.map((p, i) => (
            <Card
              key={i}
              project={p}
              active={i === active}
              expanded={expanded === i}
              onExpand={() => setExpanded(expanded === i ? null : i)}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-8">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={active === 0}
          className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-500 hover:bg-neutral-50 disabled:opacity-30 transition-colors"
        >←</button>

        <div className="flex gap-2 items-center">
          {projects.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => { setActive(i); setExpanded(null); }}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-3 h-3 bg-neutral-800" : "w-2 h-2 bg-neutral-300"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          disabled={active === projects.length - 1}
          className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-500 hover:bg-neutral-50 disabled:opacity-30 transition-colors"
        >→</button>
      </div>
    </div>
  );
}