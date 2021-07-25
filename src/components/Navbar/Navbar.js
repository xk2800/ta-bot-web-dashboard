import { Link } from "react-router-dom";
import TAlogo from '../../images/talogo.jpg';

import { Wrapper, Tags, LogoImg } from "./Navbar.styles";


const Navbar = () => {
    return (
        <Wrapper>
            <Tags>
                <Link>
                    <LogoImg src={ TAlogo } alt="Takeaway Table Logo" />
                </Link>
            </Tags>
        </Wrapper>
    );
};

export default Navbar;