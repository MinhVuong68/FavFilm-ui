import classNames from 'classnames/bind';
import styles from './ListFilm.module.scss';
import { Link } from 'react-router-dom';
import apiConfig from '~/api/apiConfig';

const cx = classNames.bind(styles);

const ListFilm = ({ film, type }) => {
    return (
        <div className={cx('category')}>
            <div className={cx('title')}>
                <h3>{type}</h3>
                <Link to={`/movie/category/${type.replace(/\s/g, '-').toLowerCase()}`}>Xem tất cả</Link>
            </div>
            <div className={cx('list-film')}>
                {film.results.slice(0, 8).map((item) => {
                    return (
                        <Link
                            className={cx('item-film')}
                            key={film.id}
                            to={`/movie/${item.id}-${item.title.replace(/\s/g, '-').toLowerCase()}`}
                        >
                            <img src={apiConfig.url_image + `${item.poster_path}`} alt="img" />
                            <h4>{item.title}</h4>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

//console.log(...Object.keys(film));
export default ListFilm;
