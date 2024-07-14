import "./App.css"

export default function App() {
  return (
    <main className="min-w-[100dvw] min-h-[100dvh] max-h-[100dvh] max-w-[100dvw] flex">
      <AsideMenuListNotes />
      <textarea
        className="min-h-[100dvh] max-h-[100dvh] w-full p-4 resize-none outline-slate-100"
        placeholder="Write your note here it will be saved automatically..."
      ></textarea>
    </main>
  )
}

function AsideMenuListNotes() {
  return (
    <aside className="max-w-96 min-h-[100dvh] shadow-lg p-4">
      {/* Header list section*/}
      <section className="flex shadow-md px-4 py-8">
        <h2 className="text-2xl font-bold underline underline-offset-8">
          User Notes
        </h2>
      </section>
      {/* List section */}
      <section className="flex flex-col p-4 shadow-md rounded-md overflow-hidden">
        <h6 className="text-lg font-bold">Note 1</h6>
        <p className="text-sm ">
          This is a brief description of the first note.
        </p>
      </section>
      <section className="flex flex-col p-4 shadow-md rounded-md overflow-hidden *:overflow-hidden *:text-nowrap *:text-ellipsis *:max-w-full">
        <h6 className="text-lg font-bold">Note 2</h6>
        <p className="text-sm">
          This is a long description of the second note that is being added to
          the list of notes in the application to test the overflow behavior of
          the notes when the text is too long and the container is too small to
          fit on the main content area.
        </p>
      </section>
      <section className="flex flex-col p-4 shadow-md rounded-md overflow-hidden *:overflow-hidden *:text-nowrap *:text-ellipsis *:max-w-full">
        <h6 className="text-lg font-bold">
          Note 3 that is a long title and does not fit in the container
        </h6>
        <p className="text-sm">
          This is a brief description of the third note.
        </p>
      </section>
    </aside>
  )
}
