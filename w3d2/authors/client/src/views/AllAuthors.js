import { useState, useEffect } from "react";
import { deleteAuthorById, getAllAuthors } from "../services/internalApiService";
import { useNavigate, useParams } from "react-router-dom";

export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAllAuthors()
            .then((data) => {
                console.log(data);
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = (idToDelete) => {
        deleteAuthorById(idToDelete)
            .then((deletedAuthor) => {
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDelete;
                });
                console.log('deletedAuthor:', deletedAuthor);
                setAuthors(filteredAuthors);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h4>We have quotes by:</h4>
            <table className="table table-striped" id="allAuthorsTable">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((author) => {
                        const { _id, name } = author;
                        return (
                            <tr>
                                <td>
                                    <div key={_id}>
                                        <span>{name}</span>
                                    </div>
                                </td>

                                <td>
                                    <button onClick={(e) => {
                                        navigate(`/edit/${_id}`);
                                    }} className="btn btn-sm btn-warning mx-1">
                                        Edit
                                    </button>

                                    <button onClick={(e) => {
                                        handleDeleteClick(_id);
                                    }} className="btn btn-sm btn-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;