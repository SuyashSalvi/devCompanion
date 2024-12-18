"use client";

import { useEffect, useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function AdminLeetCode() {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const [post, setPost] = useState({
    problem: '',
    solution: '',
    approach: '',
    timeComplexity: '',
    spaceComplexity: '',
    leetCodeLink: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('/api/leetcode', post);
    setPost({
      problem: '',
      solution: '',
      approach: '',
      timeComplexity: '',
      spaceComplexity: '',
      leetCodeLink: '',
    });
  };

  if (!isLoggedIn) {
    return <p>You need to be logged in to access this page.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Problem"
        value={post.problem}
        onChange={(e) => setPost({ ...post, problem: e.target.value })}
      />
      {/* Repeat for other fields like solution, approach, etc. */}
      <button type="submit">Post LeetCode Problem</button>
    </form>
  );
}
