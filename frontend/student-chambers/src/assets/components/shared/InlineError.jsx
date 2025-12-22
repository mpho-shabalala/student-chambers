export default function InlineError({ message = "Failed to load content." }) {
  return (
    <div className="flex items-center gap-2 bg-red-100 text-primary-error rounded-md p-2 text-sm font-medium">
      <i className="fa fa-exclamation-circle"></i>
      <span>{message}</span>
    </div>
  );
}
