import type { NextPage } from 'next'
import Head from 'next/head'
import { MarkGithubIcon } from '@primer/octicons-react'
import styles from '../styles/Home.module.css'
import Editor from '../components/Editor';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minimal Markdown by Icegotcha</title>
        <meta name="description" content="The simple markdown editor based on Monaco Editor and Remark.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Minimal Markdown Editor <sub className="text-xs">by Icegotcha</sub></h1>
      </header>
      <main className={styles.main}>
        <Editor />
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/icegotcha/minimal-markdown-editor" target="_blank" rel="noopener noreferrer">
          <MarkGithubIcon size="medium" verticalAlign="middle" />
        </a>
      </footer>
    </div>
  )
}

export default Home
