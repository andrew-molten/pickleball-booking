import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Booking, BookingData } from '../../models/booking'

const rootURL = '/api/v1/bookings'

export default function useBookings() {

  function useGetBookingsByUser(token: string) {
    return useQuery({
      queryKey: ['bookings'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/user/`).set('Authorization', `Bearer ${token}`)
        return res.body as Booking[]
      }
    })
  }

  function useGetBookingsByDay(date: number) {
    return useQuery({
      queryKey: ['bookings'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/day/${date}`)
        return res.body as Booking[]
      },
    })
  }

  function useAddBooking() {
    const queryClient = useQueryClient()
    return useMutation({ 
      mutationFn: async (booking: BookingData) => {
        const res = await request.post(rootURL).send(booking)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['bookings'] }) 
        console.log('Added booking successfully!')
      }
    })
  }

  function useDeleteBooking() {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async (id: string) => {
        const res = await request.delete(`${rootURL}/${id}`)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['bookings'] })
        console.log('Deleted booking successfully!')
      }
    })
  }
  
  return {
    byUser: useGetBookingsByUser,
    byDay: useGetBookingsByDay,
    add: useAddBooking().mutate,
    del: useDeleteBooking().mutate,
  }

}