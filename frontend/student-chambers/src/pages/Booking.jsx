import BookingForm from "../assets/components/shared/bookingForm";
import Map from "../assets/components/shared/Map";
import { BookingFormProvider } from "../contexts/BookingContext";

export default function Booking() {
  return (
    <>
        <BookingFormProvider>
            <BookingForm/>
            <Map/>
        </BookingFormProvider>
    </>
  )
}
