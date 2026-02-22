import { useState } from "react";

export default function CollapsibleSection({ title, children,subtitle=null, state=false }) {
  const [open, setOpen] = useState(state);
  
  return (
    <div className="ml-3 border-t py-1 border-neutral-600">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <div className="flex">
            <h4 className="flex-none text-md font-semibold ml-3">{title}</h4>
            {subtitle ? <span className="px-2 font-normal">{subtitle}</span> : ""}
        </div>
        
        {/* <h4 className="text-md font-semibold ml-3">{title}</h4> */}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-4 mb-6 text-neutral-700">
          {children}
        </div>
      )}
    </div>
  );
}