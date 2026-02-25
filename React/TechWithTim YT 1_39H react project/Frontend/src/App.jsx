import './css/App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites'

function App() {

  const movieNumber = 1;

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </>
  )
}

export default App