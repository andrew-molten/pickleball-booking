import { Router } from 'express'
import * as db from '../db/bookings.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()

router.get('/day/:date', async (req, res) => {
  const { date } = req.params
  try {
    const result = await db.getBookingsByDate(date)
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getBookingsByDate:`, error)
    res.sendStatus(500).json({ error: "Couldn't get the bookings by date" })
  }
})

router.get('/user/', checkJwt, async (req: JwtRequest, res) => {
  const sub = req.auth?.sub
  if (!sub) {
    res.sendStatus(401)
  }
  try {
    const result = await db.getBookingsByUser(sub as string)
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getBookingsByUser:`, error)
    res.sendStatus(500).json({ error: "Couldn't get the bookings by user" })
  }
})

router.post('/', async (req, res) => {
  const booking = req.body
  try {
    const result = await db.addBooking(booking)
    res.json(result)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await db.deleteBooking(id)
    res.sendStatus(204)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
