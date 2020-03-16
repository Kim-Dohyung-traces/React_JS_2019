import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Movie.css';

function Movie({ id, title, summary, poster, year, rating, runtime, genres }) {
    return (
        <Link className="detail-link" to={{
            pathname:`/detail/${id}`,
            state:{
                id,
                title,
                summary,
                poster,
                year,
                rating,
                runtime,
                genres
            }
        }}>
            <div className="movie">
                <img className="movie__poster" src={poster} alt={title} />
                <div className="movie__data">
                    <h2 className="movie__data__title">{title}</h2>
                    <h4 className="movie__data__year">{year}</h4>
                    <h4 className="movie__data__rating">{rating} / 5.0</h4>
                    <h4 className="movie__data__runtime">{runtime ? `${runtime}m` : `NON`}</h4>
                    <ul className="movie__data__genres">
                        {genres.map((item, index) => (
                            <li className="movie__data__genres__genre" key={index}>{item}</li>
                        ))}
                    </ul>
                    <h4 className="movie__data__summary">{summary.length > 140 ? `${summary.slice(0, 140)}...` : `${summary}`}</h4>
                </div>
            </div>
        </Link>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;