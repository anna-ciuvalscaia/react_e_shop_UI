{/*import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import NoteCard from "./components/NoteCard";

export default function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

*/}