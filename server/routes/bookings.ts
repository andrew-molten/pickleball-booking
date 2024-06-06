import { Router } from 'express'
import * as db from '../db/bookings.ts'

const router = Router()

router.get('/day/:date', async (req, res) => {
  const { date } = req.params
  try {
    const result = await db.getBookingsByDate(date)
    res.json(result)
  } catch (error) {
    console.error(`Error retrieving db.getBookingsByDate:`, error)
  }
})

export default router
