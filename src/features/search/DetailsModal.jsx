import { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { CONSTANTS } from "../../utils/constants";

export default function DetailsModal({ isOpen, modalItem, modalCallback }) {
    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'darkslategray',
        border: '1px solid #000',
        borderRadius: '10px',
        boxShadow: 24,
    };

    const modalContentStyle = {
        p: 4
    };

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
                <Box sx={style}>
                    <Box component="img"
                        sx={{
                            height: 'auto',
                            width: '100%',
                        }}
                        alt="The house from the offer."
                        src={`${CONSTANTS.TMDB_IMAGE_BASE_PATH}/w500/${modalItem.backdrop_path}`} />
                    <Box sx={modalContentStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">{modalItem.original_title}</Typography>
                        <Typography sx={{ marginBottom: 2 }}>{modalItem.release_date}</Typography>
                        <Typography>{modalItem.overview}</Typography>

                    </Box>
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
