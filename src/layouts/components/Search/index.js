import { faMicrophone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { CloseIcon, SearchIcon } from '~/Icons';
import Wrapper from '~/components/Popper';
import FilmItemSearch from '~/layouts/components/FilmItemSearch';

import styles from './Search.module.scss';
import favFilmApi from '~/api/favFilmApi';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Search = () => {
    const inputSearch = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [showResutSearch, setShowResultSearch] = useState(true);
    const [listSearch, setListSearch] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(searchValue);
    useEffect(() => {
        setLoading(true);
        if (searchValue.trim().length === 0) {
            setListSearch([]);
            setShowResultSearch(false);
            return;
        }

        const getMoviesListByName = async () => {
            const params = { query: searchValue };
            try {
                const response = await favFilmApi.getMoviesListByName({ params });
                setListSearch(response.results);
                console.log(response.results);
                setShowResultSearch(true);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('error');
            }
        };
        getMoviesListByName();

        // fetch(
        //     `https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${encodeURIComponent(
        //         searchValue,
        //     )}`,
        // )
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setListSearch(res.results);
        //         setShowResultSearch(true);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));
        // console.log(listSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const handleClose = () => {
        setSearchValue('');
        inputSearch.current.focus();
        setShowResultSearch(false);
    };
    const handleHideResultSearch = () => {
        setShowResultSearch(false);
    };
    //console.log(showResutSearch, searchValue.length);
    return (
        <div className={cx('container')}>
            <div>
                {console.log(searchValue.length > 0)}
                <Tippy
                    visible={showResutSearch && searchValue.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <div className={cx('box')}>
                                    {!!searchValue && (
                                        <div className={cx('search-header')}>
                                            <div className={cx('icons')}>
                                                {!loading ? (
                                                    <div className={cx('icon-search')}>
                                                        <SearchIcon width="1.6rem" height="1.6rem" />
                                                    </div>
                                                ) : (
                                                    <div className={cx('icon-loading')}>
                                                        <FontAwesomeIcon icon={faSpinner} />
                                                    </div>
                                                )}
                                            </div>
                                            <p>Kết quả tìm kiếm '{searchValue}'</p>
                                        </div>
                                    )}
                                    {listSearch.length > 0 &&
                                        listSearch.slice(0, 7).map((item) => {
                                            return <FilmItemSearch data={item} key={item.id} />;
                                        })}
                                    {!!searchValue && listSearch.length === 0 && (
                                        <p className={cx('no-result')}>Không tìm thấy!</p>
                                    )}
                                </div>
                            </Wrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResultSearch}
                >
                    <div className={cx('wrapper')}>
                        <input
                            ref={inputSearch}
                            className={cx('input-search')}
                            value={searchValue}
                            type="text"
                            placeholder="Tìm kiếm phim tại đây"
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResultSearch(true)}
                            spellCheck={false}
                        />
                        {!!searchValue && (
                            <div className={cx('icon-close')} onClick={handleClose}>
                                <CloseIcon />
                            </div>
                        )}
                    </div>
                </Tippy>
            </div>
            <Link className={cx('button-search')} to={`/movie/results/${searchValue}`}>
                <SearchIcon />
            </Link>
            <div className={cx('micro-icon')}>
                <FontAwesomeIcon icon={faMicrophone} />
            </div>
        </div>
    );
};

export default Search;
