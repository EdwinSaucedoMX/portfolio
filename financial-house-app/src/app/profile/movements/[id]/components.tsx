import { Button } from "@/shared/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group"
import { MovementCategoriesBox } from "./client-components"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"

export function MovementsCard() {
  return (
    <Card className="border-muted flex flex-col justify-between bg-secondary">
      <CardHeader>
        <CardTitle className="text-2xl">Movimientos</CardTitle>
        <CardDescription className="text-xl">Agrega tus egresos/ingresos.</CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <form className="flex flex-col content-between justify-evenly ">
          <ToggleGroup type="single" variant="outline" className=" w-full flex justify-end ">
            <ToggleGroupItem value="a" >Ingreso</ToggleGroupItem>
            <ToggleGroupItem value="b">Egreso</ToggleGroupItem>
          </ToggleGroup>
          <div className="flex flex-col content-center gap-4 justify-between h-full">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="concept">Concepto</Label>
              <Input id="concept" placeholder="Descripcion breve" className="bg-background" />
            </div>
            <div className="flex flex-col gap-1 space-y-1.5">
              <Label htmlFor="categoria">Categoria</Label>
              <MovementCategoriesBox />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Agregar</Button>
      </CardFooter>
    </Card>
  )
}

export function LastMovementsTable(props: any) {
  return (

    <section className="flex flex-wrap gap-2 overflow-hidden bg-secondary grow shadow-card-foreground rounded-lg content-start">
      <h4 className="text-primary-foreground w-full h-8 flex place-items-center font-semibold text-xl p-6 bg-primary">Ultimos movimientos</h4>

      <Table >
        <TableCaption>Listado de ultimos movimientos registrados.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Tipo</TableHead>
            <TableHead className="">Fecha</TableHead>
            <TableHead>Concepto</TableHead>
            <TableHead>Metodo</TableHead>
            <TableHead className="text-right">Cantidad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Egreso</TableCell>
            <TableCell>01/04/2024</TableCell>
            <TableCell>Salario</TableCell>
            <TableCell>Tarjeta de credito</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </section >

  )
}
