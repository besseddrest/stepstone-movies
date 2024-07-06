- https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGI5Y2RmNWQ3ZTVlODMzYzFhY2UzNTRlZTRiYWE0OSIsIm5iZiI6MTcyMDMwMzc2Ni42NDY3NzksInN1YiI6IjYzYjUyN2QyOTcxNWFlMDA5MTNjZjA0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjngPUAUyaisQ-q3IszjwtiPZ-WYhFt4MTZPwfuQLoM'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
