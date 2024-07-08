import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchResults from "./SearchResults";
import Pagination from "@mui/material/Pagination";
import { useState, useRef, useCallback } from "react";
import { CONSTANTS } from "../../utils/constants";
import { debounce } from "../../utils/debounce";
import { headers } from "../../utils/headers";

export default function MuiSearch() {
    const [movies, setMovies] = useState([]);
    const [currSearchValue, setCurrSearchValue] = useState(null);
    const [paginationData, setPaginationData] = useState({ page: null, total_pages: null, total_results: null });
    const paginationRef = useRef(null);
    const currentPage = useRef(1);

    // console.log(movies);
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
            <SearchResults list={movies} />
            <Pagination
                page={currentPage.current}
            />
        </Stack>
    );

    function handleChange(ev) {
        debounceFetchMovies(ev.target.value);
    }

    function fetchMovies(value) {
        if (value.length <= 2) {
            setMovies([]);
            setPaginationData(null);
            return;
        }

        if (value.length > 2) {
            const getData = async () => {
                await fetch(`${CONSTANTS.TMDB_API_BASE_PATH}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${value}&page=1`)
                    .then(response => response.json())
                    .then(response => {
                        if (response.results.length > 0) {
                            const cleanList = groomResults([...response.results]);
                            setMovies(response.results)
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
        return movies.filter((item, i) => {
            if (item.original_title &&
                item.poster_path &&
                item.release_date &&
                item.overview &&
                item.original_language === 'en') {
                return item;
            }
        });
    }
}
