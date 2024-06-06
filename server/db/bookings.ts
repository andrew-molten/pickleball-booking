import connection from './connection'
import { Booking } from '../../models/booking'

const db = connection

export function getBookings() {
  return db('bookings').select()
}

export function getBookingsByDate(date: string) {
  return db('bookings').where('date', date).select()
}
