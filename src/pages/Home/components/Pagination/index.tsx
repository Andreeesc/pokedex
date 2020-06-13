import React, {useState} from 'react';
import './index.css';

const Pagination = ({page}: {page:number}) => {
    const componentClassName = "c-pagination";
    const [getPage, setPage] = useState(0);

    function next() {
        setPage(getPage + 1);
    }
    function previous() {
        if(getPage !== 0){
            setPage(getPage - 1);
        }
    }

    return(
        <div className={componentClassName}>
            <button onClick={previous}>Anterior</button>
            <button onClick={next}>Próximo</button>
        </div>
    )
}

export default Pagination;