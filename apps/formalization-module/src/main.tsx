import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@repo/tailwind-config/globals'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
