import connection from './connection'
import { BookingData } from '../../models/booking'

const db = connection

export function getBookings() {
  return db('bookings').select()
}

export function getBookingsByDate(date: string) {
  return db('bookings').where({date}).select()
}

export function addBooking(booking: BookingData) {
  return db('bookings').insert(booking)
}

export function deleteBooking(id: string) {
  return db('bookings').where({id}).del()
}