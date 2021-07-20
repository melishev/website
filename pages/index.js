import styles from 'styles/pages/home.module.scss'

function Home() {
  return (
    <main className={styles.Home}>
      <h1>In currently time, web application not available yet.</h1>
      <h2>But in August 2021 everything will change!</h2>
      <h3>Subscribe to updates.</h3>
      <form>
        <input type="email" placeholder="E-mail" />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default Home