import { useState } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-gray-900">
      <div className="mb-8 flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="animate-spin-slow h-24 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-8 text-5xl font-bold">Vite + React</h1>
      <div className="p-8 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-3 transition-colors hover:border-indigo-500"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="rounded bg-gray-200 px-1">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
