import useBookings from '../hooks/useBookings.ts'
import Calendar from './Calendar.tsx'

function App() {

  const bookings = useBookings()

  // const { data: dailyBookings } = bookings.byDay(1721044800000)
  
    // THE FUNCTIONS BELOW WORK BUT INFINITELY, RECURSIVELY LOOP (SEE DATABASE FOR EVIDENCE)
    // bookings.del(String(14))  
    // bookings.add({ court_id: 3, user_id: 6, date: new Date(1721044800000), start_time: 1100, end_time: 1200, gear_rental: true, price: 20, paid: true })
  
  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <Calendar />
      </div>
    </>
  )
}

export default App
