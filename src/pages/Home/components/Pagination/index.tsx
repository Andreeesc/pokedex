import React, {useState} from 'react';

const Pagination = () => {

    const [page, setPage] = useState(0);

    function next() {
        setPage(page + 1);
    }
    function previous() {
        setPage(page - 1);
    }

    return(
        <div>
            <button onClick={previous}>Anterior</button>
            <button onClick={next}>Próximo</button>
        </div>
    )
}

export default Pagination;