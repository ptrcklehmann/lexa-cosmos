import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from '../../Api/axios'
import { Button, Divider, SwipeableDrawer, Typography } from '@material-ui/core';
import UniverseCard from './UniverseCard';

export default function Universes({ fetchUrl }) {
    const [universes, setUniverses] = useState([])
    const [drawerState, setState] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setUniverses(request.data)
        }
        fetchData()
    }, [fetchUrl])

    const toggleDrawer = (open) => (event) => {
        setState(open);
    }
    return (
        <>
            <Typography variant='h4' component="h2">
                Universes / <Button variant="contained" onClick={toggleDrawer(true)}>Create New</Button>
            </Typography>
            <Divider variant="middle" />
            <Grid container spacing={4}>
                {(universes)
                    && Object.values(universes).map((universe) => (
                        <Grid item xs={12} md={3} sm={6} key={universe.id}>
                            <UniverseCard info={universe} />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
