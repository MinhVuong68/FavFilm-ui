import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { SearchIcon } from '~/Icons';
import styles from './FilmItemSearch.module.scss';

const cx = classNames.bind(styles);

const FilmItemSearch = ({ data }) => {
    return (
        <div className={cx('result')}>
            <Link to={`/movie/${data.id}-${data.title.replace(/\s/g, '-')}`}>
                <SearchIcon width="1.6rem" height="1.6rem" className={cx('spacer')} />
                {data.title.length > 40 ? <b>{data.title.slice(0, 40)}...</b> : <b>{data.title}</b>}
            </Link>
        </div>
    );
};

export default FilmItemSearch;
