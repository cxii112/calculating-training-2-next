import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <button className="button is-primary is-outlined"/>
                <button className="button is-danger is-outlined"/>
                <button className="button is-success is-outlined"/>
                <button className="button is-warning is-outlined"/>
                <button className="button is-info is-outlined"/>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home
