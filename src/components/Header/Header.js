import { NavLink } from 'react-router-dom';
import "./style.css"


const Header = () => {

    const isNormal = 'isNormal';
    const isActived = 'isNormal isActived';

    return (
        <div className='header'>
            <div className='header-content'>
                <div className='logo-container'>
                    <NavLink to="/" className="logo">
                        Cozy House
                    </NavLink>
                    <p>Shelter for pets in Boston</p>
                </div>
                <nav className='nav-container'>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? isActived : isNormal}>
                            About the shelter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pets" className={({isActive}) => isActive ? isActived : isNormal}>
                            Our pets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help" className={({isActive}) => isActive ? isActived : isNormal}>
                            Help the shelter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({isActive}) => isActive ? isActived : isNormal}>
                            Contacts
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    );
};

export default Header;