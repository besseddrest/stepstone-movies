import { Button, CardContent, CardMedia, Typography, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import { CONSTANTS } from "../../utils/constants"

export default function SearchResults({ list = [] }) {
    return (
        <section>
            <div className="search-result__container">
                <Grid container spacing={2} className="search-result__item">
                    {list.length > 0 && list.map(item =>
                        <SearchResultItem key={`item-${item.id}`} item={item} />
                    )}
                </Grid>
            </div>
        </section>
    )
}

function SearchResultItem({ item }) {
    const trimmed = item.overview.length > 80
        ? item.overview.substring(0, 80) + '...'
        : item.overview;

    return (
        <Grid item xs={3} >
            <Card>
                <CardMedia
                    sx={{ height: 150 }}
                    image={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${item.poster_path}`} />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography>
                        <strong>{item.original_title}</strong> <span>{item.release_date}</span>
                    </Typography>
                    <Typography paragraph={true} >
                        {trimmed}
                    </Typography>
                    <Button>I Own This</Button>
                </CardContent>
            </Card>
        </Grid>

    )
}

