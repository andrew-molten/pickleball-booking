import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Booking } from '../../models/booking'

const rootURL = '/api/v1/bookings'

export function useBookingsByDay(date: number) {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/day/${date}`)
      return res.body as Booking[]
    },
  })
}
