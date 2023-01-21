import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Movie component는 dl properties를 다 부모 coponent로 부터 받아옴
function Movie({id, coverImg, title, summary, genres}){
    return <div>
    <img src={coverImg} alt="{title}"/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
        {genres.map(g => <li key="{g}">{g}</li>)}
    </ul>
  </div>;
}

Movie.prototype = {
  id: PropTypes.string.isRequired,
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;