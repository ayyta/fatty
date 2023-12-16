import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DamnCrazy from './DamnCrazy.jsx'
import Home from './Home.jsx'
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/guilty" element={<DamnCrazy/>}/>
      </Routes>
    
    
    </BrowserRouter>


    </>
  )
}

export default App
