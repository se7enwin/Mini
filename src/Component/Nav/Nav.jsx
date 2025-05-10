import Escucha from './Escucha';
export default function Nav(props) {

    return (

        <div>

            <h3> Barra de Navegación </h3>
            <Escucha getApi={props.getApi} />
        </div>
    )
}