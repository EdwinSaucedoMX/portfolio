import { LastMovementsTable, MovementsCard } from "./components"

export default function UserMovementsPage(props: any) {
  return (
    <section className="flex flex-col gap-4 px-8 sm:py-8 pt-12 box-border  flex-wrap w-full">
      <section className=" min-w-full h-full flex gap-4  box-border  flex-row    *:grow flex-wrap  sm:flex-nowrap overflow-auto sm:overflow-hidden">
        <MovementsCard />
        <LastMovementsTable />
        {/* <MovementsCard /> */}
      </section>

    </section>
  )
}