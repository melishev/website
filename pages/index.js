import styles from 'styles/pages/home.module.scss'

import { useState } from 'react'

function Home() {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks`)

    setEmail('')
  }

  return (
    <main className={styles.Home}>
      <h1>In currently time, web application not available yet.</h1>
      <h2>But in August 2021 everything will change!</h2>
      <h3>Subscribe to updates.</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default Home