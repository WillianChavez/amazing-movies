import styled from 'styled-components'
import Movie from '../../components/Movie'
import Spiner from '../../components/Spiner'
const List = styled.ul`
    & {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 1em;
        margin: 0;
        gap: 1em;
    }
`

export default function ListOfMovies({ movies = [], loading }) {
    if (loading) return <Spiner />
    return (
        <List>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} posterPath={movie.poster_path} voteAverage={movie.vote_average} title={movie.title} />
            ))}
        </List>
    )
}
