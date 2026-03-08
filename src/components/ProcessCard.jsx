export default function ProcessCard({ step, label, color, children }) {
  // color is array of ["text-color-###", "border-color-###"]

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border-t-[3px] whitespace-pre-line ${color[1]}`}>
      <span className="text-xs font-bold tracking-widest text-neutral-500">{step}</span>
      <h3 className={`text-base font-bold mt-2 mb-3 ${color[0]}`}>
        {label}
      </h3>
      {children}
    </div>
  );
}