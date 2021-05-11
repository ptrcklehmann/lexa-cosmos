import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import useFetch from '../../Api/useFetch'
import { Button, Divider, SwipeableDrawer, Typography } from '@material-ui/core';
import UniverseCard from './UniverseCard';

export default function Universes({ fetchUrl }) {
    const { loading, data } = useFetch(fetchUrl)
    const [drawerState, setState] = useState(false);
    console.log(loading)
    console.log(data)

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
                {loading && (<h1>Loading...</h1>)}
                {(data) &&
                (data)
                    && Object.values(data).map((universe) => (
                        <Grid item xs={12} md={3} sm={6} key={universe.id}>
                            <UniverseCard info={universe} />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
