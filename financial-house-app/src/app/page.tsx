import { LoginForm } from "@shared/components/LoginForm"

export default function Home() {
  return (
    <main className="flex place-items-center w-dvw h-dvh flex-wrap " >
      <section className=" h-dvh w-1/2 flex  place-items-center	flex-grow">
        <h1 className="text-slate-50 mx-auto ">Finanzas de la Casa</h1>
      </section>
      <LoginForm />
    </main>
  )
}
