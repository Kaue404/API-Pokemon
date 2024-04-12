import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bem-vindo(a) a PokePesquisa!</h1>

            <Link to="/Pagina">Começe aqui!</Link>
        </div>
    );
}

export default Home;