import request from 'superagent'
import { useMutation } from '@tanstack/react-query'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { User, UserData } from '../../models/users'

const rootURL = '/api/v1/users'

export default function useUsers() {

  function useGetUsers() {
    return useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await request.get(rootURL)
        return res.body as User[]
      },
    })
  }

  function useGetUserById(id: number) {
    return useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await request.get(`${rootURL}/${id}`)
        return res.body as User
      }
    })
  }

  function useAddUser() {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async (user: UserData) => {
        const res = await request.post(rootURL).send(user)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
        console.log('Added user successfully!')
      }
    })
  }

  function useDeleteUser() {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async (id: number) => {
        const res = await request.delete(`${rootURL}/${id}`)
        return res.body
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
        console.log('Deleted user successfully!')
      }
    })
  }

  return {
    all: useGetUsers,
    one: useGetUserById,
    add: useAddUser().mutate,
    del: useDeleteUser().mutate
  }
}
