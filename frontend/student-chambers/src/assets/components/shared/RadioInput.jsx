

export default function RadioInput({name, label_name, options, value, onChange }) {
  return (
    <div>
        <label>{label_name}</label>
      {options.map((opt, idx) => (
        <label key={idx} style={{ display: "block", cursor: "pointer" }}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
