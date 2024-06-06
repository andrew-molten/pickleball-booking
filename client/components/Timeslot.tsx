import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { useNavigate } from 'react-router-dom'

interface Props {
  timeSlot: string
  courtNumber: number
}

function Timeslot({ timeSlot, courtNumber }: Props) {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [bookingTime, setBookingTime] = bookingTimeContext
  const navigate = useNavigate()
  function handleClick() {
    setBookingTime({ courtNumber, timeSlot }) // pass values to form
    navigate('booking') // open form
  }

  return (
    <div className="time-slot">
      <button className="time-slot-btn" onClick={handleClick}></button>
    </div>
  )
}
export default Timeslot
