import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        onSearch(query);
    }

    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Search for tracks"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;