import "../styles/global.scss"
import styles from "../styles/app.module.scss"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
