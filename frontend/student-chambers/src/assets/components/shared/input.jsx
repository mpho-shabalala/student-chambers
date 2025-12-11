export default function Input({label_name,onChange, placeholder,name,value, type}){
    return (
        <div className="flex flex-col w-full">
            <label className="text-brand-purple mb-4" htmlFor="name">{label_name}</label>
            <input onChange={onChange} value={value} name={name} className="border-none rounded-full text-lg bg-gray-100 outline-1 outline-brand-purple px-4 py-2" placeholder={placeholder}></input>
        </div>
    )
}