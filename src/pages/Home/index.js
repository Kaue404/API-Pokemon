import { Link } from 'react-router-dom';

function Home() {
    return (

        <div>
            <h2 style={{ fontSize: '35px' }}>Bem-vindo(a) a PokePesquisa!</h2>
            
            <div className="botao" style={{ textAlign: "center", marginTop: '40px'}}>
                <button style={{ color: "white", width: '100px', borderStyle: 'none', fontSize: "25px"}}>
                    <Link to="/Pagina" style={{ textDecoration: "none", color: "inherit" }}>Comece aqui!</Link>
                </button>
            </div>


        </div>
    );
}

export default Home;