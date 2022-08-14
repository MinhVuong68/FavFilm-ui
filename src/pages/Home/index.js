import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '~/api/apiConfig';
import favFilmApi from '~/api/favFilmApi';

import config from '~/config';
import styles from './Home.module.scss';
import ListCategory from './ListCategory/ListCategory';

const cx = classNames.bind(styles);

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getListMovieNowPlaying = async () => {
            try {
                const response = await favFilmApi.getListMovieNowPlaying();
                response['type'] = 'Now Playing';
                setData((prev) => [...prev, response]);
            } catch (error) {
                console.log('error');
            }
        };
        const getListMoviePopular = async () => {
            try {
                const response = await favFilmApi.getListMoviePopular();
                response['type'] = 'Popular';

                setData((prev) => [...prev, response]);
            } catch (error) {
                console.log('error');
            }
        };
        const getListMovieTopRated = async () => {
            try {
                const response = await favFilmApi.getListMovieTopRated();
                response['type'] = 'Top Rated';

                console.log(response);
                setData((prev) => [...prev, response]);
            } catch (error) {
                console.log('error');
            }
        };
        const getListMovieUpcoming = async () => {
            try {
                const response = await favFilmApi.getListMovieUpcoming();
                response['type'] = 'UpComing';
                setData((prev) => [...prev, response]);
            } catch (error) {
                console.log('error');
            }
        };

        getListMovieNowPlaying();
        getListMoviePopular();
        getListMovieTopRated();
        getListMovieUpcoming();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {console.log(data)}
            <ListCategory data={data} />
        </div>
    );
};

export default Home;
