import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './ResultsSearch.module.scss';
import favFilmApi from '~/api/favFilmApi';
import ListFilm from '~/components/ListFilm';

const cx = classNames.bind(styles);

const ResultsSearch = () => {
    const [resultsSearchs, setResultsSearch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { nameSearch } = useParams();
    console.log(currentPage);

    useEffect(() => {
        setResultsSearch([]);
    }, [nameSearch]);
    useEffect(() => {
        window.onscroll = function (ev) {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                setCurrentPage((prev) => prev + 1);
            }
        };
        const getMoviesListByName = async () => {
            const params = { query: nameSearch, page: currentPage };
            try {
                const response = await favFilmApi.getMoviesListByName({ params });
                setResultsSearch((prev) => [...prev, ...response.results]);
            } catch (error) {
                console.log('error');
            }
        };
        getMoviesListByName();
    }, [currentPage, nameSearch]);

    return (
        <div className={cx('wrapper')}>
            <ListFilm key="123" data={resultsSearchs} />
        </div>
    );
};

export default ResultsSearch;
