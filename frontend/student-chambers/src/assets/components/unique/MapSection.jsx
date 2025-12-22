import { useLocation } from "../../../contexts/LocationContext";
import InlineError from "../shared/InlineError";
import InlineLoader from "../shared/InlineLoader";
import { useEffect } from "react";
import Map from "../shared/Map";

export default function MapSection() {
  const { data: location, loading, error } = useLocation();
  useEffect(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, [location]);
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-container mx-auto px-4">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading text-primary-blue">
            Location & Accessibility
          </h2>
          <p className="mt-3 text-primary-charcoal">
            Student Chambers is located near campus with easy
            access to transport routes and walkable paths.
          </p>
        </div>

        {loading && <InlineLoader message="Loading directions" />}
        {error && <InlineError message="Failed to load directions" />}

        {location && (
          <div className="grid gap-10 md:grid-cols-2">

            {/* Map Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-primary-blue">
                  Map Overview
                </h3>
              </div>

              <div className="relative h-[360px]">
                <Map classname={'h-[360px]'} coordinates={location.data.coordinates} />
              </div>

              <div className="p-5">
                <a
                  href={location.data.coordinates.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline hover:text-secondary-teal"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">

              {/* Transport Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">
                <h3 className="mb-4 font-semibold text-lg font-semibold text-primary-charcoal flex">
                  Transport Options
                </h3>

                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={location.data.coordinates.boltUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue flex items-center font-medium hover:underline hover:text-secondary-teal"
                    >
                      <i data-lucide="zap" className="text-teal-600 w-5 h-5 mr-4"></i>Bolt ride
                    </a>
                  </li>
                  <li>
                    <a
                      href={location.data.coordinates.uberUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue flex items-center font-medium hover:underline hover:text-secondary-teal"
                    >
                      <i data-lucide="truck" className="text-teal-600 w-5 h-5 mr-4"></i>Uber ride
                    </a>
                  </li>
                  <li>
                    <a
                      href={location.data.coordinates.transitDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue flex items-center font-medium hover:underline hover:text-secondary-teal"
                    >
                      <i data-lucide="train" className="text-teal-600 w-5 h-5 mr-4"></i>Train ride
                    </a>
                  </li>
                </ul>
              </div>

              {/* Directions Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6">
                <h3 className="mb-4 font-semibold text-lg font-semibold text-primary-charcoal flex">
                  Directions
                </h3>

                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={location.data.coordinates.walkingDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue flex items-center font-medium hover:underline hover:text-secondary-teal"
                    >
                      <i data-lucide="footprints" className="text-teal-600 w-5 h-5 mr-4"></i>Walking directions
                    </a>
                  </li>
                  <li>
                    <a
                      href={location.data.coordinates.drivingDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-blue flex items-center font-medium hover:underline hover:text-secondary-teal"
                    >
                      <i data-lucide="car" className="text-teal-600 w-5 h-5 mr-4"></i>Driving directions
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
