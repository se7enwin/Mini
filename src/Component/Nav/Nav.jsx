
import Busca from './Busca'
export default function Nav(props) {

    return (

        <div>

            <span> Barra de Navegación  </span>
            <Busca onSearch={props.onSearch} />

        </div>

    )
}