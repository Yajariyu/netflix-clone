const APIKEY = '59f6e45f178fc591bdd29e34aa555d0d';



export default {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US&`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchAdventureMovies:`/discover/movie?api_key=${APIKEY}&with_genres=12`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fecthHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fecthRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fecthDocumentariesMovies:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
}




