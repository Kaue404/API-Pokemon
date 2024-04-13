import { Link } from "react-router-dom";
import './style.css';


function Header(){
    return (
        <header>
            <h1>PokePesquisa - API Pokemon</h1>

            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/pagina'>PokePesquisa</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    )
}

export default Header;