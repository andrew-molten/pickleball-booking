import CourtColumn from './CourtColumn'
import TimeColumn from './TimesCol'

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
        <TimeColumn />
        <CourtColumn courtNumber={1} />
        <CourtColumn courtNumber={2} />
        <CourtColumn courtNumber={3} />
        <CourtColumn courtNumber={4} />
      </div>
    </>
  )
}

export default Calendar
