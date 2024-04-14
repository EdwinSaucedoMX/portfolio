import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"
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

export function ProfileCard(props: any): React.JSX.Element {
  return (
    <div className='flex flex-row content-stretch place-items-center max-h-fit py-4 transition-all  gap-3'>
      <figure className="relative">
        <Avatar className='shadow-sm shadow-card-foreground '>
          <AvatarImage src={props.avatar} className="aspect-square " />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <Pencil1Icon className="absolute -bottom-1 -right-1 aspect-square min-w-6 min-h-6 flex items-center justify-center text-center rounded-full  p-1 hover:scale-105 transition-all cursor-pointer bg-secondary opacity-65 hover:opacity-100" />

      </figure>
      <section className="flex flex-col">
        <h4 className='text-primary cursor-pointer  font-medium text-base text-nowrap'>Short Name</h4>
        <a className='text-primary cursor-pointer text-sm font-light text-nowrap '>Edit Profile</a>
      </section>
    </div>
  )
}

export function AsideSection(props: { title: string, icon: any }) {
  return (
    <section className="flex flex-nowrap text-primary text-nowrap items-start justify-start  gap-5 p-2 cursor-pointer border-b border-gray-200 min-w-max max-w-full transition-all">
      <props.icon className="icon-section cursor-pointer text-2xl w-6 h-6" />
      <p>{props.title}</p>
    </section>
  )
}

export function SummaryCard(props: any) {
  return (

    <section className="flex flex-wrap gap-2 p-6 bg-secondary grow shadow-card-foreground rounded-lg content-start">
      <h4 className="text-primary font-semibold text-lg">Resumen</h4>
      <Table>
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
    </section>

  )
}




