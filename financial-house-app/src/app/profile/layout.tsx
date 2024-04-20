"use client"
import { PersonStanding, PieChart, TrendingUp, DoorClosed } from "lucide-react"
import { BurgerMenu } from "./client-components"
import { AsideSection, ProfileCard } from "./components"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useParams } from "next/navigation"

export default function Layout(props: { children: React.ReactNode }) {
  const route = usePathname().split("/")
  const section = route.at(2)
  const pathname = route.at(1)

  const getActive = () => {
    switch (section) {
      case "movements":
        return 1
        break
      case "family":
        return 2
        break
      default:
        return 0
        break
    }
  }

  const [active, setActive] = useState(getActive())

  const handleActive = (index: number) => setActive(index)

  const { id } = useParams()
  /* const id = pathname.split("/").at(-2)
  const current = pathname.split("/").at(-2) */

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
        <Link href={`/${pathname}/dashboard/${id}`}>
          <AsideSection icon={PieChart} title="Dashboard" activeclass={getClassActive(0)} onClick={() => handleActive(0)} />
        </Link>
        <Link href={`/${pathname}/movements/${id}`}>
          <AsideSection icon={TrendingUp} title="Movimientos" activeclass={getClassActive(1)} onClick={() => handleActive(1)} />
        </Link>
        <Link href={`/${pathname}/family`}>
          <AsideSection icon={PersonStanding} title="Familia" activeclass={getClassActive(2)} onClick={() => handleActive(2)} />
        </Link>
        <Link href="/" className="absolute bottom-0 w-full">
          <AsideSection icon={DoorClosed} title="Cerrar Sesion" activeclass={getClassActive(2)} onClick={() => handleActive(2)} />
        </Link>

        {/* <Link href="/profile" className="absolute bottom-8">Cerrar Sesion</Link> */}

      </aside>
      {props.children}
    </main >

  )
}


