import { useEffect, useRef, useState } from "react";

export default function SearchableDropdownInput({
  name,
  label_name,
  options = [],
  value,
  onChange,
  placeholder = "Search..."
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  // close when clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col w-full mb-4 relative" ref={containerRef}>
      <label className="text-sm font-medium text-gray-700 mb-2">{label_name}</label>

      <div
        className={`w-full bg-gray-100 rounded-lg px-4 py-2 cursor-pointer border border-gray-300 flex justify-between items-center ${open ? "ring-2 ring-blue-400" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "Select institution"}
        </span>
         <i
          className={`fa fa-chevron-down transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        ></i>
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 text-sm border-b border-gray-200 outline-none"
            autoFocus
          />

          <div className="flex flex-col">
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <div
                  key={opt}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100 rounded-lg"
                  onClick={() => {
                    onChange({ target: { name, value: opt } });
                    setQuery("");
                    setOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
