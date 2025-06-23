import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NoteList } from './pages/NoteList';
import { NoteEditor } from './pages/NoteEditor';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { supabase } from './utils/supabase';

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      setUserEmail(data.user?.email ?? null);
    }

    checkAuth();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">Notes App</h1>
        <nav className="text-blue-600 space-x-4">
          <Link className="hover:underline" to="/">All Notes</Link>
          <span className="text-gray-400">|</span>
          <Link className="hover:underline" to="/edit">Edit Note</Link>

          {userEmail ? (
            <>
              <span className="text-gray-400">|</span>
              <button
                onClick={handleSignOut}
                className="hover:underline text-blue-600"
                title="Click to sign out"
              >
                {userEmail}
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-400">|</span>
              <Link className="hover:underline" to="/sign_up">Sign Up</Link>
              <span className="text-gray-400">|</span>
              <Link className="hover:underline" to="/sign_in">Sign In</Link>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/edit" element={<NoteEditor />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
