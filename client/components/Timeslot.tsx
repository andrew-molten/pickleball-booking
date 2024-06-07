import { useContext } from 'react'
import { BookingTimeContext } from './App'
import type { TimeSlot, Booking } from '../../models/booking'

interface Props {
  timeSlot: number
  courtNumber: number
  available: boolean
  clicked: boolean
  date: number
}

// interface SelectedTimes {
//   timeSlot: number
//   courtNumber: number
// }

function Timeslot({ timeSlot, courtNumber, available, clicked, date }: Props) {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext

  // const timeSlotIndex = selectedTimes.findIndex(
  //   (element: TimeSlot) =>
  //     element.courtNumber === courtNumber &&
  //     Number(element.timeSlot) === timeSlot,
  // )

  function handleClick() {
    // if it's a new booking
    const timeSlotIndex = selectedTimes.findIndex(
      (element: TimeSlot) =>
        element.courtNumber === courtNumber &&
        Number(element.timeSlot) === timeSlot,
    )
    if (timeSlotIndex === -1) {
      // const newValues = [{ courtNumber, timeSlot }]
      // setSelectedTimes((prevState: SelectedTimes) => {
      //   return [...prevState, ...newValues]
      // })
      const newTimes = [...selectedTimes]
      newTimes.push({ courtNumber, timeSlot, date })
      setSelectedTimes(newTimes) // set global state
    } else {
      const newSelectedTimes = [...selectedTimes]
      newSelectedTimes.splice(timeSlotIndex, 1)
      setSelectedTimes([...newSelectedTimes])
    }
  }

  // if clicked change colour - yellow

  return (
    <div className={available === true ? 'time-slot' : 'time-slot booked'}>
      <button
        className={clicked ? 'time-slot-btn clicked' : 'time-slot-btn'}
        onClick={handleClick}
      ></button>
    </div>
  )
}
export default Timeslot
