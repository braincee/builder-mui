import '../styles/globals.css'
import '@fontsource/public-sans'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
