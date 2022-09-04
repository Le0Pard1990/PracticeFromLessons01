import { useState } from 'react';

import './search-panel.css';

const SearchPanel = (props) => {
 
    const [term, setTerm] = useState('')

    const onUpdateSearchPanel = (e) => {
        console.log('searchItem')
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <input type="text"
                value={term}
                onChange={onUpdateSearchPanel}
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;