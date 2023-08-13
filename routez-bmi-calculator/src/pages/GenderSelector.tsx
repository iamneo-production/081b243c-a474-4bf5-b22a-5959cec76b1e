import { Button, Container, TextField, ToggleButtonGroup, ToggleButton, Stack } from '@mui/material';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import MaleIcon from '../assets/male.svg'
import FemaleIcon from '../assets/female.svg'


import './Login.css';

import React from 'react'

const GenderSelector = () => {

    const handleChange = () => {

    }

    return (
        <Container maxWidth="xs">
            <h1>Select your gender</h1>
                <ToggleButtonGroup
                    orientation="horizontal"
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="list" aria-label="list">
                        <Stack spacing={2}>
                            <img src={MaleIcon} alt="female" width={100} />
                            <h3>Male</h3>
                        </Stack>
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                        <Stack spacing={2}>
                            <img src={FemaleIcon} alt="female" width={100} />
                            <h3>Female</h3>
                        </Stack>
                    </ToggleButton>
                </ToggleButtonGroup>
        </Container >
    )
}

export default GenderSelector;