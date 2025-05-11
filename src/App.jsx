import Nav from './Component/Nav/Nav'
import Perfil from './Component/Perfil/Perfil'
import { Route, Routes, useLocation, useNavegation } from 'react-router-dom';
import { useState } from 'react';
export default function App() {

    const [caballeros, setCaballeros] = useState([]);






    function onSearch(text) {

        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

        const yourUrl = 'www.saintseiyaapi.com/api/characters/'

        console.log(`Url: ${corsAnywhere}${yourUrl}${text}`)

        const url = `${corsAnywhere}${yourUrl}${text}`

        console.log('Url url: ' + url);


        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setCaballeros((oldCaballeros) => [...oldCaballeros, data]);
                } else {
                    window.alert('No hay personajes con ese ID');
                }

                console.log(data)
                for (var i = 0; i < caballeros.length; i++) {

                    console.log(`Caballeros: `, caballeros[i].data.name)
                }
            });
    }







    // fetch(url, {
    //     method: 'GET',
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));





    // fetch(`https://www.saintseiyaapi.com/api/characters/${text}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if (data.name) {

    //             setCaballeros((oldCaballeros) => [...oldCaballeros, data]);

    //         } else {

    //             window.alert('No hay personajes con ese ID')
    //         }
    //         console.log(data);

    //     })

    // }


    return (

        <div>
            <h3>Componente Función desde Jsx - Local </h3>
            <hr />
            <Nav onSearch={onSearch} />
            <Routes>
                <Route path='/perfil' element={<Perfil />} />


            </Routes>
        </div>


    )
}