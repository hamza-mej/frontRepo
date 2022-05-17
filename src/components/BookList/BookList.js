import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function BookList() {

    const { REACT_APP_MY_API_KEY } = process.env;

    const [Book, setBook] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(`${REACT_APP_MY_API_KEY}books?page=1&title=${search}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }).then(res => {
            setBook(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [search])

    if(!Book){
        return null;
    }

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        setSearch("")
    };

    let allBooks = Book.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author.id}</td>
                <td>{book.genre}</td>
                <td>
                    <Link to={`/BookDetail/${book.id}`} className="btn btn-secondary" state={{ Book }}>View</Link>
                </td>
            </tr>
        )
    });

    return (
        <div className="App container ">

            <h1 className='mb-4 mt-4'>Book List</h1>

            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Type to search...'
                    name='text'
                    value={search}
                    className='search-input rounded border-0 p-2'
                    onChange={handleChange}
                />
            </form>

            <Table striped hover className="table shadow rounded bg-white mt-4">
                <thead className="thead-dark ">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>genre</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {allBooks}
                </tbody>
            </Table>
        </div>
    )
}
export default BookList