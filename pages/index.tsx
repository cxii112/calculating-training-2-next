import type {NextPage} from 'next'
import Head from 'next/head'
// import '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <span role="button"
                      className="button is-primary"/>
                <span role="button"
                      className="button is-danger"/>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home
