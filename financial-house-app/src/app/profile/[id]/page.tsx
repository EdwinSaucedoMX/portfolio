"use client"
import { UUID } from "crypto"
import { PieChart } from 'react-minimal-pie-chart'
import { SummaryCard } from "./components"
import { getMonocromaticSequenceRGB } from "@/shared/functions/style"
import { FullOption } from "./client-components"
export default function Page({ params }: { params: { id: string } }) {
  const colors = getMonocromaticSequenceRGB("rgb( 109,40,217)", 10)
  return (
    <section className="w-full flex flex-wrap gap-2 p-4 ">
      <section className="w-full flex flex-wrap gap-2 p-4 content-start ">
        <SummaryCard />
        <section className="flex flex-wrap gap-2 p-6 bg-secondary grow shadow-card-foreground rounded-lg">
          {/*  <PieChart
            className="grow aspect-square  h-64"
            label={({ dataEntry: { value, title, percentage } }) => `
              ${Number(percentage).toFixed(2)}%
            `}
            data={[
              { title: 'One', value: 10, color: colors.at(0) },
              { title: 'Two', value: 15, color: colors.at(1) },
              { title: 'Three', value: 20, color: colors.at(2) },
              // Repeat pattern counting to Ten
              { title: 'Four', value: 25, color: colors.at(3) },
              { title: 'Five', value: 30, color: colors.at(4) },
              { title: 'Six', value: 35, color: colors.at(5) },
              { title: 'Seven', value: 40, color: colors.at(6) },
              { title: 'Eight', value: 45, color: colors.at(7) },
              { title: 'Nine', value: 50, color: colors.at(8) },
              { title: 'Ten', value: 55, color: colors.at(9) },
            ]}
            labelStyle={{
              fontSize: `0.25rem`,
              fill: 'white',
              fontWeight: 'normal'
            }}
            labelPosition={80}
            onClick={(event, data) => {
              console.log({ event: event.currentTarget.se })
            }}
            animate={true}
            animationDuration={500}
            lineWidth={36}
            paddingAngle={4}
            radius={42}
            startAngle={0}
            viewBoxSize={[100, 100]}
          /> */}
          <FullOption data={[
            { title: 'One', value: 10, color: colors.at(0) ?? "rgb( 109,40,217)" },
            { title: 'Two', value: 15, color: colors.at(1) ?? "rgb( 109,40,217)" },
            { title: 'Three', value: 20, color: colors.at(2) ?? "rgb( 109,40,217)" },
            // Repeat pattern counting to Ten
            { title: 'Four', value: 25, color: colors.at(3) ?? "rgb( 109,40,217)" },
            { title: 'Five', value: 30, color: colors.at(4) ?? "rgb( 109,40,217)" },
            { title: 'Six', value: 35, color: colors.at(5) ?? "rgb( 109,40,217)" },
            { title: 'Seven', value: 40, color: colors.at(6) ?? "rgb( 109,40,217)" },
            { title: 'Eight', value: 45, color: colors.at(7) ?? "rgb( 109,40,217)" },
            { title: 'Nine', value: 50, color: colors.at(8) ?? "rgb( 109,40,217)" },
            { title: 'Ten', value: 55, color: colors.at(9) ?? "rgb( 109,40,217)" },
          ]}
            className="grow aspect-square  h-64" />
        </section>
      </section>
    </section>
  )
}