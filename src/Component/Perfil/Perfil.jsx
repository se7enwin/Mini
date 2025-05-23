export default function Perfil({ name, constellation, techniques, rank, image }) {

    console.log('Nombre desde Perfil: ', name)
    return (

        <h3>
            <p>{name}</p>
            <img src={image} />
            <p>{constellation}</p>
            <p>{techniques}</p>
            <p>{rank}</p>

        </h3>
    )
}