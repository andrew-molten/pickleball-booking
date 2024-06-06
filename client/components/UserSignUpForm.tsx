import { useState } from 'react'
import useUsers from '../hooks/useUsers.ts'

export default function UserSignUpForm() {
  const users = useUsers()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await users.add({
      auth0_id: 'whoami',
      given_name: name,
      surname,
      email,
      phone,
      is_admin: false,
    })
    console.log(result)
  }
  const { data: allUsers, isPending, isError, error } = users.all()
  if (isPending) console.log('Fetching users')
  if (isError) console.log(`Couldn't fetch users`, error)
  console.log(allUsers)
  return (
    <div>
      <h2>Enter details to Sign Up</h2>
      <form className="user-form-container">
        <div className="user-form-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="user-form-item">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="user-form-item">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="user-form-item">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="user-form-item">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

// auth0_id: string
// given_name: string
// surname: string
// email: string
// phone: string
// is_admin: boolean
