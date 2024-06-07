import connection from './connection'
import { UserData } from '../../models/users'

const db = connection

export function getUsers() {
  return db('users').select()
}

export function getUserById(id: string) {
  return db('users').where({id}).select().first()
}

export function addUser(user: UserData) {
  return db('users').insert(user)
}

export function deleteUser(id: string) {
  return db('users').where({id}).del()
}