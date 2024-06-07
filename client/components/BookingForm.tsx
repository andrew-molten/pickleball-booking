import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { BookingData, TimeSlot } from '../../models/booking'
import { times } from './CourtColumn'
import useBookings from '../hooks/useBookings'

const user = {
  id: 1,
  auth0_id: 'whatdoesthislooklike',
  given_name: 'little',
  surname: 'pickle',
  email: 'baby.gherkin@gmail.com',
  phone: '00000000',
  is_admin: false,
}

function BookingForm() {
  const bookingTimeContext = useContext(BookingTimeContext)
  const [selectedTimes, setSelectedTimes] = bookingTimeContext
  const bookings = useBookings()

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
      courtTwo.push({
        dateTime: getDateTime(String(time.timeSlot)),
        time: time.timeSlot,
      })
    if (time.courtNumber === 3)
      courtThree.push({
        dateTime: getDateTime(String(time.timeSlot)),
        time: time.timeSlot,
      })
    if (time.courtNumber === 4)
      courtFour.push({
        dateTime: getDateTime(String(time.timeSlot)),
        time: time.timeSlot,
      })
  })

  // for (let i = 0; i < courtOne.length; ) {

  // }

  // if time matches the times index and there is another time that also matches that
  courtOne.sort((a, b) => a.dateTime - b.dateTime)
  courtTwo.sort()
  courtThree.sort()
  courtFour.sort()

  const courtOneTimes = []
  const courtTwoTimes = []
  const courtThreeTimes = []
  const courtFourTimes = []

  function addTimeChunks(courtTimes, array) {
    const courtIndexes = []

    for (let i = 0; i < courtTimes.length; i++) {
      const index = times.indexOf(courtTimes[i].time)

      if (i === courtTimes.length - 1) {
        if (courtIndexes.length > 0) {
          array.push([...courtIndexes])
        } else {
          courtOneTimes.push([index])
        }
      } else if (
        index === courtIndexes[courtIndexes.length - 1] + 1 ||
        courtIndexes.length === 0
      ) {
        courtIndexes.push(index)
      } else {
        array.push([...courtIndexes])
        courtIndexes.length = 0
        courtIndexes.push(index)
      }
    }
  }

  addTimeChunks(courtOne, courtOneTimes)
  addTimeChunks(courtTwo, courtTwoTimes)
  addTimeChunks(courtThree, courtThreeTimes)
  addTimeChunks(courtFour, courtFourTimes)
  console.log(courtOneTimes)
  console.log(courtTwoTimes)
  console.log(courtThreeTimes)
  console.log(courtFourTimes)

  // console.log(courtOne)
  // console.log(courtTwo)
  // console.log(courtThree)

  // const user = {
  //   id: 1,
  //   auth0_id: 'whatdoesthislooklike',
  //   given_name: 'little',
  //   surname: 'pickle',
  //   email: 'baby.gherkin@gmail.com',
  //   phone: '00000000',
  //   is_admin: false,
  // }
  async function handleBookingClick() {
    const bookingObj = {
      court_id: 1,
      user_id: user.id,
      date: selectedTimes[0].date,
      start_time: times[courtOneTimes[0][0]],
      end_time: times[courtOneTimes[0][courtOneTimes[0].length - 1]],
      gear_rental: false,
      price: 100,
      paid: false,
    }
    bookings.add(bookingObj)
  }

  // court_id: number
  // user_id?: number
  // date: number
  // start_time: number
  // end_time: number
  // gear_rental: boolean
  // price: number
  // paid: boolean

  return (
    <>
      <div className="booking-form">
        <span>
          Booking for: {user.given_name} {user.surname}{' '}
        </span>

        {courtOneTimes.length > 0 ? (
          <h3>
            <strong>Court One times</strong>
          </h3>
        ) : (
          ''
        )}
        {courtOneTimes.map((time, i) => (
          <p key={i}>
            {times[time[0]]} until {times[time[time.length - 1]]}
          </p>
        ))}
        {courtTwoTimes.length > 0 ? (
          <h3>
            <strong>Court Two times</strong>
          </h3>
        ) : (
          ''
        )}
        {courtTwoTimes.map((time, i) => (
          <p key={i}>
            {times[time[0]]} until {times[time[time.length - 1]]}
          </p>
        ))}
        {courtThreeTimes.length > 0 ? (
          <h3>
            <strong>Court Three times</strong>
          </h3>
        ) : (
          ''
        )}
        {courtThreeTimes.map((time, i) => (
          <p key={i}>
            {times[time[0]]} until {times[time[time.length - 1]]}
          </p>
        ))}
        {courtFourTimes.length > 0 ? (
          <h3>
            <strong>Court Four times</strong>
          </h3>
        ) : (
          ''
        )}
        {courtFourTimes.map((time, i) => (
          <p key={i}>
            {times[time[0]]} until {times[time[time.length - 1]]}
          </p>
        ))}
        <button className="confirm-btn" onClick={handleBookingClick}>
          Confirm booking
        </button>
      </div>
    </>
  )
}

{
  /* <p key={time.courtNumber + time.timeSlot}>
{time.courtNumber} - {time.timeSlot}
</p> */
}

export default BookingForm
