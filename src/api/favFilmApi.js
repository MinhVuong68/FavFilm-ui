import axiosClient from './axiosClient';

const favFilmApi = {
    getMoviesListByName: (params) => {
        const url = 'search/movie';
        return axiosClient.get(url, params);
    },
    getListMovieNowPlaying: (params) => {
        const url = 'movie/now_playing';
        return axiosClient.get(url, { params: {} });
    },
    getListMoviePopular: (params) => {
        const url = 'movie/popular';
        return axiosClient.get(url, { params: {} });
    },
    getListMovieTopRated: (params) => {
        const url = 'movie/top_rated';
        return axiosClient.get(url, { params: {} });
    },
    getListMovieUpcoming: (params) => {
        const url = 'movie/upcoming';
        return axiosClient.get(url, { params: {} });
    },
    getMovieCategory: (jjj, params) => {
        const url = `movie/${jjj}`;
        return axiosClient.get(url, params);
    },
};

export default favFilmApi;
