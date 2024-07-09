import { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";

export default function DetailsModal({ isOpen, modalItem, modalCallback }) {
    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'darkslategray',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(isOpen);
        }
    }, []);

    if (modalItem) {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="movie-modal-title"
                aria-describedby="movie-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">{modalItem.original_title}</Typography>
                    <Typography>{modalItem.release_date}</Typography>
                    <Typography>{modalItem.overview}</Typography>
                </Box>
            </Modal>
        )
    }

    function handleClose() {

        if (modalCallback) {
            modalCallback(null, false);
        }
    }
}
