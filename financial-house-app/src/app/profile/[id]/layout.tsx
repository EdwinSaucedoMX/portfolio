"use client"
import { PersonStanding, PieChart, TrendingUp } from "lucide-react"
import { BurgerMenu } from "./client-components"
import { AsideSection, ProfileCard } from "./components"
import { useState } from "react"

export default function Layout(props: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  return (
    <main className="flex flex-row relative h-dvh ">

      {<BurgerMenu href="#aside" className="sm:hidden" />}
      {/* <input name="burguer" type="checkbox" className="peer/burguer" id="burguer" title="a" /> */}

      <aside id="aside" className="hidden sm:block  bg-secondary sm:m-2 box-border sm:rounded-lg  overflow-hidden sm:min-w-16 sm:hover:min-w-64 min-w-full transition-all group/aside  target:block relative">

        <ProfileCard />
        <AsideSection icon={PieChart} title="Dashboard" />
        <AsideSection icon={TrendingUp} title="Movimientos" />
        <AsideSection icon={PersonStanding} title="Familia" />

        {/* <Link href="/profile" className="absolute bottom-8">Cerrar Sesion</Link> */}
      </aside>
      {props.children}
    </main >

  )
}


