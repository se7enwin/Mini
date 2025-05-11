import { useState } from 'react';

export default function Busca(props) {

    const [texto, setTexto] = useState('');

    function handleChange(event) {

        console.log(event.target.value);
        setTexto(event.target.value)
    }

    return (

        <div>
            <input type='search' value={texto} onChange={handleChange} />
            <button onClick={() => props.onSearch(texto)}> Agregar </button>
        </div>
    )
}