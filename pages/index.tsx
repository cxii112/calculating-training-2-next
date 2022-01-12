import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={'container'}>
            <Head>
                <title className={'container'}>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>

            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export default Home
