import { useEffect } from 'react'
import './App.css'
import AntdConfig from './theme/antd'
import { getList } from './api'

import { Tabs } from 'antd'
import SettingButton from './layouts/components/SettingButton'

function App() {
  useEffect(() => {
    getList().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <AntdConfig>
      <div className="flex h-full w-auto flex-col items-center justify-center">
        <h1 className="border-spacing-48 bg-slate-400 text-3xl font-bold underline">
          Hello world!
        </h1>
        <SettingButton></SettingButton>
      </div>
    </AntdConfig>
  )
}

export default App
