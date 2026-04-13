export default function SectionLabel({ children, textColor= "text-neutral-500"}) {
  return (
    <div className="flex items-center gap-4 py-3 -mx-5">
      <span className={`text-xl font-bold uppercase tracking-widest  whitespace-nowrap ${textColor}`}>
        {children}
      </span>
      <div className="flex-1 h-[2px] bg-neutral-300" />
    </div>
  );
}

// <div className="sticky top-17 bg-neutral-50 flex items-center gap-4 py-3 -ml-15 -mr-10 px-15 z-10">