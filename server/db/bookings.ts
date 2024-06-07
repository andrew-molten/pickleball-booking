import connection from './connection'
import { BookingData } from '../../models/booking'

const db = connection

export function getBookings() {
  return db('bookings').select()
}

export function getBookingsByDate(date: string) {
  return db('bookings').where({date}).select()//in this part we will remove the user_id / auth0_id from the return
}

export function addBooking(booking: BookingData) {
  return db('bookings').insert(booking)
}

export function deleteBooking(sub: string, id: string) {
  return db('bookings').where({user_id: sub}).where({id}).del()
}

export function getBookingsByUser(id: string) {
  return db('bookings').where({user_id: id})
}