import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Calendar from './components/Calendar.tsx'
import BookingForm from './components/BookingForm.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Calendar />} />
    <Route path="booking" element={<BookingForm />} />
  </Route>,
)
