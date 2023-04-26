import {Link} from 'react-router-dom';
export const NavBar=()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/Empresa">Empresa</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                    <li><Link to="/Conocenos">Conocenos</Link></li>
                </ul>
            </nav>
        </div>
    );
}