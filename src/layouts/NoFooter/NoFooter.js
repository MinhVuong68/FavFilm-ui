import classNames from 'classnames/bind';
import styles from './NoFooter.module.scss';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
const cx = classNames.bind(styles);

const NoFooter = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

NoFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NoFooter;
