import useBookings from '../hooks/useBookings.ts'
import Calendar from './Calendar.tsx'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'

const BookingTimeContext = createContext({ courtNumber: 1, timeslot: '9:30' })

function App() {
  // const bookings = useBookings()
  // const { data: dailyBookings } = bookings.byDay(1721044800000)
  // const handleAddBooking = () => {
  //   bookings.add({ court_id: 3, user_id: 6, date: new Date(1721044800000).getTime(), start_time: 1100, end_time: 1200, gear_rental: true, price: 20, paid: true })
  // }
  // console.log(dailyBookings)

  const [bookingTime, setBookingTime] = useState({
    courtNumber: 1,
    timeslot: '9:30',
  })
  return (
    <>
      {/* <button onClick={handleAddBooking}>Add a booking</button> */}
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
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
