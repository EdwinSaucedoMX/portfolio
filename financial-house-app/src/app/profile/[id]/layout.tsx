import Link from "next/link"
import { AsideSection, ProfileCard } from "./components"
import { PersonStanding, PieChart, TrendingUp } from "lucide-react"

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <main className="flex flex-row relative h-dvh">
      <aside className="bg-secondary m-2 box-border rounded-lg p-2 overflow-hidden w-16 hover:w-64  transition-all hover:*:bg-slate-600 hover:*:text-secondary *:has-[.icon-section]:border-b">
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
