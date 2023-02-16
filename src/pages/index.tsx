import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Está é uma página. De fato!</title>
      </Head>
      <h1 className={styles.title}>Boa noite meu abençoado</h1>
    </>
  )
}
