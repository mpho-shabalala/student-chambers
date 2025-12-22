export default function RadioInput({ name, label_name, options, value, onChange }) {
    return (
        <div className="flex flex-col w-full mb-4">
            <span className="font-semibold mb-2">{label_name}</span>
            <div className="flex flex-col gap-2">
                {options.map((opt, idx) => (
                    <label
                        key={idx}
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition 
                            ${value === opt ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={opt}
                            checked={value === opt}
                            onChange={onChange}
                            className="accent-blue-500 rounded-lg"
                        />
                        <span className="text-sm font-medium">{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
