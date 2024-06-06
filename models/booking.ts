export interface Booking {
  id: number
  court_id: number
  customer_id: number
  date: Date
  start_time: number
  end_time: number
  gear_rental: boolean
  price: number
  paid: boolean
}
