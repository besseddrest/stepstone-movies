import { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { CONSTANTS } from "../../utils/constants";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DetailsModal from "./DetailsModal";

export default function SearchResults({ list = [], cb }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    return (
        <section>
            <DetailsModal isOpen={isOpen} modalItem={modalItem} />

            <Grid container spacing={2} className="search-result__item">
                {list.length > 0 && list.map(item =>
                    <SearchResultItem key={`item-${item.id}`} item={item} cb={cb} modalCallback={showModal} />
                )}
            </Grid>
        </section>
    )

    function showModal(item, bool) {

        setIsOpen(bool);
        setModalItem(item)
    }
}

function SearchResultItem({ item, cb, modalCallback }) {
    const [isOwned, setIsOwned] = useState(false);
    const trimmed = item.overview.length > 80
        ? item.overview.substring(0, 80) + '...'
        : item.overview;

    return (
        <Grid item xs={2} sm={3} md={4}>
            <Card raised={true} sx={{
                bgcolor: 'text.disabled'

            }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${item.poster_path}`} />
                <CardContent sx={{ textAlign: 'left', color: 'text.primary' }}>
                    <Typography>
                        <strong>{item.original_title}</strong> <span>{item.release_date}</span>
                    </Typography>
                    <Typography paragraph={true}>
                        {trimmed}
                    </Typography>
                    <Button color="primary" variant="contained" startIcon={<InfoOutlinedIcon />} onClick={() => showMovieDetails(item)}>More Info</Button>
                    <Button color="secondary" variant="contained" startIcon={<AddCircleOutlineIcon />} className={isOwned ? `result__card--owned` : ''} onClick={() => toggleOwnership(item)}>I Own This</Button>
                </CardContent>
            </Card>
        </Grid>

    )

    function toggleOwnership(item) {
        setIsOwned(!isOwned);
        if (cb) {
            cb(item);
        }
    }

    function showMovieDetails(item) {
        if (modalCallback) {
            modalCallback(item, true)
        }
        console.log("Show Details for: ", item.id);
    }
}


