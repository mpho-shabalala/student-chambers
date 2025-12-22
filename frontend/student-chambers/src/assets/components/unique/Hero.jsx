
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="
        relative h-[70vh] flex items-center
        bg-cover bg-center
        bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2')]
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4">
        <h1 className="text-primary-White mb-2">
          YOUR HOME NEAR CAMPUS
        </h1>
        <p className="text-primary-White mb-6 text-lg">Affordable, safe, and comfortable student accommodation designed for focused living.</p>
        <Link href="/#/rooms" className="btn-primary">
          See Rooms
        </Link>
      </div>
    </section>
  );
}
