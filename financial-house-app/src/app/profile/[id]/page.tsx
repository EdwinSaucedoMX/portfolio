"use client"
import { UUID } from "crypto"
import { PieChart } from 'react-minimal-pie-chart'


export default function Page({ params }: { params: { id: string } }) {
  return <div className="w-full">
    <PieChart
      label={({ dataEntry: { value, title } }) => `
        ${title}:
      ${value} %
      `}
      data={[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
      ]}
      labelStyle={{
        fontSize: '0.5rem',
        fill: 'white',
        fontWeight: 'bold'
      }}
    />
  </div>
}