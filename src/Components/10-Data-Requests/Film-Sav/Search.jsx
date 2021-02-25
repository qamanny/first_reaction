'use Strict'

import axios from "axios";
import { useState, useHistory } from "react";

const Search = () => {
    const History = useHistory()

    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [err, setErr] = useState(null);

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}&s=${query}`)
        .then(res => {
            console.log(res.data.Search);
            setFilms(res.data.Search);
        }).catch(err => {
            console.error(err);
            setErr(err);
        })
    }

const getDetails = (id) => {
    console.log(id);
    history.push(`/OMDB/details/${id}`);
}

return (
    <>
        <SearchBar query={query} handleChange={handleChange} search={handleSearch} />
        {err ? <div className="alert alert-danger">{err}</div>
            :
        <SearchResults films={films} getDetails={getDetails} />
        }
    </>
)

}

export default Search;