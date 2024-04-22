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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"

export function MovementsCard() {
  return (
    <Card className="border-muted">
      <CardHeader>
        <CardTitle className="text-2xl">Movimientos</CardTitle>
        <CardDescription className="text-xl">Agrega tus egresos/ingresos.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="concept">Concepto</Label>
              <Input id="concept" placeholder="Descripcion breve" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="categoria">Categoria</Label>
              <Select>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
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
