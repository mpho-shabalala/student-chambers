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
    <div className="searchable-dropdown" ref={containerRef}>
      <label>{label_name}</label>

      <div
        className="dropdown-control"
        onClick={() => setOpen((prev) => !prev)}
      >
        {value || "Select institution"}
      </div>

      {open && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="dropdown-search"
            autoFocus
          />

          <div className="dropdown-options">
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <div
                  key={opt}
                  className="dropdown-option"
                  onClick={() => {
                    onChange({
                      target: { name, value: opt }
                    });
                    setQuery("");
                    setOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))
            ) : (
              <div className="dropdown-no-results">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
