import { LoginForm } from "@shared/components/LoginForm"

export default function Home() {
  return (
    <main className="flex place-items-center max-w-full h-dvh flex-wrap " >
      <section className=" h-dvh w-1/2 flex  place-items-center	flex-grow min-w-96">
        <h1 className="text-secondary-foreground mx-auto ">Finanzas de la Casa</h1>
      </section>
      <LoginForm />
    </main>
  )
}
