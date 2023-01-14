import {useState, useEffect} from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async await
  const getMovies = async() => {
    const json = await (
      await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
      ).json();
    // const json = await Response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  // 내 conponent가 시작할때만 어떠한 코드를 한!번!만! 실행시키고 싶다!
  useEffect(() => {
    getMovies();
    // fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    // .then(response => response.json())
    // .then(json => 
    //   //로딩이 끝나서 setLoading을 false로 만들어줘야함
    //   {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   }
    //);
  },[])
  return (
    <div>
      {loading? <h1>Loading...</h1> : 
        <div>{movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image}/>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {/* map을 쓸때마다 key(고유한값)를 element에 줘야함 */}
                {movie.genres.map(g => <li key ={g}>{g}</li>)}
            </ul>
          </div>
        ))}
        </div>
      
      }

    </div>
  );
}

export default App;
