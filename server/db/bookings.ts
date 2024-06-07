import connection from './connection'
import { BookingData } from '../../models/booking'

const db = connection

export function getBookings() {
  return db('bookings').select()
}

export function getBookingsByDate(date: string) {
  return db('bookings').where({ date }).select()
}

export function addBooking(booking: BookingData) {
  return db('bookings').insert(booking)
}

<<<<<<< HEAD
export function deleteBooking(id: string) {
  return db('bookings').where({ id }).del()
=======
export function deleteBooking(sub: string, id: string) {
  return db('bookings').where({user_id: sub}).where({id}).del()
>>>>>>> main
}

export function getBookingsByUser(id: string) {
  return db('bookings').where({ user_id: id })
}
