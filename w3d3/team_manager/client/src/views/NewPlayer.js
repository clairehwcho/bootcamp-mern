import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../services/internalApiService';
import ManagePlayersMenu from '../components/ManagePlayersMenu';

export const NewPlayer = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('')

    const [errors, setErrors] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePositionChange = (e) => {
        setPosition(e.target.value)
    }

    const handleCreatePlayerSubmit = (e) => {
        e.preventDefault();
        const newPlayer = { name, position };
        createPlayer(newPlayer).then((data) => {

            console.log('new player data:', data);
            navigate('/players/list');
        })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div className="contentContainer">
            <ManagePlayersMenu />
            <form className="playerForm" onSubmit={handleCreatePlayerSubmit}>
                <h4>Add Player</h4>
                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <input className="form-control" type="text" onChange={handleNameChange} />
                    {
                        errors?.name && <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <label className="col-sm-2 col-form-label">Position</label>
                    <input className="form-control" type="text" onChange={handlePositionChange} />
                    {
                        errors?.position && <span style={{ color: 'red' }}>{errors?.position?.message}</span>
                    }
                </div>

                <div className="form-group mb-3 row">
                    <button className="btn btn-primary mb-3">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewPlayer;