import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material"

export default function MyMovies({ list = [] }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ArrowDownward />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Typography>My Movies</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul style={{ textAlign: 'left' }}>
                    {list.length > 0 && list.map(item =>
                        <li key={`my-movies-${item.id}`}>{item.original_title} ({item.release_date.substring(0, 4)})</li>
                    )}
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}
