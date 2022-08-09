import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './FilmItemSearch.module.scss';
import { SearchIcon } from '~/Icons';

const cx = classNames.bind(styles);

const FilmItemSearch = ({ data }) => {
    return (
        <div className={cx('result')}>
            <Link to="/">
                <SearchIcon width="1.6rem" height="1.6rem" className={cx('spacer')} />
                {data.title.length > 40 ? <b>{data.title.slice(0, 40)}...</b> : <b>{data.title}</b>}
            </Link>
        </div>
    );
};

FilmItemSearch.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FilmItemSearch;
