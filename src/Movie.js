import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, summary, poster, year, rating, runtime}) {
    return <h4>{title}</h4>
}
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number,
    rating : PropTypes.number,
    runtime : PropTypes.number,

}
export default Movie;