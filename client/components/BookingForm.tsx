import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { BookingData } from '../../models/booking'
import useBookings from '../hooks/useBookings'

function BookingForm() {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext

  return (
    <>
      <div className="booking-form">
        <span>
          Booking for: {user.given_name} {user.surname}{' '}
        </span>
        <form>
          {/* <label htmlFor="given_name">Given name</label>
          <input type="text" /> */}
          <label htmlFor="start-time">Start time</label>
          {/* drop down box with times (pre-selecting bookingTime.timeSlot) */}
          <label></label>
        </form>
        <p>
          {selectedTimes[0].courtNumber} - {selectedTimes[0].timeSlot}
        </p>
      </div>
    </>
  )
}

export default BookingForm

const user = {
  id: 1,
  auth0_id: 'whatdoesthislooklike',
  given_name: 'little',
  surname: 'pickle',
  email: 'baby.gherkin@gmail.com',
  phone: '00000000',
  is_admin: false,
}

// court_id: number
// user_id: number
// date: number
// start_time: number
// end_time: number
// gear_rental: boolean
// price: number
// paid: boolean
