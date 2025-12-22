export default function SecondaryBTN({ type, text, href, loading, handleSubmit }) {
  return (
    <button
      type={type || 'button'}
      onClick={loading ? undefined : handleSubmit}
      className={`w-full md:w-fit px-6 py-2 text-xl font-semibold rounded-lg transition 
        ${loading 
          ? 'bg-gray-400 text-white cursor-not-allowed' 
          : 'bg-secondary-teal text-white hover:bg-secondary-teal-dark'}
      `}
    >
      {loading ? 'Submitting...' : text}
    </button>
  )
}
