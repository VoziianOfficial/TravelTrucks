// src/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routers/AppRoutes';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
