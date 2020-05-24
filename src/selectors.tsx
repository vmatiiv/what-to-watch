export const getFilters = (store:any) => store.filters 
export const getGenres = (store:any) => store.filters.genres
export const getWatchLaterMovies = (store:any) => store.watchLater
export const getFirstMovie = (store:any) => store.movies.movies[0]
export const getLength = (store:any) => store.movies.movies.length
export const getMovies = (store:any) => store.movies.movies.slice(0,2).reverse()
export const getPage = (store:any) => store.movies.page
export const getBlockList = (store:any) => store.movies.blocklist
export const isLoading = (store:any) => store.movies.isLoading
export const notFound = (store:any) => store.movies.notFound
export const getActors = (store:any) => store.movies.actors
export const getDirectors = (store:any) => store.movies.directors
export const getVideo = (store:any) => store.movies.video
