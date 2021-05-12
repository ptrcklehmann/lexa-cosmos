import { Button, Grid, GridList, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(5),
        },
    }
}))
export default function Imprint() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2">
                        ❕ Imprint
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
