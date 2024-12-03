import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter();
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
    </div>
  )
}

export default App