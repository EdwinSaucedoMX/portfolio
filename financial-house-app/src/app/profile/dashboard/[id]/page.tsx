"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { getMonocromaticSequenceRGB } from "@/shared/functions/style"
import { ChartComponent, FullOption } from "./client-components"
import { Summary, SummaryExpensesDonut, SummaryIncomesDonut, SummaryLineChart } from "./components"

export default function Page({ params }: { params: { id: string } }) {
  const colors = getMonocromaticSequenceRGB("rgb( 109,40,217)", 3)
  const colors2 = getMonocromaticSequenceRGB("rgb( 109,40,217)", 5)
  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ]

  return (
    <section className="w-full flex flex-wrap   pt-12  pb-8 overflow-auto px-8 content-start">
      <section className=" flex flex-wrap gap-2 p-4 justify-start grow ">
        <Summary />
        <section className="flex flex-wrap gap-2 p-6 bg-secondary grow shadow-card-foreground rounded-lg w-96 ">
          <Tabs defaultValue="incomes" className="min-w-full ">
            <TabsList className="bg-primary text-primary-foreground">
              <TabsTrigger value="incomes">Ingresos</TabsTrigger>
              <TabsTrigger value="expenses">Egresos</TabsTrigger>
            </TabsList>
            <TabsContent value="incomes" >
              <div>

                {<SummaryIncomesDonut />}
              </div>
            </TabsContent>
            <TabsContent value="expenses" >
              <div>
                <SummaryExpensesDonut />
              </div>
            </TabsContent>
          </Tabs>

        </section>
      </section>
      <section className="px-8 py-4 mx-4 flex flex-col  bg-secondary rounded-sm w-full">
        <h5 className="text-primary max-h-8 font-semibold text-lg ">Desglose visual</h5>
        <SummaryLineChart />
      </section>
    </section>
  )
}