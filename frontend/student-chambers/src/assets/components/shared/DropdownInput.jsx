import React, { useState, useRef, useEffect } from "react";

export default function DropdownInput({ label_name, options, value, name, handleChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col w-full mb-4 relative" ref={containerRef}>
      {label_name && <label className="mb-2 font-semibold">{label_name}</label>}

      {/* Dropdown control */}
      <div
        className="bg-gray-100 rounded-lg px-4 py-2 text-gray-900 text-lg border border-gray-300 cursor-pointer flex justify-between items-center focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{value || placeholder || "Select an option"}</span>
        <i
          className={`fa fa-chevron-down transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        ></i>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-300">
          {options.length > 0 ? (
            options.map((opt) => (
              <div
                key={opt}
                className={`px-4 py-2 cursor-pointer text-gray-900 hover:bg-blue-100 ${
                  value === opt ? "bg-blue-200 font-semibold" : ""
                }`}
                onClick={() => {
                  handleChange({ target: { name, value: opt } });
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
}
