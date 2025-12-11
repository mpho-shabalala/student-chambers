import React from "react"

export default function DropdownInput({ label, options, value,name, handleChange, placeholder }) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-brand-purple my-4">{label}</label>}
      <select
        value={value}
        onChange={handleChange}
        label_name="service"
        name={name}
        className="border-none rounded-full text-lg bg-gray-100 outline-1 outline-brand-purple px-4 py-2"
      >
        <option value="" disabled hidden>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-gray-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
