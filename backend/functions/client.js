class Client{
    #units = []
    constructor(doc){
        this.doc = doc.data
    }


    // ----- ROOMS -----
    get units() {
        return this.doc.rooms.map(room => this.sanitizeRoom(room));
    }

   sanitizeRoom(room) {
        return {
            id: this.doc.id,
            propertyName: this.doc.name,

            unit_number: room.unit_number,
            type: room.type,
            en_suit: room.en_suit,

            // You already changed "display" → "images" so use that
            images: room.images,

            // Derived field
            availableSpaces: room.capacity - room.occupied,

            // Keep original if needed
            capacity: room.capacity,
            occupied: room.occupied,

            // Add location because it's useful for rendering
            location: this.doc.location
        };
    }

    // ----- LOCATION -----
     get location() {
        return this.sanitizeLocation(this.doc.location);
    }

    sanitizeLocation(loc) {
        const { address, coordinates } = loc; //destructure
        const { lat, lng } = coordinates;
       
        return {
            address: {
                street: address.street,
                suburb: address.suburb,
                city: address.city
            },
            coordinates: {
                lat,
                lng,
                googleMapsUrl: `https://www.google.com/maps?q=${lat},${lng}`,

                uberUrl: `https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=${lat}&dropoff[longitude]=${lng}`,

                boltUrl: `https://bolt.eu/ride/?to_lat=${lat}&to_lng=${lng}`,

                walkingDirections: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`,

                drivingDirections: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`,

                transitDirections: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=transit`,
                },
            // Derived convenience field for UI:
            fullAddress: `${address.street}, ${address.suburb}, ${address.city}`
        };
    }


    // ----- PROPERTY -----
    get property() {
        return this.sanitizeProperty(this.doc);
    }

    sanitizeProperty(doc) {
        return {
            id: doc.id,
            name: doc.name,
            totalUnits: doc.num_units,
            totalCapacity: doc.capacity,
            totalAvailable: doc.capacity - this.doc.rooms.reduce((acc, r) => acc + r.occupied, 0),
        };
    }

    // ----- CONTACTS -----
    get contacts() {
        return this.sanitizeContacts(this.doc.contacts);
    }

    sanitizeContacts(contacts) {
        const phone = contacts.phone || '';
        const whatsapp = contacts.whatsapp || '';
        const email = contacts.email || '';

        return {
            phone,
            whatsapp,
            email,
            // ready-to-use frontend links
            links: {
                tel: `tel:${phone}`,
                sms: `sms:${phone}`,
                whatsapp: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
                email: `mailto:${email}`
            }
        };
    }

    // ----- GALLERY -----
    get gallery(){
        return this.sanitizeGallery(this.doc.gallery, this.doc.rooms)
    }

    sanitizeGallery(gallery, rooms){
        return {
            gallery,
            rooms: rooms.flatMap(room => room.images)
        }
    }
}


module.exports = Client;