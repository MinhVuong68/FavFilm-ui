import config from '~/config';
import Home from '~/pages/Home';
import Popular from '../pages/Popular';
import New from '~/pages/New';
import Favourite from '~/pages/Favourite';
import DetailFilm from '~/pages/DetailFilm';
import NotFound from '~/pages/NotFound';
import Category from '~/pages/Category';
import NoFooter from '~/layouts/NoFooter';
import ResultsSearch from '~/pages/ResultsSearch';

const publicRoutes = [
    {
        path: config.routes.home,
        element: Home,
    },
    {
        path: config.routes.popular,
        element: Popular,
    },
    {
        path: config.routes.new,
        element: New,
    },
    {
        path: config.routes.favourite,
        element: Favourite,
    },
    {
        path: config.routes.notfound,
        element: NotFound,
        layout: null,
    },

    {
        path: config.routes.detailFilm,
        element: DetailFilm,
    },
    {
        path: config.routes.category,
        element: Category,
    },
    {
        path: config.routes.resultsSearch,
        element: ResultsSearch,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
