"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Nombre de usuario debe tener al menos 5 caracteres.",
  }).includes("@", { message: "Nombre de usuario debe incluir '@'." }),
  password: z.string().min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }),
})

export function LoginForm() {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="@Usuario" {...field} />
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
              <FormItem>
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
          <section className="buttons">
            <Button type="submit" variant="outline">Registrarse</Button>
            <Button type="submit">Login</Button>
          </section>
        </form>
      </Form>
      <style jsx>
        {`
          .buttons {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}
