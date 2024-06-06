import useBookings from '../hooks/useBookings.ts'
import Calendar from './Calendar.tsx'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'

const BookingTimeContext = createContext({ courtNumber: 1, timeslot: '9:30' })

function App() {
  const bookings = useBookings()

  // const { data: dailyBookings } = bookings.byDay(1721044800000)

  // THE FUNCTIONS BELOW WORK BUT INFINITELY, RECURSIVELY LOOP (SEE DATABASE FOR EVIDENCE)
  // bookings.del(String(14))
  // bookings.add({ court_id: 3, user_id: 6, date: new Date(1721044800000), start_time: 1100, end_time: 1200, gear_rental: true, price: 20, paid: true })

  const [bookingTime, setBookingTime] = useState({
    courtNumber: 1,
    timeslot: '9:30',
  })
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <Calendar />
      </div>
      <BookingTimeContext.Provider value={[bookingTime, setBookingTime]}>
        <div className="app">
          <Outlet />
        </div>
      </BookingTimeContext.Provider>
    </>
  )
}

export default App
export { BookingTimeContext }
