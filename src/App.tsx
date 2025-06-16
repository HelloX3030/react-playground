import { Routes, Route, Link } from 'react-router-dom';
import { NoteList } from './pages/NoteList';
import { NoteEditor } from './pages/NoteEditor';

function App() {
  return (
    <div>
      <h1>Notes App</h1>
      <nav>
        <Link to="/">All Notes</Link> | <Link to="/edit">Edit Note</Link>
      </nav>

      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/edit" element={<NoteEditor />} />
      </Routes>
    </div>
  );
}

export default App;
