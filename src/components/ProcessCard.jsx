export default function ProcessCard({ label, color, children }) {
  // color is array of ["text-color-###", "border-color-###"]

  return (
    <div className={`bg-white rounded-2xl p-2 shadow-sm border-t-[3px] whitespace-pre-line ${color[1]}`}>
      <h3 className={`text-base pl-5 font-bold mt-2 mb-3 ${color[0]}`}>
        {label}
      </h3>
      {children}
    </div>
  );
}