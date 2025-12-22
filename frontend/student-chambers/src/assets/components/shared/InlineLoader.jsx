export default function InlineLoader({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-3 p-2">
      <div className="w-6 h-6 border-4 border-t-secondary-teal border-gray-300 rounded-full animate-spin"></div>
      <span className="text-sm text-primary-charcoal">{message}</span>
    </div>
  );
}
