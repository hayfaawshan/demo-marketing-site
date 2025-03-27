import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="typescript-joke">
        <h1>While you wait for TypeScript to compile, enjoy this app!</h1>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
