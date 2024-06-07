import CourtColumn from './CourtColumn'
import TimeColumn from './TimesCol'
import useBookings from '../hooks/useBookings'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useState, useEffect } from 'react'
// import { useContext } from 'react'
// import { BookingTimeContext } from './App'
import { useNavigate } from 'react-router-dom'

function Calendar() {
  // const bookingTimeContext = useContext(BookingTimeContext)
  // const [selectedTimes, setSelectedTimes] = bookingTimeContext
  const navigate = useNavigate()

  // date code
  // const date = new Date()
  // const oldDate = new Date(2024, 5, 6, 18, 0, 0)
  // const dateInMs = date.getTime()
  // const oldDateInMs = oldDate.getTime()
  // const elapsed = dateInMs - oldDateInMs
  // console.log(elapsed / 60000)

  // get all of the bookings for the day // 1720872000000 // is in the seed info for the database
  const date = 1720872000000
  const bookings = useBookings()

  // const [token, setToken] = useState('')
  // const { getAccessTokenSilently } = useAuth0()
  // const { data, isPending, isError, error } = bookings.byUser(token)
  // useEffect(
  //   () => {
  //     getAccessTokenSilently()
  //     .then((token) => {
  //       setToken(token)
  //     })
  //     .catch(error => console.error(error.message))
  //   },
  //   [getAccessTokenSilently]
  // )
  // if (isPending) return <p>Loading...</p>
  // if (isError) return <p>Error: {error.message}</p>
  // console.log(data)

  // const date = 1720872000000
  const { data: daysBookings, isPending, isError, error } = bookings.byDay(date)
  if (isPending) return <span>Checking todays bookings....</span>
  if (isError) {
    console.error(`Couldn't find todays bookings`, error)
    return (
      <span>{`We couldn't find information for todays bookings, please try again later`}</span>
    )
  }

  const court1Bookings = daysBookings.filter(
    (booking) => booking.court_id === 1,
  )
  const court2Bookings = daysBookings.filter(
    (booking) => booking.court_id === 2,
  )
  const court3Bookings = daysBookings.filter(
    (booking) => booking.court_id === 3,
  )
  const court4Bookings = daysBookings.filter(
    (booking) => booking.court_id === 4,
  )

  function handleClick() {
    // add guard for if state is empty
    navigate('booking')
  }

  return (
    <>
      <div className="calendar">
        <TimeColumn />
        <CourtColumn
          courtNumber={1}
          courtBookings={court1Bookings}
          date={date}
        />
        <CourtColumn
          courtNumber={2}
          courtBookings={court2Bookings}
          date={date}
        />
        <CourtColumn
          courtNumber={3}
          courtBookings={court3Bookings}
          date={date}
        />
        <CourtColumn
          courtNumber={4}
          courtBookings={court4Bookings}
          date={date}
        />
        <button onClick={handleClick}>Book Now</button>
      </div>
    </>
  )
}

export default Calendar
