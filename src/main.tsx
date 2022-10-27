import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ImageList from './ImageList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImageList />
  </React.StrictMode>
)
