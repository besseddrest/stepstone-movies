import { useState, useRef, useCallback } from "react";
import { Stack, TextField, Pagination } from "@mui/material";
import MyMovies from "./MyMovies";
import SearchResults from "./SearchResults";
import SearchStats from "./SearchStats";
import { CONSTANTS } from "../../utils/constants";
import { debounce } from "../../utils/debounce";

export default function MuiSearch() {
    const [movies, setMovies] = useState([]);
    const [myMovieList, setMyMovieList] = useState([]);
    const [searchStats, setSearchStats] = useState({ currentPage: 1, totalResults: 0, totalPages: 0 });
    const currentPage = useRef(1);

    const debounceFetchMovies = useCallback(
        debounce(val => fetchMovies(val), 500), []
    )

    return (
        <Stack spacing={2}>
            <TextField
                id="movie-search"
                type="search"
                label="Search The Movie DB!"
                onChange={handleChange}
            />
            <MyMovies list={myMovieList} />
            <SearchResults list={movies} cb={updateMyMovies} />
            <Pagination
                page={currentPage.current}
            />
            <SearchStats stats={searchStats} />
        </Stack>
    );

    function handleChange(ev) {
        debounceFetchMovies(ev.target.value);
    }

    function fetchMovies(value) {
        if (value.length <= 2) {
            setMovies([]);
            return;
        }

        if (value.length > 2) {
            const getData = async () => {
                await fetch(`${CONSTANTS.TMDB_API_BASE_PATH}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${value}&page=1`)
                    .then(response => response.json())
                    .then(response => {
                        if (response.results.length > 0) {
                            const cleanList = groomResults([...response.results]);
                            setSearchStats({
                                currentPage: response.page,
                                totalPages: response.total_pages,
                                totalResults: cleanList.length
                            });
                            setMovies(cleanList)
                        }
                    })
                    .catch(err => console.error("Failed to fetch movies: ", err));
            }
            getData();
        }
    }

    /**
     * Returns a list of movies that have values for the fields we want to display
     */
    function groomResults(movies) {
        return movies.filter((item) => {
            if (item.original_title &&
                item.poster_path &&
                item.release_date &&
                item.overview &&
                item.original_language === 'en') {
                return item;
            }
        });
    }

    /**
     * Callback for managing list of movies owned
     */
    function updateMyMovies(item) {
        console.log(MyMovies)
        setMyMovieList([...myMovieList, item]);
    }
}
