import { Link } from 'react-router-dom';

function Navbar() {

    return(
        
        <nav className='bg-black text-white p-4 flex justify-between items-center'>
            
            <div>
                <img src="/img/logo.png" alt="" />
            </div>

            <div>
            <ul className='flex space-x-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>

        </nav>
    );
}

export default Navbar;