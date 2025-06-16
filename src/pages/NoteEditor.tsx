import { useState } from 'react';
import { SharedData } from '../SharedData';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleTitleBlur = () => {
    setTitle(title.trim());
    if (localStorage.getItem(title) != null)
    {
      console.warn("Note Already exists!");
      setTitle("");
    }
    else
      SharedData.CurrentFile = title;
    handleSave();
  };

  const handleSave = () => {
    if (title != "")
    {
      console.log('Saving note:', { title, note });
      localStorage.setItem(title, note);
    }
    else
      console.warn("Invalid File name!");
  };

  return (
    <div>
      <input
        type="text"
        className="text-2xl font-semibold text-blue-700 mb-4 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleTitleBlur}
      />
      <textarea
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={8}
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export { NoteEditor };
