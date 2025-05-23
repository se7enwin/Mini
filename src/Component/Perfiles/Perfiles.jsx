import Perfil from '../Perfil/Perfil'

export default function Perfiles(props) {


    const { caballeros } = props;
    console.log('Nombre desde Perfiles: ', caballeros)
    caballeros.map(s => console.log('NombreMap: ', s.data.name));
    return (

        <div>{

            caballeros.map(s =>

                <Perfil
                    name={s.data.name}
                    image={s.data.image}
                    rank={s.data.rank}
                    techniques={s.data.techniques}
                    constellation={s.data.constellation}
                />

            )

        }</div>
    )

}