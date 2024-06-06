import Timeslot from './Timeslot'
import { Booking } from '../../models/booking'
import { useContext } from 'react'
import { BookingTimeContext } from './App'
import type { TimeSlot } from '../../models/booking'

const times = [
  600, 630, 700, 730, 800, 830, 900, 930, 1000, 1030, 1100, 1130, 1200, 1230,
  1300, 1330, 1400, 1430, 1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830, 1900,
  1930, 2000, 2030, 2100, 2130,
]

interface Props {
  courtNumber: number
  courtBookings: Booking[]
}

function CourtColumn({ courtNumber, courtBookings }: Props) {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext

  // creates an array of booked timeslots
  const bookedTimeSlots = times.map((time) => {
    const isBooked = courtBookings.some(
      (booking) =>
        booking.start_time === time ||
        (booking.start_time < time && time < booking.end_time),
    )
    return { time, available: !isBooked }
  })

  // if clicked - then pass clicked property to update colour
  // -access state
  console.log(selectedTimes)
  const timeSlots = bookedTimeSlots.map((time) => {
    // selectedTimes.foreach((timeSlot) => if (timeSlot.))
    if (time.available === false) {
      return time
    }

    // console.log(time)
    const isClicked = selectedTimes.some(
      (timeSlot: TimeSlot) =>
        timeSlot.courtNumber === courtNumber &&
        Number(timeSlot.timeSlot) === time.time,
    )
    return { ...time, clicked: isClicked }
  })

  console.log(timeSlots)

  return (
    <>
      <div>
        {timeSlots.map((slot, i) => (
          <Timeslot
            key={`${courtNumber}:${slot.time}:${i}`}
            timeSlot={slot.time}
            courtNumber={courtNumber}
            available={slot.available}
            clicked={slot.clicked}
          />
        ))}
        {/* {times.map((slot, index) => {
          return (
            <Timeslot
              key={slot + courtNumber + index}
              timeSlot={slot}
              courtNumber={courtNumber}
            />
          )
        })} */}
      </div>
    </>
  )
}

export default CourtColumn
