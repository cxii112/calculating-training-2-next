import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Bar from "../components/Bar";

const Home: NextPage = () => {
    const classNames = {
        "main": [
            "container"
        ],
        "wrapper": [
            styles.wrapper,
            "px-5",
            "px-2"
        ],
        "tile": [
            "tile",
            "notification",
            "is-dark",
        ],
        "mainButton": [
            "px-6",
            "button",
            "is-primary",
            "is-rounded"
        ],
    }
    return (
        <div className={classNames.wrapper.join(" ")}>
            <Head>
                <title>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={classNames.main.join(" ")}>
                <div className={classNames.tile.join(" ")}></div>
            </main>
            <Bar>
                <button type={"button"}
                        className={classNames.mainButton.join(" ")}>
                    Начать!
                </button>
            </Bar>
        </div>
    )
}

export default Home
