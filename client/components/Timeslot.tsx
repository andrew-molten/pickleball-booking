import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { useNavigate } from 'react-router-dom'
import type { TimeSlot, Booking } from '../../models/booking'

interface Props {
  timeSlot: number
  courtNumber: number
  available: boolean
}

interface SelectedTimes {
  timeSlot: number
  courtNumber: number
}

function Timeslot({ timeSlot, courtNumber, available }: Props) {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext
  const navigate = useNavigate()

  const timeSlotIndex = selectedTimes.findIndex(
    (element: TimeSlot) =>
      element.courtNumber === courtNumber &&
      Number(element.timeSlot) === timeSlot,
  )

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
      newTimes.push({ courtNumber, timeSlot })
      setSelectedTimes(newTimes)
      // console.log(selectedTimes)
      // setSelectedTimes(...selectedTimes, ...[{ courtNumber, timeSlot }])
      // console.log(selectedTimes)
    } // pass values to form
    else {
      const newSelectedTimes = [...selectedTimes]
      newSelectedTimes.splice(timeSlotIndex, 1)
      setSelectedTimes([...newSelectedTimes])
    }
    // if it's already selected

    // navigate('booking') // open form
  }

  // every time timeslot is clicked - it needs to:
  // change colour
  // update the state as a selected timeslot

  return (
    <div className={available === true ? 'time-slot' : 'time-slot booked'}>
      <button className="time-slot-btn" onClick={handleClick}></button>
    </div>
  )
}
export default Timeslot
