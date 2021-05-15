import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import * as searchstyle from './search.module.css';


export default function Search(){

    const history = useHistory();
    const [searchvalue, setSearchValue] = useState(''); 

    const handlesearch = (e) => {
        e.preventDefault();

        // api call
        fetch(`https://imdb-api.com/API/Search/${process.env.REACT_APP_API_KEY}/${searchvalue}`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          const firstresult = result.results[0];
          console.log(firstresult);
          history.push(`/details/${firstresult.id}`);
        })
        .catch((err) => {
          console.log(err);
        });

    } 



    return(
        // onSumbit hier
        <form onSubmit = {(e) => {handlesearch(e)} } className = {searchstyle.search_form}>
            <input type = 'text' className = {searchstyle.search_input} onChange = {(e) => {setSearchValue(e.target.value)}}/>
            <input type = 'submit' className = {searchstyle.search_submit} value ='Search'/>
        </form>
    );
}