export default function Loading({ message = "Loading..." }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-primary-White">
      {/* Spinning loader */}
      <div className="w-16 h-16 border-4 border-t-secondary-teal border-gray-300 rounded-full animate-spin mb-6"></div>
      <p className="text-lg text-primary-charcoal font-medium">{message}</p>
    </div>
  );
}
