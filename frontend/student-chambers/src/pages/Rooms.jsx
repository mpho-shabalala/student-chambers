import Footer from "../assets/components/shared/Footer";
import Header from "../assets/components/shared/Header";
import { useRooms } from '../contexts/RoomsContext';
import { useState, useEffect } from 'react';
import Loading from "../assets/components/shared/Loading";
import Error from "../assets/components/shared/Error";

export default function Rooms() {
  const { data: rooms, error, loading } = useRooms();
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  // Initialize filtered rooms when data loads
  useEffect(() => {
    if (rooms) {
      setFilteredRooms(rooms.data);
    }
  }, [rooms]);

  // Filter handlers
  const showAll = () => {
    setFilteredRooms(rooms.data);
    setCurrentFilter("all");
  };
  const showSingle = () => {
    setFilteredRooms(rooms.data.filter(room => room.type === "single"));
    setCurrentFilter("single");
  };
  const showSharing = () => {
    setFilteredRooms(rooms.data.filter(room => room.type === "sharing"));
    setCurrentFilter("sharing");
  };
  const showAvailable = () => {
    setFilteredRooms(rooms.data.filter(room => room.availableSpaces > 0));
    setCurrentFilter("available");
  };

  // Placeholder image for display
  const placeholderImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80";

  // Button classes helper
  const getButtonClass = (filterName) =>
    `px-4 py-2 rounded-md text-sm font-semibold transition ${
      currentFilter === filterName
        ? "bg-secondary-teal text-white"
        : "bg-gray-200 text-primary-charcoal hover:bg-gray-300"
    }`;

  return (
    <>
      <Header />

      <section className="section-padding max-w-container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-heading text-primary-blue pt-6 mb-2">
            ROOMS CATALOG AT STUDENT CHAMBERS
          </h1>
          <h4 className="text-base text-primary-charcoal">
            Below is a catalog of all the rooms available at Student chambers student accommodation
          </h4>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className={getButtonClass("all")} onClick={showAll}>All</button>
          <button className={getButtonClass("single")} onClick={showSingle}>Single</button>
          <button className={getButtonClass("sharing")} onClick={showSharing}>Sharing</button>
          <button className={getButtonClass("available")} onClick={showAvailable}>Available</button>
        </div>

        {/* Rooms grid */}
        {loading && <Loading message={'Loading rooms'}/>}
        {error && <Error message={'Failed to load rooms'}/>}
        {rooms && filteredRooms.length === 0 ? (
          <div className="text-center bg-yellow-100 text-primary-charcoal p-6 rounded-lg font-semibold">
            No rooms match your filter selection.
          </div>)
          :
          (<div className="grid gap-6 md:grid-cols-3">
            {filteredRooms.map(room => (
              <div key={room.id} className="card">
                <img
                  src={placeholderImage}
                  alt={`Room ${room.id}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div>
                  <p className="font-semibold text-primary-blue">Type: {room.type}</p>
                  <p className="text-sm text-primary-charcoal">
                    Available spaces: {room.availableSpaces}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        )}
      </section>

      <Footer />
    </>
  );
}
