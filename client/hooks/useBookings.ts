import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Booking, BookingData } from '../../models/booking'
import { useNavigate } from 'react-router-dom'

const rootURL = '/api/v1/bookings'

export default function useBookings() {
  const navigate = useNavigate()

  function useGetBookingsByUser(token: string) {
    return useQuery({
      queryKey: ['bookings'],
      queryFn: async () => {
        const res = await request
          .get(`${rootURL}/user/`)
          .set('Authorization', `Bearer ${token}`)
        return res.body as Booking[]
      },
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
      mutationFn: async ({
        token,
        booking,
      }: {
        token: string
        booking: BookingData
      }) => {
        const res = await request
          .post(rootURL)
          .set('Authorization', `Bearer ${token}`)
          .send(booking)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['bookings'] })
        console.log('Added booking successfully!')
        navigate('/')
      },
    })
  }

  function useDeleteBooking() {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async ({
        token,
        booking_id,
      }: {
        token: string
        booking_id: string
      }) => {
        const res = await request
          .delete(`${rootURL}/${booking_id}`)
          .set('Authorization', `Bearer ${token}`)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['bookings'] })
        console.log('Deleted booking successfully!')
      },
    })
  }

  return {
    byUser: useGetBookingsByUser,
    byDay: useGetBookingsByDay,
    add: useAddBooking().mutate,
    del: useDeleteBooking().mutate,
  }
}
