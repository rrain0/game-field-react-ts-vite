import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'src/ui/App/App.tsx'
import 'src/ui-data/styles/setup/reset.css'
import 'src/ui-data/styles/setup/fonts.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
