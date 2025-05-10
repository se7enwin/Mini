import Nav from './Component/Nav/Nav'
import Perfil from './Component/Perfil/Perfil'
import { Route, Routes, useLocation, useNavegation } from 'react-router-dom';
import { useState } from 'react';
export default function App() {

    /*Podés usar como primer técnica de posicionarte en el arhivo que consideres principal o bien uno al azar y ver se pasos:
    Acordate  ! De MAS a Menos.. entonces:
     voy a: Crear una barra o nav la cual tenga un cuadro de busqueda y un boton los cuales realizan una consulta en una api y  retornen un log con el objeto{} */

    const [saint, setSaint] = useState([]);
    const data = [];
    function getApi(id) {

        const cors = 'https://cors-anywhere.herokuapp.com/';
        const web = 'www.saintseiyaapi.com/api/characters/'
        const url = `${cors}${web}${id}`;
        fetch(url).then(x => x.json())
            .then(d => {
                console.log(d.data)
                if (d.data) {

                    setSaint((old) => [...old, d.data])
                }


            }
            )

        console.log('Santo: ', saint)
    }

    return (


        <div>
            <h3>Componente Función desde Jsx - Local </h3>
            <hr />
            <Nav getApi={getApi} />
            <Routes>
                <Route path='/perfil' element={<Perfil />} />


            </Routes>
        </div>


    )
}