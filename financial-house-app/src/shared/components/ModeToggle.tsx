"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button, ButtonProps } from "@/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"

export function ModeToggle(props: React.JSX.IntrinsicAttributes & ButtonProps & React.RefAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={handleTheme} {...props}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {/* <span className="sr-only">Toggle theme</span> */}
    </Button>

  )
}

{/* <DropdownMenu>
  <DropdownMenuTrigger asChild>

  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}