import { useEffect } from 'react'
import './App.css'
import { getList } from './api'

function App() {
  useEffect(() => {
    getList().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div className="flex h-full w-auto justify-center align-middle">
      <h1 className="border-spacing-48 bg-slate-400 text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
