import { MovementsCard } from "./components"

export default function UserMovementsPage(props: any) {
  return (
    <section className="flex  gap-4  sm:py-0 py-12 box-border content-center flex-wrap">
      <section className="w-full flex gap-4  box-border  flex-col justify-evenly flex-wrap">
        <MovementsCard />
        <MovementsCard />
      </section>
      <section className="w-full flex gap-4 box-border  flex-col justify-evenly flex-wrap">
        <MovementsCard />
        <MovementsCard />
      </section>
    </section>
  )
}