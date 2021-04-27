import Head from 'next/head'

import { BsArrowUpLeft } from "react-icons/bs"

import styles from "./styles/home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thainan Sousa | Home</title>
      </Head>
      <div className={styles.header}>
        <h1>Olá,</h1>
        <h1>Me chamo Thainan,</h1>
        <h1>Sou Desenvolvedor WEB.</h1>
      </div>
      <div className={styles.content}>
        <BsArrowUpLeft size={26} />
        <span>Me conheça mais navegando nas guias ao lado ou acesse o meu
          <a href="https://www.linkedin.com/in/thainan-sousa-0347a3180/" target="_blank">linkedin</a>
        </span>
      </div>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 7
  }
}