"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@shared/components/ui/button"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/components/ui/form"
import { Input } from "@shared/components/ui/input"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Nombre de usuario debe tener al menos 5 caracteres.",
  }).includes("@", { message: "Nombre de usuario debe incluir '@'." }),
  password: z.string().min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }),
})

interface LoginFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}

export function LoginForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 p-20 flex-grow flex-wrap bg-secondary h-dvh justify-center flex  flex-col">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full max-w-screen-md">
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input className="w-full max-w-screen-md" placeholder="@Usuario" {...field} />
                </FormControl>
                <FormDescription>
                  Nombre de usuario público.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full max-w-screen-md">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••••••" {...field} />
                </FormControl>
                <FormDescription>
                  Contraseña de usuario.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <section className="flex justify-between">
            <Button type="submit" variant="outline">Registrarse</Button>
            <Button type="submit" onClick={() => router.push("/menu")}>Login</Button>
          </section>
        </form>
      </Form>

    </>
  )
}
