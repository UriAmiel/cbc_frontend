import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import SERVER_SUFFIX from '../constants.js';

export default function CreateCommunityForm() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [name, setName] = React.useState('')

    const createCommunity = (e) => {
        e.preventDefault()
        const community = {name}
        fetch(
            SERVER_SUFFIX + "community/add",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(community)
            }).then( () => {
                console.log("New community added")
            })
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add community</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Community name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>
                <Button variant="contained" onClick={createCommunity}>Create</Button>
            </Paper>
        </Container>
    );
}
