import { useContext } from 'react'
import { BookingTimeContext } from './App'

function BookingForm() {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [bookingTime, setBookingTime] = bookingTimeContext
  return (
    <>
      <div className="booking-form">
        <p>
          {bookingTime.courtNumber} - {bookingTime.timeSlot}
        </p>
      </div>
    </>
  )
}

export default BookingForm
