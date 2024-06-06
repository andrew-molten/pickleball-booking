import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'

const BookingTimeContext = createContext({ courtNumber: 1, timeslot: '9:30' })

function App() {
  const [bookingTime, setBookingTime] = useState({
    courtNumber: 1,
    timeslot: '9:30',
  })
  return (
    <>
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
