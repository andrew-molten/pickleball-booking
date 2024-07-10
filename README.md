# Pickleball booking

## Origin story

This is a small app we built in 24 hours as a team of 3. I suggested building a booking app as it's something that I've been quite interested in with my massage business.

Our teammate Zac plays pickle ball, and said that the courts that he goes to have a terrible booking system, so our goal was to build something better.

## How it works

Once you setup the database, you will see that the unavailable blocks show up red

- select the times you want to book
- click book
- it will display a summary of your bookings to confirm
- after confirming, it will upload the booking to the database

### What I learnt

This was out last 24 hour project of the bootcamp, so we worked as a team much better, being a team of 3 reduced the complexity too.
I mostly worked on the front end as I was really interested in how to get the calendar to work.

- I found working with dates difficult. I converted dates to unix timestamps and back to dates a few times, which in hindsight, I might have been better off having an object which included both.
- Our MVP should have been just 1 court, to reduce the complexity in a 24hr project.

### My code

When we presented our project the app was sort of working, but not including the full booking times in summary & only updated the database for court 1. I also had loads of type errors, as I was rushing to get it working.

As of July 2024, I am working on fixing up the code, to make it easier to read for you, and improving the functionality.

### Installation

```
git clone git@github.com:andrew-molten/pickleball-booking.git
cd pickleball-booking
npm install # to install dependencies
npm run knex migrate:latest # to create database tables
npm run knex seed:run # to seed the database with usable data
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
