'use client';

import { useRouter } from 'next/navigation';

export default function Authors() {
  const router = useRouter();

  const authors = [
    { name: 'Jay Prasad', title: 'Backend Developer', bio: 'Alfred.' },
    { name: 'Sibi Tiruchi', title: 'Batman', bio: 'Watches you at night.' },
    { name: 'Martin Shen', title: 'UI/UX Designer', bio: 'Robin.' },
    { name: 'Christian DeGuzman', title: 'Frontend Developer', bio: 'Nightwing.' },
  ];

  return (
    <div className="bg-stone-900 min-h-screen flex items-center justify-center py-10 px-6">
      <div className="flex justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {authors.map((author, index) => (
          <div
            key={index}
            className="bg-stone-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-1">{author.name}</h2>
            <p className="text-sm text-stone-400 mb-2">{author.title}</p>
            <p className="text-stone-300 text-sm">{author.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
