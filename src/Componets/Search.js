import React from "react";
import { useState } from "react";
import {FaSearch} from "react-icons/fa";

function Search() {
    const [search, setSearch] = useState("");
        function handleChange (event) {
            setSearch(event.targe.value);
        }
        function handleSubmit (event) {
            event.preventDefault();
        }
    
    return(
        <div>
            <form  onSubmit = {handleSubmit}>
                <input type="text" placeholder="search dashboard" onChange={handleChange} value = {search}/>
            </form>
           <FaSearch/>
        </div>
    )
}

export default Search;