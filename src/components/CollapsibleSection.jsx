import { useState } from "react";

export default function CollapsibleSection({ title, children, state=false }) {
  const [open, setOpen] = useState(state);

  return (
    <div className="ml-3 border-t py-1 border-neutral-600">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-4 text-neutral-700">
          {children}
        </div>
      )}
    </div>
  );
}