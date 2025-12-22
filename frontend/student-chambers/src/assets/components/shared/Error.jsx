export default function Error({ message = "Something went wrong!" }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      {/* Error icon */}
      <div className="text-6xl text-primary-error mb-6">
        <i className="fa fa-exclamation-triangle"></i>
      </div>
      <p className="text-xl text-primary-error font-bold text-center max-w-md">{message}</p>
    </div>
  );
}
