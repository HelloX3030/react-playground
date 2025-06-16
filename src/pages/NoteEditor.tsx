import { useState } from 'react';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleTitleBlur = () => {
    setTitle(title.trim());
  };

  const handleSave = () => {
    console.log('Saving note:', { title, note });
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
