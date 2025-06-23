import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedData } from '../SharedData';

function NoteList() {
  const [notes, setNotes] = useState<string[]>([]);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refreshNotes();
  }, []);

  const refreshNotes = () => {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) keys.push(key);
    }
    setNotes(keys);
  };

  const handleSelect = (noteTitle: string) => {
    SharedData.CurrentFile = noteTitle;
    navigate('/edit');
  };

  const handleExport = () => {
    const allNotes: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        allNotes[key] = localStorage.getItem(key) || '';
      }
    }

    const blob = new Blob([JSON.stringify(allNotes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes_backup.json';
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string) as Record<string, string>;
        for (const [key, value] of Object.entries(data)) {
          localStorage.setItem(key, value);
        }
        refreshNotes();
        alert('Notes imported successfully!');
      } catch (err) {
        alert('Failed to import notes. Invalid file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Notes</h2>

      <div className="flex gap-2 mb-4">
        <button
          className="
          bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:bg-blue-800"
          onClick={handleExport}
        >
          Export Notes
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 active:bg-green-800"
          onClick={handleImportClick}
        >
          Import Notes
        </button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImport}
        />
      </div>

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
