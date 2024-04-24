"use client"
import { UUID } from "crypto"
import { PieChart } from 'react-minimal-pie-chart'
import { Summary } from "./components"
import { getMonocromaticSequenceRGB } from "@/shared/functions/style"
import { ChartComponent, FullOption } from "./client-components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { Skeleton } from "@/shared/components/ui/skeleton"

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
    <section className="w-full flex flex-wrap   sm:pt-24 pt-96 pb-8 overflow-auto px-8 content-center">
      <section className="w-full flex flex-wrap gap-2 p-4 content-start ">
        <Summary />
        <section className="flex flex-wrap gap-2 p-6 bg-secondary grow shadow-card-foreground rounded-lg ">
          <Tabs defaultValue="incomes" className="min-w-full ">
            <TabsList className="bg-primary text-primary-foreground">
              <TabsTrigger value="incomes">Ingresos</TabsTrigger>
              <TabsTrigger value="expenses">Egresos</TabsTrigger>
            </TabsList>
            <TabsContent value="incomes" >

              <FullOption
                title="Ingresos"
                data={[
                  { title: 'Salario', value: 10, color: colors.at(0) ?? "rgb( 109,40,217)" },
                  { title: 'Inversion', value: 15, color: colors.at(1) ?? "rgb( 109,40,217)" },
                  { title: 'Ahorro', value: 20, color: colors.at(2) ?? "rgb( 109,40,217)" },
                  // Repeat pattern counting to Ten

                ]}
                className="grow aspect-square  h-48" />


            </TabsContent>
            <TabsContent value="expenses" >
              <FullOption
                title="Egresos"
                data={[
                  { title: 'Mascota', value: 10, color: colors.at(0) ?? "rgb( 109,40,217)" },
                  { title: 'Alimentos', value: 15, color: colors.at(1) ?? "rgb( 109,40,217)" },
                  { title: 'Salidas', value: 20, color: colors.at(2) ?? "rgb( 109,40,217)" },
                  // Repeat pattern counting to Ten
                  { title: 'Deudas', value: 25, color: colors.at(3) ?? "rgb( 109,40,217)" },
                  { title: 'Servicios', value: 30, color: colors.at(4) ?? "rgb( 109,40,217)" },

                ]}
                className="grow aspect-square  h-48" />
            </TabsContent>
          </Tabs>

        </section>
      </section>
      <section className="px-8 py-4 mx-4  w-full flex flex-col h-64 *:w-full *:h-full bg-secondary rounded-sm">
        <h5 className="text-primary max-h-8 font-semibold text-lg ">Desglose visual</h5>
        <ChartComponent data={initialData} className="w-full flex grow *:w-full *:flex *:*:grow" />
      </section>
    </section>
  )
}