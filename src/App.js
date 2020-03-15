import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './css/App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year");
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        )
          : (
            <div className="movies">
              {movies.map(item => (
                <Movie
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  summary={item.summary}
                  year={item.year}
                  poster={item.medium_cover_image}
                  rating={item.rating}
                  runtime={item.runtime}
                  genres={item.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;