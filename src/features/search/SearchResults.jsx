import { useState } from "react";
import { Grid } from "@mui/material";
import DetailsModal from "./DetailsModal";
import SearchResultItem from "./SearchResultItem";

export default function SearchResults({ list = [], cb }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    return (
        <section>
            <DetailsModal isOpen={isOpen} modalItem={modalItem} modalCallback={showModal} />
            <Grid container sx={{ flex: 'auto' }} spacing={2}>
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

