import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ItemSidebar.module.scss';

const cx = classNames.bind(styles);
const ItemSidebar = ({ data }) => {
    return (
        <Link className={cx('item-sub')} to={data.path}>
            <data.icon className={cx('icon-sub-menu')} />
            <h5>{data.title}</h5>
        </Link>
    );
};

export default ItemSidebar;
