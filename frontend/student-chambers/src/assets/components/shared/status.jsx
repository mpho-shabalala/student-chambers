
export default function Status({status, statusText}){
    return (
        <p className={`
            fixed bottom-5 right-5 px-6 py-4 text-white rounded-lg  border-l-8 font-bold
            ${status? 'border-l-brand-green bg-green-200 text-brand-green ' : 'border-l-brand-red bg-red-200 text-brand-red'}`}>
            {statusText}
        </p>

    )
}