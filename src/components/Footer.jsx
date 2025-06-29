import { Link } from 'react-router-dom';


function Footer() {

     const year = new Date().getFullYear('Y');

    return(
        
        <nav className='bg-black text-white p-4 flex justify-between items-center'>
            
            <div>
                <img src="/img/logo.png" alt="" />
            </div>

            <div>
            <ul className='flex space-x-8'>
                <li><Link to="https://github.com/EliezerSunny">&copy; {year} Eliezer Sunny</Link></li>
            </ul>
            </div>

        </nav>
    );
}

export default Footer;