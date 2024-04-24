import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
import { Separator } from "@/shared/components/ui/separator"
import { Pencil1Icon } from "@radix-ui/react-icons"


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"
import Link from "next/link"


export function ProfileCard(props: any): React.JSX.Element {
  return (
    <div className='flex bg-primary flex-row content-stretch place-items-center h-32 py-4 px-2 sm:transition-all  gap-3 '>
      {props.children}
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
    <section className={`flex justify-center content-center text-secondary-foreground flex-col hover:text-secondary hover:bg-secondary-foreground ${props.className} `} {...props} >
      <section className={`flex flex-nowrap px-4 text-nowrap items-start group-hover/aside:sm:justify-start  gap-10  cursor-pointer py-4 min-w-full transition-all  min-h6 sm:justify-center justify-start ${props.activeclass}`} >
        <props.icon className="icon-section cursor-pointer text-2xl w-6 h-6 " />
        <p className="sm:hidden group-hover/aside:flex">{props.title}</p>
      </section>
      {!props.hide && <Separator className="bg-secondary-foreground opacity-10 " />}
    </section>
  )
}

export function SummaryCard(props: any) {
  return (

    <section className="flex flex-wrap gap-2 overflow-hidden bg-secondary grow shadow-card-foreground rounded-lg content-start">
      <h4 className="text-primary-foreground w-full h-8 flex place-items-center font-semibold text-xl p-6 bg-primary">Resumen</h4>

      <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </section >

  )
}



