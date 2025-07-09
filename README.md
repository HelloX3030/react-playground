# ToDo
- Create Cheet Sheets:
    - How to get user inputs (e. g. forms)
        - controlled vs uncontrolled inputs
    - common React input events
    - React States
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

