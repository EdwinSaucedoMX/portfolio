"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/shared/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/shared/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover"
import { CommandList } from "@/shared/components/ui/command"



export function MovementCategoriesBox() {
  const [open, setOpen] = React.useState(false)
  const [category, setCategory] = React.useState(false)
  const [value, setValue] = React.useState("")


  const [frameworks, setFrameworks] = React.useState([
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between font-normal"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Selecciona..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Busca una categoria..." onClick={() => setCategory(false)} />
          <CommandEmpty>
            {
              category ?
                <input placeholder="Nueva categoria" className="outline-none" autoFocus={true} onBlur={(e) => {
                  console.log({ e })
                  setValue(e.target.value === value ? "" : e.target.value)
                  frameworks.push({ value: e.target.value, label: e.target.value })
                  setOpen(false)
                }} />
                :
                <button className="text-left w-full px-5 text-muted-foreground hover:text-secondary-foreground" onClick={() => setCategory(true)}>Agregar Categoria</button>
            }
          </CommandEmpty>
          <CommandList>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
