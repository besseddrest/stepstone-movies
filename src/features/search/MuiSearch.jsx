import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchResults from "./SearchResults";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect, useRef, useCallback } from "react";
import { headers } from "/src/utils/headers";
import { TMDB_BASE_PATH } from "../../utils/constants";
import { debounce } from "../../utils/debounce";

export default function MuiSearch() {
    const [movies, setMovies] = useState([]);
    const currentPage = useRef(1);

    console.log(movies);
    const debounceFetchMovies = useCallback(
        debounce(val => fetchMovies(val), 500), []
    )

    useEffect(() => {
        // TODO: load popular movies to autocomplete on initial mount
        // console.log(JSON.stringify(movies, undefined, 4));
    }, [])

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
        // console.log("VAL: ", value);
        // TODO: if (!value) then clear the results...?
        if (value.length > 2) {
            const getData = async () => {
                await fetch(`${TMDB_BASE_PATH}/search/movie?query=${value}&page=1`, headers)
                    .then(response => response.json())
                    .then(response => {
                        if (response.results.length > 0) {
                            setMovies(response.results)
                        }
                    })
                    .catch(err => console.error("Failed to fetch movies: ", err));
            }
            getData();
        }
    }
}
