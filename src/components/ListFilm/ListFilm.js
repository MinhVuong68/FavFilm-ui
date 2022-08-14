import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apiConfig from '~/api/apiConfig';

import styles from './ListFilm.module.scss';

const cx = classNames.bind(styles);

const ListFilm = ({ data }) => {
    return (
        <div className={cx('list-film')}>
            {data.map((film) => {
                return (
                    <Link
                        className={cx('item-film')}
                        key={film.id}
                        to={`/movie/${film.id}-${film.title.replace(/\s/g, '-').toLowerCase()}`}
                    >
                        <img src={apiConfig.url_image + `${film.poster_path}`} alt="img" />
                        <h4>{film.title}</h4>
                    </Link>
                );
            })}
        </div>
    );
};

ListFilm.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ListFilm;
