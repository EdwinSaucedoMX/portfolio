"use client"
import { PersonStanding, PieChart, TrendingUp } from "lucide-react"
import { BurgerMenu } from "./client-components"
import { AsideSection, ProfileCard } from "./components"
import { useState } from "react"

export default function Layout(props: { children: React.ReactNode }) {
  const [active, setActive] = useState(0)

  const handleActive = (index: number) => setActive(index)

  const getClassActive = (index: number) => {
    if (active === index) {
      return "bg-secondary-foreground text-secondary"
    }
    return ""
  }
  return (
    <main className="flex flex-row relative h-dvh ">

      {<BurgerMenu href="#aside" className="sm:hidden" />}
      {/* <input name="burguer" type="checkbox" className="peer/burguer" id="burguer" title="a" /> */}

      <aside id="aside" className="hidden sm:block  bg-secondary sm:m-2 box-border sm:rounded-lg  overflow-hidden sm:min-w-16 sm:hover:min-w-64 min-w-full transition-all group/aside  target:block relative">

        <ProfileCard />
        <AsideSection icon={PieChart} title="Dashboard" activeclass={getClassActive(0)} onClick={() => handleActive(0)} />
        <AsideSection icon={TrendingUp} title="Movimientos" activeclass={getClassActive(1)} onClick={() => handleActive(1)} />
        <AsideSection icon={PersonStanding} title="Familia" activeclass={getClassActive(2)} onClick={() => handleActive(2)} />

        {/* <Link href="/profile" className="absolute bottom-8">Cerrar Sesion</Link> */}
      </aside>
      {props.children}
    </main >

  )
}


