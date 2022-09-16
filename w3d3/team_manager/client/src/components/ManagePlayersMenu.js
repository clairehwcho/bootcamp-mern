import { Link } from 'react-router-dom';

const ManagePlayersMenu = (props) => {
    return (
        <div className="subMenus">
            <Link to="/players/list"><h3>List</h3></Link>
            <h3>|</h3>
            <Link to="/players/addplayer"><h3>Add Player</h3></Link>
        </div>
    );
};

export default ManagePlayersMenu;