import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Pagina from './pages/Pagina';
import Sobre from './pages/Sobre';
import Error from './pages/Error';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/pagina" element={ <Pagina/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="*" element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;