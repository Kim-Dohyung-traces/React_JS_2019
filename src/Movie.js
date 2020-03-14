import React from 'react';
import PropTypes from 'prop-types';
import './css/Movie.css';

function Movie({ id, title, summary, poster, year, rating, runtime }) {
    return (
        <div className="movie">
            <h2 className="movie__title">{title}</h2>
            <div className="movie__data">
                <h4 className="movie__data__year">{year}</h4>
                <h4 className="movie__data__rating">{rating}</h4>
                <h4 className="movie__data__runtime">{runtime}</h4>
                <h4 className="movie__data__summary">{summary}</h4>
            </div>
            <img src={poster} alt={title}/>
        </div>
    )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number,
    rating: PropTypes.number,
    runtime: PropTypes.number,

}
export default Movie;