import { PieChart, pieChartDefaultProps, PieChartProps } from 'react-minimal-pie-chart'

import React, { useState } from 'react'
import { getMonocromaticSequenceHSL } from '@/shared/functions/style'

export function FullOption(props: PieChartProps) {
  const [selected, setSelected] = useState<number | undefined>(0)
  const [hovered, setHovered] = useState<number | undefined>(undefined)
  const colorPrimary = getComputedStyle(document.documentElement)
  console.log({ colorPrimary })
  /* const colors = getMonocromaticSequenceHSL(colorPrimary, props.data.length) */

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      }
    }
    return { ...entry, /* color: colors[i] */ }
  })

  const lineWidth = 60

  return (
    <PieChart
      style={{
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: '8px',
      }}
      data={data}
      radius={pieChartDefaultProps.radius - 6}
      lineWidth={60}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      animate
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
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
  )
}