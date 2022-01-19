import type {NextPage} from "next";
import Head from "next/head";
import Bar from "../components/Bar";
import SumSettings from "../components/SumSettings";
import OperatorPicker from "../components/OperatorPicker";

const Home: NextPage = () => {
    return (
        <div className={"w-screen h-screen bg-slate-200 px-4 py-4 flex justify-evenly"}>
            <Head>
                <title>Тренировка счета 2</title>
                <meta name="description" content="Приложение для тренировки счета у детей начальной школы"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"container relative max-w-xl flex flex-col justify-between h-full"}>
                <main className={"bg-slate-100 h-fit rounded-lg p-4"}>
                    <div className={"flex justify-evenly text-3xl font-bold text-black"}>
                        Настройки
                    </div>
                    <OperatorPicker/>
                </main>
                <Bar>
                    <button
                        className={"text-sky-500 tracking-widest border-2 border-sky-500 rounded-full px-4 py-1 hover:border-green-500 hover:text-green-500 transition-all"}>
                        Начать
                    </button>
                </Bar>
            </div>
        </div>
    );
};

export default Home;
