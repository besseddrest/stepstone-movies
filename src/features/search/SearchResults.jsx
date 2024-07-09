import { Button, CardContent, CardMedia, Typography, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import { CONSTANTS } from "../../utils/constants"

export default function SearchResults({ list = [], cb }) {

    return (
        <section>
            <div className="search-result__container">
                <Grid container spacing={2} className="search-result__item">
                    {list.length > 0 && list.map(item =>
                        <SearchResultItem key={`item-${item.id}`} item={item} cb={cb} />
                    )}
                </Grid>
            </div>
        </section>
    )

    function SearchResultItem({ item, cb }) {
        const trimmed = item.overview.length > 80
            ? item.overview.substring(0, 80) + '...'
            : item.overview;

        return (
            <Grid item xs={2} sm={3} md={4}>
                <Card>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${item.poster_path}`} />
                    <CardContent sx={{ textAlign: 'left' }}>
                        <Typography>
                            <strong>{item.original_title}</strong> <span>{item.release_date}</span>
                        </Typography>
                        <Typography paragraph={true}>
                            {trimmed}
                        </Typography>
                        <Button onClick={() => handleClick(item)}>I Own This</Button>
                    </CardContent>
                </Card>
            </Grid>

        )
        function handleClick(item) {
            console.log('hello', item.id);
            console.log(cb);
            if (cb) {
                console.log(`${item.id}: ${item.original_title}`);
                cb(item);
            }
        }

    }

}


