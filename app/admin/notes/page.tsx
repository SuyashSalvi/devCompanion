// "use client";

// import { useState, FormEvent } from 'react';
// import { useSession } from 'next-auth/react';
// import axios from 'axios';

// export default function AdminNotes() {
//   const { data: session } = useSession();
//   const [note, setNote] = useState({ title: '', content: '' });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await axios.post('/api/notes', note);
//     setNote({ title: '', content: '' });
//   };

//   if (!session) {
//     return <p>You must be logged in to post notes.</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={note.title}
//         onChange={(e) => setNote({ ...note, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Content"
//         value={note.content}
//         onChange={(e) => setNote({ ...note, content: e.target.value })}
//       />
//       <button type="submit">Post Note</button>
//     </form>
//   );
// }
