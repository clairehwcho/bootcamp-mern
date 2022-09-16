import { Link } from 'react-router-dom';

const ManagePlayerStatusMenu = (props) => {
    return (
        <div className="subMenus">
            <Link to="/status/game/1"><h3>Game 1</h3></Link>
            <h3>|</h3>
            <Link to="/status/game/2"><h3>Game 2</h3></Link>
            <h3>|</h3>
            <Link to="/status/game/3"><h3>Game 3</h3></Link>
        </div>
    );
};

export default ManagePlayerStatusMenu;