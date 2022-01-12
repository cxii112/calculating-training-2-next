import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Bar from "../components/Bar";

const Home: NextPage = () => {
    const classNames = {
        "main": [
            "container"],
        "tile": [
            "tile",
            "notification",
            "is-dark",
            "is-align-content-center",
            "is-justify-content-center",
            "is-flex"],
        "button": [
            "button",
            "is-primary",
            "is-rounded"],
    }
    return (
        <div>
            <Head>
                <title>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={classNames.main.join(" ")}>
                <div className={classNames.tile.join(" ")}>
                </div>
            </main>
            <Bar>
                <button type={"button"}
                        className={classNames.button.join(" ")}>
                    Начать!
                </button>
            </Bar>
        </div>
    )
}

export default Home
