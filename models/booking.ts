export interface BookingData {
  court_id: number
  user_id?: number
  date: number
  start_time: number
  end_time: number
  gear_rental: boolean
  price: number
  paid: boolean
}

export interface Booking extends BookingData {
  id: number
}

export interface TimeSlot {
  timeSlot: string
  courtNumber: number
  available?: boolean
  clicked?: boolean
}

export interface BookedSlot {
  dateTime: number
  time: number
}

export interface SelectedTime {
  courtNumber: number
  date: number
  timeSlot: number
}
