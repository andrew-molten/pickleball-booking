import Timeslot from './Timeslot'

const col = [
  0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
]

function CourtColumn() {
  return (
    <>
      <div>
        {col.map((slot, index) => {
          return (
            <>
              <Timeslot key={index} />
            </>
          )
        })}

        {/* <Timeslot />
        <Timeslot />
        <Timeslot /> */}
      </div>
    </>
  )
}

export default CourtColumn
