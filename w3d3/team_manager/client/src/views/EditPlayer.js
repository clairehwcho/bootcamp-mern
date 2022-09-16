import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    getPlayerById,
    updatePlayerById,
    deletePlayerById,
} from '../services/internalApiService';


export const EditPlayer = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('')
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getPlayerById(id)
            .then((data) => {
                const { name, position } = data;
                setName(name);
                setPosition(position);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePositionChange = (e) => {
        setPosition(e.target.value)
    }

    const handleDeleteClick = () => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
            deletePlayerById(id)
                .then((deletedPlayer) => {
                    navigate('/players/list');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const handleEditPlayerSubmit = (e) => {
        e.preventDefault();
        const updatedPlayer = { name, position };
        updatePlayerById(id, updatedPlayer)
            .then((updatedPlayer) => {
                console.log('updatedPlayer:', updatedPlayer);
                navigate(`/players/${id}`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };


    return (
        <div className="contentContainer">
            <div className="subMenus">
                <Link to="/players/list"><h3>List</h3></Link>
                <h3>|</h3>
                <Link to="/players/addplayer"><h3>Add Player</h3></Link>
            </div>
            <form className="playerForm" onSubmit={handleEditPlayerSubmit}>
                <h4>Edit Player</h4>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <input className="form-control" type="text" value={name} onChange={handleNameChange} />
                    {
                        errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Position</label>
                    <input className="form-control" type="text" value={position} onChange={handlePositionChange} />
                    {
                        errors?.position && <span style={{ color: 'red' }}>{errors?.position?.message}</span>
                    }
                </div>

                <div className="form-group row">
                    <button className="btn btn-primary mb-3">
                        Edit
                    </button>
                </div>
            </form>
            <div className="form-group row">
                <button id="editPageBtn" onClick={(e) => {
                    handleDeleteClick();
                }} className="btn btn btn-danger mb-3">
                    Delete
                </button>
            </div>
            <div className="form-group row">
                <button id="editPageBtn" onClick={(e) => {
                    navigate(`/players/${id}`);
                }} className="btn btn-secondary mb-3">
                    Return
                </button>
            </div>
        </div>
    )
};

export default EditPlayer;