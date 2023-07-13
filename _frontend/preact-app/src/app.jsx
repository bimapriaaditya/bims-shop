import { useState } from 'preact/hooks'

export function App() {
  const [hitung, setHitung] = useState(0);

  return (
    <>
      <div className='m-4'>
        <h1>Lorem Ipsum</h1>
        <button onClick={ () => setHitung((hitung) => hitung + 1)} className='block p-2 bg-red-200'>
          Klik Aku &nbsp;
          <span>{ hitung }</span>
        </button>
      </div>
    </>
  )
}