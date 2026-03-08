export default function SectionLabel({ children, textColor= "text-neutral-500"}) {
  return (
    <div className="flex items-center gap-4 mb-7">
      <span className={`text-md font-bold uppercase tracking-widest  whitespace-nowrap ${textColor}`}>
        {children}
      </span>
      <div className="flex-1 h-[2px] bg-neutral-300" />
    </div>
  );
}