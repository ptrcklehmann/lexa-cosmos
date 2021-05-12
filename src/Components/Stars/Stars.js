import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import StarCard from './StarCard';
import useFetch from '../../Api/useFetch'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(5),
        },
    },
}))

export default function Stars({ fetchUrl }) {
    const { loading, data } = useFetch(fetchUrl)
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2">
                   🌌 Stars
                </Typography>
            </Grid>
                {loading && (<Typography>Loading...</Typography>)}
                {data != null
                    && Object.values(data).map((star) => (
                        <Grid item xs={12} md={3} sm={6} key={star.id}>
                            <StarCard info={star} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
