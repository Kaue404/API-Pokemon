import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'

import Pagina from './pages/Pagina'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/pagina" element={ <Pagina/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;