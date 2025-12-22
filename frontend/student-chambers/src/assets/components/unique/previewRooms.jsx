import { useRooms } from '../../../contexts/RoomsContext';
import InlineLoader from '../shared/InlineLoader'
import InlineError from '../shared/InlineError'
import { useEffect } from 'react';

export default function PreviewRooms() {
  const { data: rooms, loading, error, fetch } = useRooms();

  useEffect(() => {
    console.log(rooms);
  }, [rooms]);

   

  const featuredRooms = [0, 3, 6]; // indices of rooms to display
  return (
    <section className="section-padding bg-primary-White">
      <div className="max-w-container mx-auto px-4">
        <h2 className="text-3xl font-heading text-primary-blue mb-6">
          Featured Rooms
        </h2>
          {loading && <InlineLoader message={'Loading preview rooms'}/>}
          {error && <InlineError message={'Failed to load preview rooms'}/>}

        <div className="grid gap-6 md:grid-cols-3">
          {rooms &&
            featuredRooms.map((idx) => {
              const room = rooms.data[idx];
              if (!room) return null;

              return (
                <div
                  key={idx}
                  className="card flex flex-col overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'}
                    alt={`Room ${idx + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <ul className="flex flex-wrap gap-2 text-sm mb-2">
                      <li>{room.beds || 'Private room'}</li>
                      <li>{room.furnished ? 'Fully furnished' : 'Basic'}</li>
                      <li>Wi-Fi</li>
                    </ul>
                    <p className="text-sm font-semibold">
                      Availability: {room.availableSpaces > 0 ? `${room.availableSpaces} space(s)` : 'Fully Occupied'}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
