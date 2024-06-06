import CourtColumn from './CourtColumn'

function Calendar() {
  // date code
  // const date = new Date()
  // const oldDate = new Date(2024, 5, 6, 18, 0, 0)
  // const dateInMs = date.getTime()
  // const oldDateInMs = oldDate.getTime()
  // const elapsed = dateInMs - oldDateInMs
  // console.log(elapsed / 60000)

  return (
    <>
      <div className="calendar">
        <p>Start out Calendar</p>
        <CourtColumn />
        <CourtColumn />
        <CourtColumn />
        <CourtColumn />
      </div>
    </>
  )
}

export default Calendar
