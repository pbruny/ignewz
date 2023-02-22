import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Está é uma página. De fato!</title>
      </Head>
      <Header />
    </>
  )
}
