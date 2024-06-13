import { ProfileAvatar } from './components'

export default function Page() {
  return (
    <main className=' overflow-hidden min-h-dvh flex flex-column justify-evenly flex-wrap content-stretch  relative '>
      <nav className='text-secondary w-full  px-5 py-2.5 flex justify-end h-12'>
        <a className='cursor-pointer hover:scale-105 transition-transform box-border font-semibold'>Cerrar Sesion</a>
      </nav>
      <section className='overflow-hidden px-8 flex'>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380050393572271"
          crossOrigin="anonymous"></script>
        <section className="flex items-start max-h-fit justify-start flex-nowrap min-w-96 flex-grow gap-8 px-8 py-40 overflow-x-auto overflow-y-hidden">
          <ProfileAvatar name="Perfil 1" number={111} avatar="VEGETTA777" />
          <ProfileAvatar name="Perfil 2" number={111} avatar="Finn" />

        </section>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4380050393572271"
          crossOrigin="anonymous"></script>

      </section>
    </main>
  )
}
