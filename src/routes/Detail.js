import React from 'react';
import './css/Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movies-detail">
                    <img className="movies-detail__poster" src={location.state.poster} alt={location.state.title} />
                    <div className="movie-detail__data">
                        <h4 className="movie-detail__data__title">{location.state.title}</h4>
                        <hr className="line__detail"/>
                        <h4 className="movie-detail__data__year">released : {location.state.year}</h4>
                        <h4 className="movie-detail__data__rating">rating : {location.state.rating} / 5.0</h4>
                        <h4 className="movie-detail__data__runtime">running time : {location.state.runtime ? `${location.state.runtime}` : `NON`}</h4>
                        <ul className="movie-detail__data__genres">
                            <h4 className="movie-detail__data__genres__text">Genre : </h4>
                            {location.state.genres.map((item, index) => (
                                <li className="movie-detail__data__genres__genre" key={index}>{item} </li>
                            ))}
                        </ul>
                        <hr className="line__detail"/>
                        <h4 className="movie-detail__data__summary">{location.state.summary}</h4>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;