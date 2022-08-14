import ListFilm from './ListFilm';

const ListCategory = ({ data }) => {
    return data.map((film) => {
        return <ListFilm film={film} type={film.type} />;
    });
};

export default ListCategory;
