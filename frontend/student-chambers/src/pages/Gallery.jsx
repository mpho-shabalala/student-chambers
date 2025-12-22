import Footer from "../assets/components/shared/Footer";
import Header from "../assets/components/shared/Header";
import InlineError from '../assets/components/shared/InlineError';
import InlineLoader from '../assets/components/shared/InlineLoader';
import { useGallery } from '../contexts/GalleryContext';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const { data: gallery, loading, error } = useGallery();
  
  const [filteredImages, setFilteredImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [batch, setBatch] = useState(12);
  const [activeFilter, setActiveFilter] = useState('All');
  const [allLoaded, setAllLoaded] = useState(false);

// Placeholder images for presentation
// const placeholderOdd = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80';  // odd
const placeholderOdd = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80';  // odd
const placeholderEven = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'; // even

  // Initialize filtered images
  useEffect(() => {
    if (gallery) {
      const all = [
        ...gallery.data.amenities,
        ...gallery.data.rooms,
        ...gallery.data.exterior
      ];
      setFilteredImages(all);
      setDisplayedImages(all.slice(0, 12));
      setBatch(12);
      setAllLoaded(all.length <= 12);
    }
  }, [gallery]);

  // Filter handlers
  const handleFilter = (filterName, images) => {
    setFilteredImages(images);
    setDisplayedImages(images.slice(0, 12));
    setBatch(12);
    setAllLoaded(images.length <= 12);
    setActiveFilter(filterName);
  };

  const showAll = () => handleFilter('All', [
    ...gallery.data.amenities,
    ...gallery.data.rooms,
    ...gallery.data.exterior
  ]);

  const showAmenities = () => handleFilter('Amenities', gallery.data.amenities);
  const showExterior = () => handleFilter('Exterior', gallery.data.exterior);
  const showRooms = () => handleFilter('Rooms', gallery.data.rooms);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (allLoaded || loading) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        const nextBatch = filteredImages.slice(displayedImages.length, displayedImages.length + 12);
        setDisplayedImages(prev => [...prev, ...nextBatch]);
        if (displayedImages.length + nextBatch.length >= filteredImages.length) {
          setAllLoaded(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedImages, filteredImages, allLoaded, loading]);

  return (
    <>
      <Header />

      <section className="section-padding max-w-container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-heading text-primary-blue pt-6 mb-2">
            STUDENT CHAMBER GALLERY
          </h1>
          <p className="text-base text-primary-charcoal">
            Browse images of rooms, amenities, and exterior spaces.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            className={`px-4 py-2 rounded-lg hover:opacity-90 transition ${
              activeFilter === 'All' ? 'bg-secondary-teal text-white' : 'bg-gray-200 text-primary-charcoal'
            }`}
            onClick={showAll}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg hover:opacity-90 transition ${
              activeFilter === 'Exterior' ? 'bg-secondary-teal text-white' : 'bg-gray-200 text-primary-charcoal'
            }`}
            onClick={showExterior}
          >
            Exterior
          </button>
          <button
            className={`px-4 py-2 rounded-lg hover:opacity-90 transition ${
              activeFilter === 'Amenities' ? 'bg-secondary-teal text-white' : 'bg-gray-200 text-primary-charcoal'
            }`}
            onClick={showAmenities}
          >
            Amenities
          </button>
          <button
            className={`px-4 py-2 rounded-lg hover:opacity-90 transition ${
              activeFilter === 'Rooms' ? 'bg-secondary-teal text-white' : 'bg-gray-200 text-primary-charcoal'
            }`}
            onClick={showRooms}
          >
            Rooms
          </button>
        </div>

        {/* Loading/Error */}
        {loading && <InlineLoader message="Loading gallery..." />}
        {error && <InlineError message="Failed to load gallery." />}

        {/* Masonry-like Gallery */}
        <div className="flex flex-wrap -mx-2">
          {displayedImages.map((_, i) => (
            <div key={i} className="px-2 mb-4 w-1/2 sm:w-1/3 md:w-1/4">
              <div
                className="overflow-hidden rounded-lg shadow-md transform transition hover:scale-105"
                style={{ height: i % 2 === 0 ? '260px' : '200px' }}
              >
                <img
                  src={i % 2 === 0 ? placeholderEven : placeholderOdd}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* End of gallery indicator */}
        {allLoaded && (
          <p className="text-center text-primary-charcoal font-semibold mt-4">
            You have reached the end of the gallery.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
