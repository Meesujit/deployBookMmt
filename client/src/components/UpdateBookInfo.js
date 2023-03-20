import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function UpdateBookInfo(props) {

    const [book, setBook] = useState({

        title:'',
        isbn: '',
        author: '',
        desciption: '',
        published_date: '',
        publisher: '',

    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`https://3000-grandmaster-empmgmtsuji-evw17paf44h.ws-us90.gitpod.io/api/books/${id}`)
        .then((res) => {
            setBook({
                title: res.data.title,
                isbn: res.data.isbn,
                author: res.data.author,
                desciption: res.data.desciption,
                published_date: res.data.published_date,
                publisher: res.data.publisher,
            })
        })
        .catch((err) => {
            console.log('Couldnot fetch the book')
            console.log(err)
        })
    },[id]);

    const onChange = (e) => {
        setBook({
            ...book, [e.target.name]: [e.target.value]
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: book.title,
            isbn: book.isbn,
            author: book.author,
            desciption: book.desciption,
            published_date: book.published_date,
            publisher: book.publisher,

        };

        axios 
        .put(`https://3000-grandmaster-empmgmtsuji-evw17paf44h.ws-us90.gitpod.io/api/books/${id}`,data)
        .then ((res) => {
            navigate(`/show-book/${id}`)
        })
        .catch((err) => {
            console.log("couldn't Update the book")
        })
    }





    return(
        <div className='UpdateBookInfo'>
            <div className='container' >
                <div className='row' >
                    <div className='col-md-8 m-auto'>
                        <br/>
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Book List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Edit Book</h1>
                        <p className='lead text-center'>Update Book </p>
                    </div>
                </div>

                <div className=''></div>
            </div>
        </div>
        
    )
  } 
  export default UpdateBookInfo