import React, { createContext, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import useFetch from '../../Api/useFetch'
import { Backdrop, Button, Card, CardActions, CardContent, Divider, Fade, MenuItem, Modal, SwipeableDrawer, TextField, Typography } from '@material-ui/core';
import UniverseDetails from './UniverseDetails'
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),

        },
    },
    title: {
        paddingBottom: '1rem',
    },
    drawer: {
        padding: '1rem',
        height: 150,
        display: 'flex',
        flexWrap: 'wrap',
    },
    newUniverse: {
        width: '100%',
        fontWeight: 500
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 100,
        padding: 1 + 'rem'
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
            <div role="presentation" >
                <Typography> Add new Universe</Typography>
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
                    <Button variant="contained" onClick={addNewUniverse}>Save</Button>
                </form>
            </div>
        )
    };
    return (
        <div className={classes.root}>
            <SwipeableDrawer anchor='top' open={drawerState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                {form()}
            </SwipeableDrawer>
            <Divider variant="middle" />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2">
                        Universes  <Button variant="contained" onClick={toggleDrawer(true)}>Create New</Button>
                    </Typography>
                </Grid>
                {data != null
                    && Object.values(data).map((universe) => (
                        <Grid item xs={12} md={6} sm={6} key={universe.id}>
                            <UniverseDetails info={universe} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}
