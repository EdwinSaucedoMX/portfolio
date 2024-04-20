"use client"
import { PersonStanding, PieChart, TrendingUp, DoorClosed } from "lucide-react"
import { BurgerMenu } from "./client-components"
import { AsideSection, ProfileCard } from "./components"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useSelectedLayoutSegments } from "next/navigation"

export default function Layout(props: { children: React.ReactNode }) {
  const route = usePathname()
  const [section, id] = useSelectedLayoutSegments()
  const pathname = route.split("/").at(1)
  const getActive = () => {
    switch (section) {
      case "movements":
        return 1
      case "family":
        return 2
      default:
        return 0
    }
  }

  const [active, setActive] = useState(getActive())
  const size = useWindowSize()
  const handleActive = (index: number) => {
    setShow(false)
    setActive(index)
  }


  const getClassActive = (index: number) => {
    if (active === index) {
      return "bg-secondary-foreground text-secondary"
    }
    return ""
  }

  const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show)

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      if (window.innerWidth < 640) setShow(false)
      if (window.innerWidth > 640) setShow(true)
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
  }
  return (
    <main className="flex flex-row relative h-dvh ">

      <BurgerMenu onClick={handleShow} className="sm:hidden cursor-pointer" />

      {
        show &&
        <aside className="block sm:block  bg-secondary sm:m-2 box-border sm:rounded-lg  overflow-hidden sm:min-w-16 sm:hover:min-w-64 min-w-full transition-all group/aside   sm:relative absolute z-20 h-dvh">

          <ProfileCard >
            <p onClick={handleShow} className="z-30  sm:hidden right-20 top-6 text-right font-semibold text-primary-foreground absolute hover:cursor-pointer hover:text-secondary">Volver</p>
          </ProfileCard>
          <Link href={`/${pathname}/dashboard/${id}`}>
            <AsideSection icon={PieChart} title="Resumen" activeclass={getClassActive(0)} onClick={() => handleActive(0)} />
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

        </aside>}
      {props.children}
    </main >

  )
}


