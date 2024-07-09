import { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Grid, ButtonGroup } from "@mui/material";
import { CONSTANTS } from "../../utils/constants";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DetailsModal from "./DetailsModal";

export default function SearchResults({ list = [], cb }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    return (
        <section>
            <DetailsModal isOpen={isOpen} modalItem={modalItem} modalCallback={showModal} />

            <Grid container sx={{ flex: 'auto', minWidth: 'maxcontent' }} spacing={2}>
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
        <Grid item xs={4}>
            <Card raised={true} sx={{
                bgcolor: 'darkslategray',
                minHeight: '370px',
            }}>
                <CardMedia
                    sx={{ height: 500 }}
                    image={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${item.poster_path}`} />
                <CardContent sx={{ textAlign: 'left', color: 'white' }}>
                    <Typography variant="h5">
                        <strong>{item.original_title}</strong>
                    </Typography>
                    <Typography sx={{ marginBottom: '10px' }}>
                        <span>{item.release_date}</span>
                    </Typography>
                    <Typography paragraph={true}>
                        {trimmed}
                    </Typography>
                    <ButtonGroup sx={{ gap: 2 }}>
                        <Button color="primary" variant="contained" startIcon={<InfoOutlinedIcon />} onClick={() => showMovieDetails(item)}>More Info</Button>
                        <Button color="secondary" variant="contained" startIcon={<AddCircleOutlineIcon />} className={isOwned ? `result__card--owned` : ''} onClick={() => toggleOwnership(item)}>I Own This</Button>
                    </ButtonGroup>
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


