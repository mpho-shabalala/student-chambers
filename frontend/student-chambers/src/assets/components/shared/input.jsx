export default function Input({ label_name, onChange, placeholder, name, value, type = "text" }) {
    return (
        <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold" htmlFor={name}>
                {label_name}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-gray-100 rounded-lg px-4 py-2 text-lg border-none outline-none focus:outline-2 focus:outline-brand-purple transition"
            />
        </div>
    )
}
