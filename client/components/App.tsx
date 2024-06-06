import { useFruits } from '../hooks/useFruits.ts'
import Calendar from './Calendar.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <Calendar />
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
