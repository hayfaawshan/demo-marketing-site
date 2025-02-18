import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="wrapper container mx-auto w-full">
      <header className="w-full py-10">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <nav className="flex w-full py-4">
          <Link href="/" className="pr-4">
            Home
          </Link>
          <Link href="/chat-app">Chat App</Link>
        </nav>
      </header>
      <main className="h-full w-full">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          width={180}
          height={37}
          priority
        />
        <Link href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          Documentation
        </Link>
      </main>
    </div>
  )
}