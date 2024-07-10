import { useContext } from 'react'
import { BookingTimeContext } from './App'
import { BookedSlot, SelectedTime } from '../../models/booking'
import { times } from './CourtColumn'
import useBookings from '../hooks/useBookings'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useEffect } from 'react'
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

  const [token, setToken] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        setToken(token)
      })
      .catch((error) => console.error(error.message))
  }, [getAccessTokenSilently])
  // console.log(calDateObj)

  // How to display the times selected - ideally for each value it will say:

  // Booked court 1 from {startTime} to {endTime}

  // get courtNumber[0] if there are any more of that number CourtNumber then find end time
  const courtOne: BookedSlot[] = []
  const courtTwo: BookedSlot[] = []
  const courtThree: BookedSlot[] = []
  const courtFour: BookedSlot[] = []

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

    return date.getTime()
  }

  // fill court arrays with times
  function pushTimeToCourt(time: SelectedTime, array: BookedSlot[]) {
    array.push({
      dateTime: getDateTime(String(time.timeSlot)),
      time: time.timeSlot,
    })
  }
  selectedTimes.forEach((time: SelectedTime) => {
    if (time.courtNumber === 1) pushTimeToCourt(time, courtOne)
    if (time.courtNumber === 2) pushTimeToCourt(time, courtTwo)
    if (time.courtNumber === 3) pushTimeToCourt(time, courtThree)
    if (time.courtNumber === 4) pushTimeToCourt(time, courtFour)
  })

  // Sort arrays by time
  courtOne.sort((a, b) => a.dateTime - b.dateTime)
  courtTwo.sort((a, b) => a.dateTime - b.dateTime)
  courtThree.sort((a, b) => a.dateTime - b.dateTime)
  courtFour.sort((a, b) => a.dateTime - b.dateTime)

  const courtOneTimes: number[] = []
  const courtTwoTimes: number[] = []
  const courtThreeTimes: number[] = []
  const courtFourTimes: number[] = []

  function addTimeChunks(courtTimes: BookedSlot[], array: number[]) {
    const courtIndexes: number[] = []

    for (let i = 0; i < courtTimes.length; i++) {
      const index = times.indexOf(courtTimes[i].time)

      if (i === courtTimes.length - 1) {
        // last entry

        if (courtIndexes.length > 0) {
          array.push([...courtIndexes, index])
        } else {
          array.push([index])
        }
      } else if (
        index === courtIndexes[courtIndexes.length - 1] + 1 ||
        courtIndexes.length === 0
      ) {
        courtIndexes.push(index)
      } else {
        // courtIndexes.push(courtIndexes[courtIndexes.length] + 1)
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
  // console.log(courtOneTimes)
  // console.log(courtTwoTimes)
  // console.log(courtThreeTimes)
  // console.log(courtFourTimes)

  // const user = {
  //   id: 1,
  //   auth0_id: 'whatdoesthislooklike',
  //   given_name: 'little',
  //   surname: 'pickle',
  //   email: 'baby.gherkin@gmail.com',
  //   phone: '00000000',
  //   is_admin: false,
  // }
  console.log(courtOneTimes)
  async function handleBookingClick() {
    const booking = {
      court_id: 1,
      user_id: user.id,
      date: selectedTimes[0].date,
      start_time: times[courtOneTimes[0][0]],
      end_time: times[courtOneTimes[0][courtOneTimes[0].length - 1]],
      gear_rental: false,
      price: 100,
      paid: false,
    }
    bookings.add({ token, booking })
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
            {times[time[0]]} until {times[time[time.length - 1] + 1]}
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
            {times[time[0]]} until {times[time[time.length - 1] + 1]}
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
            {times[time[0]]} until {times[time[time.length - 1] + 1]}
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
            {times[time[0]]} until {times[time[time.length - 1] + 1]}
          </p>
        ))}
        <button className="confirm-btn" onClick={handleBookingClick}>
          Confirm booking
        </button>
      </div>
    </>
  )
}

export default BookingForm
