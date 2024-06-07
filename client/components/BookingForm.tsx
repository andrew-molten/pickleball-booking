import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { BookingData, TimeSlot } from '../../models/booking'
import { times } from './CourtColumn'

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

function BookingForm() {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext

  const calendarDate = new Date(selectedTimes[0].date)
  const calDateObj = {
    year: calendarDate.getFullYear(),
    month: calendarDate.getMonth(),
    day: calendarDate.getDate(),
  }
  // console.log(calDateObj)

  // How to display the times selected - ideally for each value it will say:

  // Booked court 1 from {startTime} to {endTime}

  // get courtNumber[0] if there are any more of that number CourtNumber then find end time
  const courtOne: Date[] = []
  const courtTwo: Date[] = []
  const courtThree: Date[] = []
  const courtFour: Date[] = []

  // deconstruct time function to pass in as a date/time
  function getDateTime(time: string) {
    const mins = time.slice(-2)
    const hours = Number(time.slice(0, time.length - mins.length))
    // console.log(`time: ${time}, hours: ${hours}, mins: ${mins}`)

    const date = new Date(
      calDateObj.year,
      calDateObj.month,
      calDateObj.day,
      hours,
      Number(mins),
    )

    return date
  }

  selectedTimes.forEach((time) => {
    if (time.courtNumber === 1)
      courtOne.push({
        dateTime: getDateTime(String(time.timeSlot)),
        time: time.timeSlot,
      })
    if (time.courtNumber === 2)
      courtTwo.push(getDateTime(String(time.timeSlot)))
    if (time.courtNumber === 3)
      courtThree.push(getDateTime(String(time.timeSlot)))
    if (time.courtNumber === 4)
      courtFour.push(getDateTime(String(time.timeSlot)))
  })

  // for (let i = 0; i < courtOne.length; ) {

  // }

  // if time matches the times index and there is another time that also matches that
  courtOne.sort((a, b) => a.dateTime - b.dateTime)
  courtTwo.sort()
  courtThree.sort()
  courtFour.sort()

  const courtOneTimes = []

  function addTimeChunks(courtTimes, array) {
    const courtIndexes = []

    for (let i = 0; i < courtTimes.length; i++) {
      const index = times.indexOf(courtTimes[i].time)
      console.log(courtOneTimes)
      console.log(index === courtIndexes[courtIndexes.length - 1] + 1)

      if (i === courtIndexes.length - 1) {
        courtOneTimes.push([index])
      } else if (
        index === courtIndexes[courtIndexes.length - 1] + 1 ||
        courtIndexes.length === 0
      ) {
        courtIndexes.push(index)
        console.log(courtIndexes)
      } else {
        array.push(courtIndexes)
        console.log(courtOneTimes)
        courtIndexes.length = 0
      }

      // make the time slot
    }
    console.log(courtIndexes)
  }

  addTimeChunks(courtOne, courtOneTimes)
  console.log(courtOneTimes)

  // console.log(courtOne)
  // console.log(courtTwo)
  // console.log(courtThree)

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
        {selectedTimes.map((time) => (
          <p key={time.courtNumber + time.timeSlot}>
            {time.courtNumber} - {time.timeSlot}
          </p>
        ))}
      </div>
    </>
  )
}

export default BookingForm
