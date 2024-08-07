import { useEffect } from 'react'
import './App.css'
import { getList } from './api'
import { Icon } from '@iconify-icon/react'
import { Button } from 'antd'

function App() {
  useEffect(() => {
    getList().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div className="flex h-full w-auto flex-col items-center justify-center">
      <h1 className="border-spacing-48 bg-slate-400 text-3xl font-bold underline">Hello world!</h1>
      {/* <Icon icon="svg-spinners:blocks-shuffle-3" style={{ fontSize: '50vh' }} /> */}
      <Button type="primary" className="bg-zinc-700">
        button
      </Button>
    </div>
  )
}

export default App
