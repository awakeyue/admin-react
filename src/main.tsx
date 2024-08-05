// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import './index.css'
import worker from './mock'

if (import.meta.env.DEV) {
  worker.start().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
  })
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
}
