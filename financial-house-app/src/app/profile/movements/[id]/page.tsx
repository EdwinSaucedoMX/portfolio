import Head from "next/head"
import { LastMovementsTable, MovementsCard } from "./components"

export default function UserMovementsPage(props: any) {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380050393572271"
          crossOrigin="anonymous"></script>
      </Head>
      <section className="flex flex-col gap-4 px-8 sm:py-8 pt-12 box-border  flex-wrap w-full">
        <section className=" min-w-full h-full flex gap-4  box-border  flex-row    *:grow flex-wrap  sm:flex-nowrap overflow-auto sm:overflow-hidden">
          <MovementsCard />
          <LastMovementsTable />
          {/* <MovementsCard /> */}
        </section>

      </section></>
  )
}