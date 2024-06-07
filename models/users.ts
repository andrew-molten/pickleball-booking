export interface UserData {
  auth0_id: string
  given_name: string
  surname: string
  email: string
  phone: string
  is_admin: boolean
}

export interface User extends UserData {
  id: number
}