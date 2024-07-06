import { Autocomplete, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";
import { headers } from "/src/utils/headers";

export default function MuiSearch() {
    //   const [topMovies, setTopMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const options = [
        { title: 'Movie Title 1', year: 2009 },
        { title: 'Movie Title 2', year: 2000 },
        { title: 'Movie Title 3', year: 2009 },
        { title: 'Movie Title 4', year: 1975 },
    ]

    useEffect(() => {
        console.log("MOVIES");
        console.log(movies);
    }, [])

    return (
        <Stack spacing={2}>
            <Autocomplete
                id="movie-search"
                freeSolo
                options={options.map(item => item.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search'
                        }}
                    />
                )}
                onChange={fetchMovies}
            />
            <SearchResults />
        </Stack>
    );

    function fetchMovies() {
        const getData = async () => {
            await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', headers)
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
