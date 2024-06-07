// import useBookings from '../hooks/useBookings.ts'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Nav from './Nav'

const BookingTimeContext = createContext() // working - figure out type error later
function App() {
  // const bookings = useBookings()
  // const { data: dailyBookings } = bookings.byDay(1721044800000)
  // const handleAddBooking = () => {
  //   bookings.add({ court_id: 3, user_id: 6, date: new Date(1721044800000).getTime(), start_time: 1100, end_time: 1200, gear_rental: true, price: 20, paid: true })
  // }
  // console.log(dailyBookings)

  const [selectedTimes, setSelectedTimes] = useState([])

  // selectedTimes = [{   courtNumber: 1, timeStart: '930'}]

  return (
    <>
      {/* <button onClick={handleAddBooking}>Add a booking</button> */}
      <Nav />
      <h1 className="text-3xl font-bold underline">Pickling</h1>
      <BookingTimeContext.Provider value={[selectedTimes, setSelectedTimes]}>
        <div className="app">
          <Outlet />
        </div>
      </BookingTimeContext.Provider>
    </>
  )
}

export default App
export { BookingTimeContext }
