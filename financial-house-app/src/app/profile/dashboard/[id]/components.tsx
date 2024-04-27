import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
import { Separator } from "@/shared/components/ui/separator"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { DonutChart, Legend, LineChart } from '@tremor/react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"



export function ProfileCard(props: any): React.JSX.Element {
  return (
    <div className='flex bg-primary flex-row content-stretch place-items-center h-32 py-4 px-2 sm:transition-all  gap-3 '>
      <a href="" className="z-30  sm:hidden right-20 top-6 text-right font-semibold text-primary-foreground absolute hover:text-secondary">Volver</a>
      <figure className="relative text-primary group hover:cursor-pointer">
        <Avatar className='shadow-sm shadow-card-foreground group-hover:text-foreground min-w-16 min-h-16 sm:min-w-fit sm:min-h-fit'>
          <AvatarImage src={props.avatar} className="  " />
          <AvatarFallback className="group-hover:bg-primary">SN</AvatarFallback>
        </Avatar>
        <Pencil1Icon className="absolute -bottom-1 -right-1 aspect-square min-w-6 min-h-6 flex items-center justify-center text-center rounded-full  p-1 hover:scale-110 transition-all bg-secondary opacity-65 group-hover:opacity-100" />

      </figure>
      <section className="sm:hidden flex-col sm:w-0 w-full group-hover/aside:flex sm:*:transition-all only text-primary-foreground min-h-full content-center">
        <section className=' cursor-pointer text-wrap hover:brightness-75'>
          <h6 className="text-lg  font-medium">Nombre</h6>
          <p className="font-thin">Apellido</p>
        </section>
        <a className='hover:brightness-75 cursor-pointer text-sm font-medium text-nowrap '>Editar Perfil</a>
      </section>
    </div>
  )
}

export function AsideSection(props: any) {

  return (
    <section className="flex justify-center content-center text-secondary-foreground flex-col hover:text-secondary hover:bg-secondary-foreground " {...props}>
      <section className={`flex flex-nowrap px-4 text-nowrap items-start group-hover/aside:sm:justify-start  gap-10  cursor-pointer py-4 min-w-full transition-all  min-h6 sm:justify-center justify-start ${props.activeClass}`} >
        <props.icon className="icon-section cursor-pointer text-2xl w-6 h-6 " />
        <p className="sm:hidden group-hover/aside:flex">{props.title}</p>
      </section>
      <Separator className="bg-secondary-foreground opacity-10" />
    </section>
  )
}

export function Summary(props: any) {
  return (

    <section className="max-h-full flex flex-wrap gap-2 overflow-hidden bg-secondary grow shadow-card-foreground rounded-lg content-start">
      <h4 className="text-primary-foreground w-full h-8 flex place-items-center font-semibold text-xl p-6 bg-primary">Resumen</h4>

      <Tabs defaultValue="month" className="min-w-full flex-col relative ">
        <div className="flex justify-end w-full px-6 overflow-hidden" >
          <TabsList className="bg-muted text-secondary-foreground  max-w-fit overflow-auto justify-start ">
            <TabsTrigger value="quarter">Ultimo dia</TabsTrigger>
            <TabsTrigger value="half">Ultima quincena</TabsTrigger>
            <TabsTrigger value="month">Ultimo mes</TabsTrigger>
            <TabsTrigger value="year">Ultimo anio</TabsTrigger>
          </TabsList>

        </div>
        <TabsContent value="quarter" >
          <SummaryTable />
        </TabsContent>
        <TabsContent value="half" >
          <SummaryTable />
        </TabsContent>
        <TabsContent value="month" >
          <SummaryTable />
        </TabsContent>
        <TabsContent value="year" >
          <SummaryTable />
        </TabsContent>
      </Tabs>


    </section >

  )
}



function SummaryTable() {
  return <Table>
    <TableCaption>Listado de egresos/ingresos por periodo.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Tipo</TableHead>
        <TableHead className="text-center">Periodo</TableHead>
        <TableHead className="text-right">Gastos</TableHead>
        <TableHead className="text-right">Ingresos</TableHead>
        <TableHead className="text-right">Balance</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Ingresos</TableCell>
        <TableCell className="text-center">Marzo - Abril</TableCell>
        <TableCell className="text-right">$0.00</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
}

export function SummaryDonutChart(props: any) {
  const data = props.data
  const category = props.category
  const labels = props?.labels ?? data.map((val: any) => val.label)
  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`
  return (
    <section className='flex flex-col justify-center grow min-w-full'>
      <div className="flex  flex-col items-center justify-center content-center min-w-full ">
        <DonutChart
          data={data}
          category={category}
          index="label"
          valueFormatter={valueFormatter}
          colors={[
            'purple-900',
            'purple-800',
            'purple-700',
            'purple-600',
            'purple-500',
            'purple-400',
          ]}

          className="w-96"
        />
        <Legend
          categories={labels}
          colors={[
            'purple-950',
            'purple-900',
            'purple-800',
            'purple-700',
            'purple-600',
            'purple-500',
            'purple-400',
            'purple-300',
            'purple-200',
            'purple-100',
            'purple-50',
          ]}

          className="w-full *:place-content-center *:place-items-center  "
        />
      </div>
    </section>
  )
}
export function SummaryIncomesDonut() {
  const incomes = [
    {
      label: 'Salario',
      sales: 980,
    },
    {
      label: 'Prestamos',
      sales: 456,
    },
    {
      label: 'Negocio',
      sales: 390,
    },
    {
      label: 'Inversiones',
      sales: 240,
    },

  ]

  return (
    <SummaryDonutChart data={incomes} category={"sales"} />
  )
}
export function SummaryExpensesDonut() {
  const data = [
    { label: 'Mascota', value: 10, },
    { label: 'Alimentos', value: 15, },
    { label: 'Salidas', value: 20, },
    { label: 'Deudas', value: 25, },
    { label: 'Servicios', value: 30, },

  ]

  return (
    <SummaryDonutChart data={data} category="value" />
  )
}

export function SummaryLineChart() {
  const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      'The Pragmatic Engineer': 2338,
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      'The Pragmatic Engineer': 2103,
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      'The Pragmatic Engineer': 2194,
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      'The Pragmatic Engineer': 2108,
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      'The Pragmatic Engineer': 1812,
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      'The Pragmatic Engineer': 1726,
    },
    {
      date: 'Jul 22',
      SemiAnalysis: 3490,
      'The Pragmatic Engineer': 1982,
    },
    {
      date: 'Aug 22',
      SemiAnalysis: 2903,
      'The Pragmatic Engineer': 2012,
    },
    {
      date: 'Sep 22',
      SemiAnalysis: 2643,
      'The Pragmatic Engineer': 2342,
    },
    {
      date: 'Oct 22',
      SemiAnalysis: 2837,
      'The Pragmatic Engineer': 2473,
    },
    {
      date: 'Nov 22',
      SemiAnalysis: 2954,
      'The Pragmatic Engineer': 3848,
    },
    {
      date: 'Dec 22',
      SemiAnalysis: 3239,
      'The Pragmatic Engineer': 3736,
    },
  ]

  const valueFormatter = function (number: number) {
    return '$' + new Intl.NumberFormat('us').format(number).toString()
  }

  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong ">Newsletter revenue over time (USD)</h3>
      <LineChart
        className=""
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  )
}