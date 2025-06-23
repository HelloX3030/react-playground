# ToDo
- Create Cheet Sheets:
    - What libraries/stuff is included just in default react, and what not? e. g. multiple pages actually is not a default!
        - multiple pages => Routing stuff
    - Tailwind setup: https://tailwindcss.com/docs/installation/using-vite
    - Tailwind cheat sheet :D
    - How to get user inputs (e. g. forms)
        - controlled vs uncontrolled inputs
    - common React input events
    - React States
    - How does local storage work? 
        => what is SessionStorage? what other storage types are there?
        => Iterate over Items, filter them
        => json for more complex data
    - Refs from react, similar to static function variables in c
    - Common React Libraries, that people use to expand the core functionality: (Redux, Zustand, or even React Context?)
    - Timer => setTimeout
    - useEffect => only on mount?
    - lslint cheat sheet

    - React Stuff:
    {notes.length === 0 ? (
  <p className="text-gray-500">No notes found.</p>
) : (
  <ul className="space-y-2">
    {notes.map((title) => (
      <li key={title}>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => handleSelect(title)}
        >
          {title}
        </button>
      </li>
    ))}
  </ul>
)}
=> How does this {} stuff work? what does it do?
=> what about this .map() part?

- => icons:
ty. Now I need a icon for my notes app. Are there websites you could recomend me? for prototyping? what about later for releases?
For Prototyping (Quick & Free or Low-cost)

    FontAwesome

        Huge free icon library, easy to integrate as SVG or React components.

        Great for prototyping with plenty of note-related icons (faStickyNote, faPen, faFileAlt, etc).

        Also has pro paid version if you want more options later.

    Heroicons

        Free, open-source SVG icons by Tailwind Labs.

        Simple, clean, modern style.

        Perfect for prototyping with a consistent design language.

    Material Icons

        Google's free icon set used in Material Design.

        Large collection and very recognizable.

        Easy to implement with React or vanilla web apps.

    Iconmonstr

        Free, simple black & white icons downloadable as SVG or PNG.

        Good for quick mockups without styling.

For Final Releases (High Quality, Unique)

    Custom Icons (Commission a Designer)

        For a unique brand identity, hire a graphic designer or icon artist.

        You get a custom, polished icon tailored to your app’s style and values.

        Platforms: Fiverr, Upwork, or specialized design agencies.

    IconScout

        Large marketplace for high-quality premium and free icons.

        You can buy individual icons or icon packs.

        Comes in multiple formats including SVG, PNG, and React components.

    Noun Project

        Huge library of icons, including unique and artistic ones.

        You can license icons individually.

        Good for polished, professional-looking app icons.

    Design Your Own with Tools

        Use vector graphic design tools like Figma, Adobe Illustrator, or Inkscape (free) to create your own.

        Great if you want to build brand recognition by designing your own unique icon.
