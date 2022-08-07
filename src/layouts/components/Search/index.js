import { faMicrophone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { CloseIcon, SearchIcon } from '~/Icons';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
    const inputSearch = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [showResutSearch, setShowResultSearch] = useState(true);

    console.log(searchValue);

    const handleClose = () => {
        setSearchValue('');
        inputSearch.current.focus();
        setShowResultSearch(false);
    };
    const handleHideResultSearch = () => {
        setShowResultSearch(false);
    };
    return (
        <div className={cx('container')}>
            <div>
                <Tippy
                    visible={showResutSearch}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <div className={cx('search-header')}>
                                <div className={cx('icons')}>
                                    <div className={cx('icon-search')}>
                                        <SearchIcon width="1.6rem" height="1.6rem" />
                                    </div>
                                    <div className={cx('icon-loading')}>
                                        <FontAwesomeIcon icon={faSpinner} />
                                    </div>
                                </div>
                                <p>Kết quả tìm kiếm '{searchValue}'</p>
                            </div>
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
            <button className={cx('button-search')}>
                <SearchIcon />
            </button>
            <div className={cx('micro-icon')}>
                <FontAwesomeIcon icon={faMicrophone} />
            </div>
        </div>
    );
};

export default Search;
