import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './Category.module.scss';
import favFilmApi from '~/api/favFilmApi';
import apiConfig from '~/api/apiConfig';
import { LeftIcon, RightIcon } from '~/Icons';

const cx = classNames.bind(styles);

const Category = () => {
    const param = useParams();
    const numpage = useRef();
    console.log(numpage.current);
    const [data, setData] = useState([]);
    const [curentPage, setCurrentPage] = useState(1);
    const convertParam = param.typeCategory.replace('-', '_');

    // const handleClick = () => {
    //     setCurrentPage((prev) => prev + 1);
    // };
    useEffect(() => {
        window.onscroll = function (ev) {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                setCurrentPage((prev) => prev + 1);
            }
        };
        const getMovieCategory = async () => {
            const params = { page: curentPage };
            try {
                const response = await favFilmApi.getMovieCategory(convertParam, { params });
                setData((prev) => [...prev, ...response.results]);
                console.log(data);
            } catch (error) {
                console.log('error');
            }
        };
        //window.addEventListener('scroll', handleScroll);
        getMovieCategory();
    }, [curentPage]);

    return (
        <div className={cx('wrapper')}>
            {data.map((item) => {
                return (
                    <Link
                        className={cx('item-film')}
                        to={`/movie/${item.id}-${item.title.replace(/\s/g, '-').toLowerCase()}`}
                    >
                        <img src={`${apiConfig.url_image}${item.poster_path}`} alt="img" />
                        <h4>{item.title}</h4>
                    </Link>
                );
            })}
            {/* <ul className={cx('paging-box')}>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <LeftIcon />
                        <span className={cx('ml-12')}>Trước</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span ref={numpage}>1</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span ref={numpage} onClick={(e) => console.log(e.target.value)}>
                            2
                        </span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span ref={numpage}>3</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span>...</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span ref={numpage}>4</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span ref={numpage}>5</span>
                    </div>
                </li>
                <li className={cx('paging-item')} on>
                    <div className={cx('directional')}>
                        <span ref={numpage}>6</span>
                    </div>
                </li>
                <li className={cx('paging-item')}>
                    <div className={cx('directional')}>
                        <span className={cx('mr-12')}>Sau</span>
                        <RightIcon />
                    </div>
                </li>
            </ul> */}
        </div>
    );
};

export default Category;
