import '../styles/globals.scss'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <div>
        <span role="button"
              className="button is-primary"/>
        <span role="button"
              className="button is-danger"/>
        <Component {...pageProps} />
    </div>
}

export default MyApp
