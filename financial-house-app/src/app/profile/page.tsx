import { ProfileAvatar } from './components'

function Page() {
  return (
    <main className=' overflow-hidden min-h-dvh flex flex-column justify-evenly flex-wrap content-stretch  relative '>
      <nav className='text-secondary w-full  px-5 py-2.5 flex justify-end h-12'>
        <a className='cursor-pointer hover:scale-105 transition-transform box-border font-semibold'>Cerrar Sesion</a>
      </nav>
      <section className='overflow-hidden px-8 flex'>
        <section className="flex items-start max-h-fit justify-evenly flex-nowrap min-w-auto flex-grow gap-8 px-8 py-40 overflow-x-auto overflow-y-hidden">
          <ProfileAvatar name="Perfil 1" number={111} avatar="VEGETTA777" />
          <ProfileAvatar name="Perfil 2" number={111} avatar="Finn" />
        </section>

      </section>
    </main>
  )
}

export default Page



