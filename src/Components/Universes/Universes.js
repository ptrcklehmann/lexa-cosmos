import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import useFetch from '../../Api/useFetch'
import { Button, MenuItem, SwipeableDrawer, TextField, Typography } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import UniverseDetails from './UniverseDetails'
import { makeStyles } from '@material-ui/styles';
import Color from 'color';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(5),
        },
    },
    title: {
        paddingBottom: '1rem',
    },
    card: {
        boxShadow: 'none',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 6px 12px 0 ${Color('#252422')
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
        transition: '0.2s',
    },
    drawer: {
        padding: '1rem',
        height: 450,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignContent: 'stretch',
        alignItems: 'stretch',

    },
    newUniverse: {
        width: '100%',
        fontWeight: 500
    },
    form: {
        isplay: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'stretch',
        alignItems: 'stretch',
        height: 200,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '20ch',
    },
}));


export default function Universes({ fetchUrl }) {
    const { loading, data } = useFetch(fetchUrl)
    const [drawerState, setState] = useState(false);
    const classes = useStyles();

    const [newUniverse, setNewUniverse] = useState({
        maxSize: 0,
        name: ''
    })
    
    const addNewUniverse = async (e) => {
        e.preventDefault()
        await axios.post(fetchUrl, newUniverse).catch(err => console.log('error', err))
    }
    const toggleDrawer = (open) => (event) => {
        setState(open);
    }
    const form = () => {
        const handleChange = (event) => {
            setNewUniverse({
                ...newUniverse,
                [event.target.name]: event.target.value,
            })
        }
        return (
            <div className={classes.drawer}>
                <Typography variant="h5" color="textSecondary" >Add new Universe</Typography>
                <br />
                <form className={classes.form} validate='true' autoComplete="off">
                    <TextField className={classes.textField} label="Name" name="name" onChange={handleChange} required />
                    <TextField
                        className={classes.textField}
                        name="maxSize"
                        select
                        label="Max Size"
                        value={newUniverse.maxSize}
                        onChange={handleChange}
                        helperText="Select the max number of stars"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button onClick={addNewUniverse}>Save</Button>
                </form>
            </div>
        )
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2">
                        🟣 Universes | <Button onClick={toggleDrawer(true)} style={{ color: '#6411ad' }}>Create New</Button>
                    </Typography>
                </Grid>
                {data != null
                    && Object.values(data).map((universe) => (
                        <Grid item xs={12} md={6} sm={6} key={universe.id}>
                            <UniverseDetails info={universe} />
                        </Grid>
                    ))}
            </Grid>
            <SwipeableDrawer className={classes.drawer} anchor='top' open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                {form()}
            </SwipeableDrawer>
        </div>
        <>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h4' component="h2">
                            🟣 Universes | <Button onClick={toggleDrawer(true)} style={{ color: '#6411ad' }}>Create New</Button>
                        </Typography>
                    </Grid>
                    {data != null
                        && Object.values(data).map((universe) => (
                            <Grid item xs={12} md={6} sm={6} key={universe.id}>
                                <UniverseDetails info={universe} />
                            </Grid>
                        ))}
                </Grid>
                <SwipeableDrawer className={classes.drawer} anchor='top' open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                    {form()}
                </SwipeableDrawer>
            </div>
        </>
    )
}
