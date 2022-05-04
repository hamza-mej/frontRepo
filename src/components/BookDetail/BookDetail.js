import React, { useState , useEffect  } from 'react'
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';

function BookDetail() {

    const { id } = useParams();
    const [user, setUser] = useState({
        title: "",
        author: "",
        genre: "",
        description: "",
    })

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/api/books/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }).then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])


    return (
        <div className="App container  ">

            <h1 className='mb-4 mt-4'>Book Detail</h1>

            <div className="wrap-container bg-white rounded">

                <h3 className="text-secondary">User Id: {id}</h3>

                <hr/>
                <div className="d-flex justify-content-center mb-4">
                    <ul className="list-group w-50 border border-3">
                        <li className="list-group-item"><span>Title: </span>{user.title}</li>
                        <li className="list-group-item"><span>Author Name: </span>{user.author.firstName} {user.author.lastName}</li>
                        <li className="list-group-item"><span>Genre: </span>{user.genre}</li>
                        <li className="list-group-item"><span>Description: </span>{user.description}</li>
                    </ul>
                </div>


                <Link className="btn btn-secondary mb-4" to="/">
                    Back to BookList
                </Link>
            </div>


        </div>
    )
}
export default BookDetail