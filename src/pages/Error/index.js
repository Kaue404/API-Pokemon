import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <h2>Ops, a página que você está tentando acessar não existe!</h2>
            <br />

            <span>Encontramos as seguintes páginas: </span><br />
            <Link to='/'>Home</Link><br />
            <Link to='/pagina'>PokePesquisa</Link><br />
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Error;