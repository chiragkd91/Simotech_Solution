import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPerformanceOptimizations, registerServiceWorker } from './lib/performance'

// Initialize performance optimizations
initPerformanceOptimizations();

// Register service worker for caching
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
