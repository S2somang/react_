useEffect(() => {
    getMovies();
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
     .then(response => response.json())
     .then(json => 
       {
         setMovies(json.data.movies);
         setLoading(false);
       }
    );
  },[])

  위처럼 then을 사용하는 방법과 async await을 사용하는 방법이 있음 

  그럼 이렇게 위에 async함수를 만들어줘야함
  const getMovies = async() => {
    const json = await ( // 여기는 심지어
      await fetch( // await한번 더써줌
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
      ).json(); 
    //안에 await를 두번써서 아래 한줄을 같이 쓰게된것 우왕
    // const json = await Response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }



map을 쓸때 꼭!!!!!!
key를 element에 줘야함!!!!꼮!!!