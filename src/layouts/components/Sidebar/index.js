import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { HomeIcon, LikeIcon, SubMenuIcon, TrendIcon, WatchAfterIcon } from '~/Icons';
import { useState } from 'react';
import config from '~/config';
import ItemSidebar from './ItemSidebar';

const cx = classNames.bind(styles);

const itemsSidebar = [
    {
        path: config.routes.home,
        title: 'Trang chủ',
        icon: HomeIcon,
    },
    {
        path: config.routes.home,
        title: 'Thịnh hành',
        icon: TrendIcon,
    },
    {
        path: config.routes.home,
        title: 'Xem sau',
        icon: WatchAfterIcon,
    },
    {
        path: config.routes.home,
        title: 'Phim đã thich',
        icon: LikeIcon,
    },
];

const Sidebar = () => {
    const [subMenu, setSubMenu] = useState(false);
    const handleHideSubMenu = () => {
        setSubMenu(!subMenu);
    };
    console.log(subMenu);

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('icon-sub')} onClick={handleHideSubMenu}>
                    <SubMenuIcon />
                </div>
                <div className={cx('content')}>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Hoạt hình</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Thiếu nhi</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Ngôn tình</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Thể thao</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Khoa học</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Hành động</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Gia đình</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Giáo dục</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Trinh thám</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Kinh dị</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Tâm lí</h4>
                    </Link>
                    <Link className={cx('item-cate')} to="/">
                        <h4>Thần thoại</h4>
                    </Link>
                </div>
            </div>
            {subMenu && (
                <div className={cx('sub-menu')}>
                    {itemsSidebar.map((item, index) => {
                        return <ItemSidebar key={index} data={item} />;
                    })}

                    {/* <div className={cx('item-sub')}>
                        <HomeIcon className={cx('icon-sub-menu')} />
                        <h5>Trang chủ</h5>
                    </div>
                    <div className={cx('item-sub')}>
                        <TrendIcon className={cx('icon-sub-menu')} />
                        <h5>Thịnh hành</h5>
                    </div>
                    <div className={cx('item-sub')}>
                        <WatchAfterIcon className={cx('icon-sub-menu')} />
                        <h5>Xem sau</h5>
                    </div>
                    <div className={cx('item-sub')}>
                        <LikeIcon className={cx('icon-sub-menu')} />
                        <h5>Phim đã thích</h5>
                    </div> */}
                </div>
            )}
        </>
    );
};

export default Sidebar;
