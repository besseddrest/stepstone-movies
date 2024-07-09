import { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";

export default function DetailsModal({ isOpen, modalItem }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setOpen(isOpen);
        }
    }, [isOpen]);

    if (modalItem) {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="movie-modal-title"
                aria-describedby="movie-modal-description"
            >
                <Box>
                    <Typography>{modalItem.original_title}</Typography>
                    <Typography>Hello World</Typography>
                    <Typography>Hello World</Typography>

                </Box>
            </Modal>
        )
    }

    function handleClose() {
        setOpen(false);
    }
}
