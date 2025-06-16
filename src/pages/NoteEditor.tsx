import { useState, useEffect } from 'react';
import { SharedData } from '../SharedData';

function NoteEditor() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [feedback, setFeedback] = useState('');

  const getTitleError = (test: string): string => {
    if (test === '') return 'Empty File Name';
    else if (localStorage.getItem(test) !== null && test !== SharedData.CurrentFile)
      return 'File Name Already Exists!';
    return '';
  };

  const handleTitleBlur = () => {
    const trimmedTitle = title.trim();

    if (getTitleError(trimmedTitle) === '') {
      if (SharedData.CurrentFile !== '') {
        localStorage.removeItem(SharedData.CurrentFile);
      }
      SharedData.CurrentFile = trimmedTitle;
    }
    setTitle(trimmedTitle);
    handleSave(trimmedTitle, note);
  };

  const handleSave = (saveTitle = title, saveNote = note) => {
    const titleError = getTitleError(saveTitle);
    if (titleError === '') {
      setFeedback('');
      console.log('Saving note:', { title: saveTitle, note: saveNote });
      localStorage.setItem(saveTitle, saveNote);
    } else {
      setFeedback(titleError);
    }
  };

  const handleNewNote = () => {
    setTitle('');
    setNote('');
    SharedData.CurrentFile = '';
  };

  const handleCopyNote = () => {
    if (title.trim() === '') {
      return;
    }

    let copyTitle = title + ' (copy)';
    let counter = 1;
    while (localStorage.getItem(copyTitle) !== null) {
      copyTitle = `${title} (copy ${counter++})`;
    }

    setTitle(copyTitle);
    SharedData.CurrentFile = copyTitle;
    handleSave(copyTitle, note);
  };

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  useEffect(() => {
    if (SharedData.CurrentFile !== '') {
      const savedNote = localStorage.getItem(SharedData.CurrentFile);
      if (savedNote !== null) {
        setTitle(SharedData.CurrentFile);
        setNote(savedNote);
      }
    }
  }, []);

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

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => handleSave()}
        >
          Save
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          onClick={handleNewNote}
        >
          New Note
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          onClick={handleCopyNote}
        >
          Copy Note
        </button>
      </div>

      {feedback && (
        <p className="mt-2 text-sm text-red-600">{feedback}</p>
      )}
    </div>
  );
}

export { NoteEditor };
