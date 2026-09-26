import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';

import Inicio from './componentes/inicio'
import Coleccion from './componentes/coleccion'
import Favoritos from './componentes/favoritos'
import Informativa from './componentes/informativa'
import Pokemon from './componentes/pokemon'
import Usuario from './componentes/usuario'
import './App.css'


function App() {

  return (
    <>

    <Router>

    <nav className='c-menu'>
        <Link to="/"> Inicio</Link>
        <Link to="/coleccion"> Coleccion</Link>
        <Link to="/favoritos"> Favoritos</Link>
        <Link to="/informativa"> Informativa</Link>
        <Link to="/usuario"> Usuario</Link>
    </nav>
      <Routes>
        <Route path="/"element={<Inicio/>}></Route>
        <Route path="/coleccion"element={<Coleccion/>}/>
        <Route path="/favoritos"element={<Favoritos/>}/>
        <Route path="/informativa"element={<Informativa/>}/>
        <Route path="/inicio"element={<Inicio/>}/>
        <Route path="/usuario"element={<Usuario/>}/>
        <Route path="/pokemon/:name"element={<Pokemon/>}/>
      </Routes>

      
    </Router>
    </>
  )
}

export default App
