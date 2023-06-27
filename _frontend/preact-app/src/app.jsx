import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class='text-3xl font-bold underline'>Vite + Preact</h1>
      <h1 className='text-3xl font-bold underline'>Vite + Preact 2</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}