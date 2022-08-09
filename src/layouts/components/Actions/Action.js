import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '~/components/Popper/Wrapper';

import { BellIcon } from '~/Icons';
import styles from './Action.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Action = () => {
    const [showNoti, setShowNoti] = useState(false);

    console.log(showNoti);
    const handleClickBellBtn = () => {
        setShowNoti(!showNoti);
    };
    return (
        <div className={cx('actions')}>
            <Tippy
                visible={showNoti}
                interactive={true}
                placement="left-start"
                render={(attrs) => (
                    <Wrapper>
                        <div className={cx('notify-box')} tabIndex="-1" {...attrs}>
                            <div className={cx('header')}>
                                <h2>Thông báo</h2>
                            </div>
                            <div className={cx('content')}>
                                <BellIcon width="12rem" height="12rem" className={cx('bell-box-noti')} />
                                <div className={cx('desc-noti')}>
                                    <div className={cx('desc-noti-1')}>Thông báo của bạn hiểm thị ở đây</div>
                                    <p>Đăng ký kênh yêu thích của bạn để nhận thông báo về các video mới nhất.</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                )}
            >
                <button className={cx('bell-btn')} onClick={handleClickBellBtn}>
                    <BellIcon />
                </button>
            </Tippy>

            <div className={cx('avatar')}>
                <img
                    src="https://yt3.ggpht.com/yti/AJo0G0npMfVrxua7sDyvGbsTcxbL4bAmAdENvBFzdg=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="avatar"
                />
            </div>
        </div>
    );
};

export default Action;
