import Nav from './Component/Nav/Nav'
import Perfil from './Component/Perfil/Perfil'
import { Route, Routes, useLocation, useNavegation } from 'react-router-dom';
export default function App() {

    return (

        <div>
            <h3>Componente Función desde Jsx - Local </h3>
            <hr />
            <Nav />
            <Routes>
                <Route path='/perfil' element={<Perfil />} />


            </Routes>
        </div>


    )
}