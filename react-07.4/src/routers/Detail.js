import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>
          {loading? <h1>Loading...</h1> : 
        <div>
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {/* map을 쓸때마다 key(고유한값)를 element에 줘야함 */}
                  {movie.genres.map(g => <li key ={g}>{g}</li>)}
              </ul>
            </div>
          </div>
      }
    </div>
}
export default Detail;