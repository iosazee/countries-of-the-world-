import worldMap from './worldMap.jpg';
import './Header.css';

function Header () {
    return (
        <div>
            <h1>COUNTRIES OF THE WORLD</h1>
            <img src={worldMap} className='header-logo' alt='worldmap' />
        </div>
    )
}

export default Header;