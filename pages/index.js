import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Philip Tyson</title>
        <meta name="description" content="This is my personal site that mostly acts as a digital resume. Maybe also learn some things and test things out." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Since these aren't separate pages using the router, I'm going to build these as components that are then pulled into the main page layout */}
        {/*  */}
        <About styles={styles.about} />
        <Skills />
        <Work />
        <Contact />
      </main>

      <footer className={styles.footer}>
          Powered by <Link href="https://reactjs.org/"><a>React</a></Link> <strong>Next.js</strong>
      </footer>
    </div>
  )
}
