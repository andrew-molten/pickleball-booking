import connection from './connection'
import { BookingData } from '../../models/booking'

const db = connection

export function getBookings() {
  return db('bookings').select()
}

export function getBookingsByDate(date: string) {
  return db('bookings').where('date', date).select()
}

export function addBooking(booking: BookingData) {
  return db('bookings').insert(booking)
}
