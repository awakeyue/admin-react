// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/style/index.css'
import worker from './mock'

if (import.meta.env.DEV) {
  worker
    .start({
      onUnhandledRequest: 'bypass', // 不拦截非apiHandlers内的接口
    })
    .then(() => {
      ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
    })
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
}
