import config from '~/config';
import Home from '~/pages/Home';
import Popular from '../pages/Popular';
import New from '~/pages/New';
import Favourite from '~/pages/Favourite';
import NotFound from '~/pages/NotFound';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
