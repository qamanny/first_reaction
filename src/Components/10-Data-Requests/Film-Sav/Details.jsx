'use Strict';

import axios from "axios";

import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_URL} from './CONSTS.json';

const Details = () => {
    const {id} = useParams();
    const history = useHistory();
    const [details, setDetails] = useState([]);
}

    useEffect( () => {
        axios.get(`${API_URL}&i=${id}`)
        .then(response => setDetails(response.data))
        .catch(err => console.error(err))
    })

    return(
        <div className="container">
            <br/>
        </div>
    )