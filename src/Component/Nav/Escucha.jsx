import { useState } from 'react';
export default function Escucha(props) {

    const [id, setId] = useState('');
    function save(v) {

        setId(v.target.value)
    }

    return (

        <div>


            <input type='search' placeholder='Saint Id' onChange={save} />
            <button onClick={() => props.getApi(id)}>Get it</button>

        </div>

    )




}