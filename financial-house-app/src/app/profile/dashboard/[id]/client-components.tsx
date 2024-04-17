"use client"
import { PieChart, pieChartDefaultProps } from 'react-minimal-pie-chart'

import { ColorType, createChart } from 'lightweight-charts'
import { Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export function FullOption(props: any) {
  const [selected, setSelected] = useState<number | undefined>(0)
  const [hovered, setHovered] = useState<number | undefined>(undefined)
  /* const colorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--primary')
  console.log({ colorPrimary })
  const colors = getMonocromaticSequenceHSL(colorPrimary, props.data.length) */

  const data = props.data.map((entry: any, i: number | undefined) => {

    if (hovered === i) {
      return {
        ...entry,
        selected: Number(selected) === i,
        hovered: true,
        color: 'rgb(208, 178, 255)',
      }
    }
    if (selected === i) {
      return {
        ...entry,
        selected: true,
        color: hovered === i ? 'rgb(208, 178, 255)' : entry.color
      }
    }
    return { ...entry, selected: false, hovered: false }
  })

  const getLabel = (props: any) => {
    if (props.dataEntry.selected && props.dataEntry.hovered) {
      return '$' + (props.dataEntry.value.toFixed(2))
    }
    if (props.dataEntry.hovered) {
      return props.dataEntry.percentage.toFixed(2) + '%'
    }
    if (props.dataEntry.selected) {

      return props.dataEntry.percentage.toFixed(2) + '%'
    }
    return props.dataEntry.title
  }

  const lineWidth = 60

  return (
    <section className='flex flex-col justify-center grow '>
      <h4 className="text-center text-secondary-foreground font-semibold text-lg">{props.title ?? "  "}</h4>
      <PieChart
        style={{
          fontFamily:
            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: '0.375rem',
          fontWeight: '500'
        }}
        data={data}
        radius={pieChartDefaultProps.radius - 6}
        lineWidth={60}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        label={(props: any) => getLabel(props)}
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fill: '#fff',
          opacity: 0.75,
          pointerEvents: 'none',
        }}
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index)
        }}
        onMouseOver={(_, index) => {
          setHovered(index)
        }}
        onMouseOut={() => {
          setHovered(undefined)
        }}
        className={props.className}
      />
    </section>
  )
}




export const ChartComponent = (props: any) => {
  const { theme } = useTheme()

  const {
    data,
    colors: {
      backgroundColor = 'transparent',
      lineColor = 'rgb( 109,40,217)',
      textColor = theme === "dark" ? 'white' : 'black',
      areaTopColor = 'rgb( 109,40,217)',
      areaBottomColor = 'rgba(109, 40, 217, 0.28)',
    } = {},
  } = props
  const chartContainerRef = useRef()


  useEffect(
    () => {

      const { current } = chartContainerRef ?? { current: "" }

      const { clientWidth, clientHeight } = current ?? { clientWidth: 0, clientHeight: 0 }
      const handleResize = () => {
        chart.applyOptions({ width: clientWidth ?? 0 })

      }
      const chart = createChart(current ?? "", {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },

      })
      chart.timeScale().fitContent()

      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor })
      newSeries.setData(data)
      const newSeries2 = chart.addAreaSeries({ lineColor: "rgb(189, 120, 297)", topColor: "rgb(209, 140, 317)", bottomColor: "rgba(209, 140, 317, 0.28)" })
      newSeries2.setData([
        { time: '2018-12-22', value: 0 },
        { time: '2018-12-23', value: 0.51 },
        { time: '2018-12-24', value: 1 },
        { time: '2018-12-25', value: 1.97 },
        { time: '2018-12-26', value: 2 },
        { time: '2018-12-27', value: 3 },
        { time: '2018-12-28', value: 6 },
        { time: '2018-12-29', value: 8 },
        { time: '2018-12-30', value: 20 },
        { time: '2018-12-31', value: 31 },
      ])

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)

        chart.remove()
      }
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  )

  return (
    <div
      ref={chartContainerRef as any}
      {...props}
    />
  )
}



export function BurgerMenu(props: any) {
  return <a {...props}>
    <Menu className="absolute top-4 left-4 text-secondary-foreground  block" />
  </a>
}
