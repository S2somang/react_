import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import styles from'./Home.module.css';

const Home = () => {
    //App에 있던얘를 여기로 불러냄
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // async await
  const getMovies = async() => {
    const json = await (
      await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
      ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  },[])
  return (
    <div className={styles.container}>
      {loading? <h1 className={styles.loader}>Loading...</h1> : 
        <div className={styles.movies}>{movies.map(movie => (
          <Movie 
          // key는 React.js에서만, map안에서 component들을 render할때 사용하는 것임!!
            key = {movie.id} 
            id={movie.id} 
            coverImg = {movie.medium_cover_image}
            title = {movie.title}
            year = {movie.year}
            summary = {movie.summary}
            genres = {movie.genres}
          />
        ))}
        </div>
      }
    </div>
  );
}

export default Home;