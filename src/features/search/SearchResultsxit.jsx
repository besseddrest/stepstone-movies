import {
    Button, CardContent, CardMedia, Typography
} from "@mui/material"
import Card from "@mui/material/Card"
import { CONSTANTS } from "../../utils/constants"

export default function SearchResults({ list = [] }) {
    return (
        <section>
            <div className="search-result__container">
                <div className="search-result__item">
                    {list.length > 0 && list.map(item =>

                        <Card key={`result-item-${item.id}`}>
                            <CardMedia
                                sx={{ height: 150 }}
                                image={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${item.backdrop_path}`} />
                            <CardContent>
                                <Typography>
                                    <strong>{item.original_title}</strong> <span>{item.release_date}</span>
                                </Typography>
                                <Typography>
                                    {item.overview}
                                </Typography>
                                <Button>I Own This</Button>
                            </CardContent>
                        </Card>)}
                </div>
            </div>
        </section>
    )
}

