import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material"

export default function MyMovies({ list = [] }) {
    console.log('LIST: ', list);
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
                <ul>
                    {list.length > 0 && list.map(item => <li key={`my-movies-${item.id}`}>{item.original_title}</li>)}
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}
