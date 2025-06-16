import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedData } from '../SharedData';

function NoteList() {
  const [notes, setNotes] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const keys: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) keys.push(key);
    }

    setNotes(keys);
  }, []);

  const handleSelect = (noteTitle: string) => {
    SharedData.CurrentFile = noteTitle;
    navigate('/edit');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Notes</h2>
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
    </div>
  );
}

export { NoteList };
