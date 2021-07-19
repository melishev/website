import styles from 'styles/pages/home.module.scss'

function Home() {
  return (
    <main className={styles.Home}>
      <h1>In currently time, web application not yet.</h1>
      <form>
        <input type="email" placeholder="E-mail" />
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default Home