import { LoginForm } from "@shared/components/LoginForm"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380050393572271"
          crossOrigin="anonymous"></script>
      </Head>
      <main className="flex place-items-center w-full h-full flex-wrap ">

        <section className=" h-full w-1/2 flex  place-items-center	flex-grow min-w-96">
          <h1 className="text-secondary-foreground mx-auto ">Finanzas de la Casa</h1>
        </section>

        <LoginForm />

      </main></>
  )
}
