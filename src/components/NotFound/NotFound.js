import { Link } from "react-router-dom";
import { Wrapper } from "./NotFound.styles";

const NotFound = () => {
    return (
        <div className="not-found">
            <Wrapper>
                <h2>Sorry</h2>
                <p>That page cannot be found</p>
                <br />
                <Link to='/'>Back to Home</Link>
            </Wrapper>
        </div>
    );
};

export default NotFound;