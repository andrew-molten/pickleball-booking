import { Router } from 'express'
import * as db from '../db/users.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getUsers()
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getUsers():`, error)
    res.sendStatus(500).json({ error: "Couldn't get the users "})
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.getUserById(id)
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getUserById():`, error)
    res.sendStatus(500).json({ error: "Couldn't get the user by id"})
  }
})

router.post('/', async (req, res) => {
  const user = req.body
  try {
    const result = await db.addUser(user)
    res.json(result)
  } catch (error) {
    console.error(`Error adding user via db.addUser():`, error)
    res.sendStatus(500).json({ error: "Couldn't add the user"})
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await db.deleteUser(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(`Error deleting user via db.deleteUser():`, error)
    res.sendStatus(500).json({ error: "Couldn't delete the user"})
  }
})

export default router