import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../redux/actions/films';
import CardComponent from './CardComponent';
import Pagination from './Pagination'

const FilmsComponent = () => {
    const dispatch = useDispatch();
    const films = useSelector(state=>state.films.films);
    const loading = useSelector(state=>state.films.loading);
    const error = useSelector(state=>state.films.error);
    
    const [filmsList, setFilmslist] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(5);

    useEffect(()=>{ 
        dispatch(getFilms())
        setFilmslist(films)
    },[])

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

    return (
        <>
            <h1>List of Films</h1>
            { console.log("use effect from compo current",currentFilms) }        
            <CardComponent films={currentFilms} loading={loading} />
            <Pagination
                filmsPerPage={filmsPerPage}
                totalFilms={films.length}
                paginate={paginate}
            />
            {films.length===0 && !loading && <p>No Films available</p>}
        </>
    )
}

export default FilmsComponent