import { Link } from "react-router-dom";
import TAlogo from '../../images/talogo.jpg';

import { Wrapper, Tags, LogoImg } from "./Navbar.styles";


const Navbar = () => {
    return (
        <Wrapper>
            <Tags>
                <nav className="navbar">
                    <div className="links">
                        <Link to='/'>
                            <LogoImg src={TAlogo} alt="Takeaway Table Logo" />
                        </Link>
                        <h1>Takeaway Bot</h1>
                        <br />
                        <Link to='/all'>All</Link>
                        <Link to='/general'>General</Link>
                        <Link to='/live_stats'>Live Stats</Link>
                    </div>
                </nav>
            </Tags>
        </Wrapper>
    );
};

export default Navbar;