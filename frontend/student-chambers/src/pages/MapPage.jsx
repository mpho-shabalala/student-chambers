import Footer from "../assets/components/shared/Footer";
import Header from "../assets/components/shared/Header";
import Loading from "../assets/components/shared/Loading";
import Error from "../assets/components/shared/Error";
import Map from "../assets/components/shared/Map";
import { useLocation } from '../contexts/LocationContext';
import { useEffect } from 'react';

export default function MapPage() {
  const { data: location, loading, error } = useLocation();

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [location]);

  // Placeholder images for now
  const placeholderImg = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80";

  return (
    <>
      <Header />
      <section className="section-padding max-w-container mx-auto px-4">
        <h1 className="text-4xl font-heading text-primary-blue pt-6 mb-6">
          Explore the location and utilities to navigate to and from the accommodation
        </h1>
		
        {loading && <Loading message={'Loading directions'} />}
        {error && <Error message={'Failed to load directions'} />}
		
        {location && (
          <>
            <div className="mb-8 z-0">
              <Map classname={"h-[360px]"} coordinates={location.data.coordinates } />
            </div>
	
            <div className="grid md:grid-cols-2 gap-8">
              {/* Maps Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-charcoal mb-4">
                  <i data-lucide="map" className="text-teal-600 w-6 h-6"></i> Maps
                </h3>
                <img src={placeholderImg} alt="Map preview" className="w-full h-48 object-cover rounded-lg mb-4" />
                <a
                  href={location.data.coordinates.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue font-semibold hover:text-teal-600 flex items-center gap-2"
                >
                  <i data-lucide="map-pin" className="text-teal-600 w-5 h-5"></i> Get location on Google Maps
                </a>
              </div>

              {/* Transport Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-charcoal mb-4">
                  <i data-lucide="bus" className="text-teal-600 w-6 h-6"></i>{'  '} Transport
                </h3>

                <div className="space-y-3">
                  <a href={location.data.coordinates.boltUrl} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-primary-blue hover:text-teal-600 font-semibold">
                    <i data-lucide="zap" className="text-teal-600 w-5 h-5"></i> Bolt ride
                  </a>

                  <a href={location.data.coordinates.uberUrl} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-primary-blue hover:text-teal-600 font-semibold">
                    <i data-lucide="truck" className="text-teal-600 w-5 h-5"></i> Uber ride
                  </a>

                  <a href={location.data.coordinates.transitDirections} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-primary-blue hover:text-teal-600 font-semibold">
                    <i data-lucide="train" className="text-teal-600 w-5 h-5"></i> Train ride
                  </a>
                </div>
              </div>

              {/* Directions Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm md:col-span-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-charcoal mb-4">
                  <i data-lucide="navigation" className="text-teal-600 w-6 h-6"></i> Directions
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <a href={location.data.coordinates.walkingDirections} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-primary-blue hover:text-teal-600 font-semibold bg-white p-3 rounded-lg shadow-sm transition">
                    <i data-lucide="footprints" className="text-teal-600 w-5 h-5"></i> Walking directions
                  </a>

                  <a href={location.data.coordinates.drivingDirections} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-primary-blue hover:text-teal-600 font-semibold bg-white p-3 rounded-lg shadow-sm transition">
                    <i data-lucide="car" className="text-teal-600 w-5 h-5"></i> Driving directions
                  </a>
                </div>
              </div>

            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
