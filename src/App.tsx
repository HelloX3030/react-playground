import { Routes, Route, Link } from 'react-router-dom';
import { NoteList } from './pages/NoteList';
import { NoteEditor } from './pages/NoteEditor';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">Notes App</h1>
        <nav className="text-blue-600 space-x-4">
        <Link className="hover:underline" to="/">All Notes</Link>
        <span className="text-gray-400">|</span>
        <Link className="hover:underline" to="/edit">Edit Note</Link>
        </nav>
    </header>

    <main>
        <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/edit" element={<NoteEditor />} />
        </Routes>
    </main>
    </div>

  );
}

export default App;
