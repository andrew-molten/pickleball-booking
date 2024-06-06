export interface BookingData {
  court_id: number
  customer_id: number
  date: Date
  start_time: number
  end_time: number
  gear_rental: boolean
  price: number
  paid: boolean
}

export interface Booking extends BookingData {
  id: number
}
