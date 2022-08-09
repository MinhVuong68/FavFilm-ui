import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Search from '~/layouts/components/Search';
import Actions from '~/layouts/components/Actions';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('left')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src="" alt="logo" />
                    </Link>
                </div>
                <h4 className={cx('title')}>FavFilm</h4>
            </div>
            <div className={cx('center')}>
                <Search />
            </div>
            <div className={cx('right')}>
                <Actions />
            </div>
        </div>
    );
};

export default Header;
