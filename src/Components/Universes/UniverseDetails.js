import React, { useState } from 'react'
import axios from 'axios'
import { Button, Collapse, List, Tab, ListItem, ListItemIcon, ListItemText, Typography, Card, CardActions, CardContent, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid } from '@material-ui/core'
import { StarsOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import useFetch from '../../Api/useFetch'
import { TabPanel, TabList, TabContext } from '@material-ui/lab'
import Color from 'color';

const useStyles = makeStyles((theme) => ({
    root: {
        color: (props) =>
            props.color === 'RED' ? '#EF2E10' :
                props.color === 'BLUE' ? '#64DFDF' :
                    props.color === 'GREEN' ? '#9EF01A' :
                        props.color === 'YELLOW' ? '#FFD60A' :
                            props.color === 'BLACK' && '#252422',
    },
    card: {
        border: '1 px solid #183642',
        boxShadow: 'none',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 6px 12px 0 ${Color('#011627')
                .rotate(-5)
                .darken(0.2)
                .fade(0.5)}`,
        },
        transition: '0.2s',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    indicator: {
        backgroundColor: '#6411ad',
    }
}));

export default function UniverseDetails(props) {
    const classes = useStyles(props.info)
    const universe = props.info
    const [expanded, setExpanded] = useState(false)
    const { loading, data } = useFetch('http://localhost:4242/stars')
    const [tabValue, setTabValue] = useState('1')

    const [newStar, setNewStar] = useState({
        color: 'RED',
        name: "Vega",
        universeId: universe.id
    })

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const addNewStar = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        await axios.post('http://localhost:4242/stars', newStar).catch(err => console.log('error', err))
    }

    const handleChange = (event) => {
        setNewStar({
            ...newStar,
            [event.target.name]: event.target.value,
        })
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }
    return (

            <Card style={{
            <Card className={classes.card}style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                padding: 5,
            }}>
                <CardContent>
                    <Typography variant="h5" component="h2"> {universe.name} </Typography>
                    <Typography color="textSecondary" >  Max size: {universe.maxSize}  </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <TabContext value={tabValue} variant="fullWidth">
                            <TabList classes={{ indicator: classes.indicator }} onChange={handleTabChange} aria-label="simple tabs example">
                                <Tab label="Stars" value="1" />
                                <Tab label="Add Star" value="2" />
                            </TabList>
                            <TabPanel value="1">
                                <List>
                                    {data && (data.map(star =>
                                        (star.universeId === universe.id) && (
                                        <ListItem key={star.id}>
                                            <ListItemIcon>
                                                <StarsOutlined className={classes.root} />
                                            </ListItemIcon>
                                            <ListItemText primary={star.name} />
                                        </ListItem>
                                        )))}
                                </List>
                            </TabPanel>
                            <TabPanel value="2">
                                <form className={classes.form} validate='true' autoComplete="off">
                                    <Grid container spacing={1}>
                                        <Grid item sm={6}>
                                            <TextField className={classes.textField} label="Name" name="name" onChange={handleChange} required />
                                        </Grid>
                                        <Grid item sm={6}>
                                        <FormControl>
                                            <FormLabel component="legend">Color</FormLabel>
                                            <RadioGroup aria-label="color" name="color" onChange={handleChange}>
                                                <FormControlLabel value="RED" control={<Radio />} label="Red" />
                                                <FormControlLabel value="BLUE" control={<Radio />} label="Blue" />
                                                <FormControlLabel value="GREEN" control={<Radio />} label="Green" />
                                                <FormControlLabel value="YELLOW" control={<Radio />} label="Yellow" />
                                                <FormControlLabel value="BLACK" control={<Radio />} label="Black" />
                                            </RadioGroup>
                                            <Button onClick={addNewStar}>Save</Button>
                                        </FormControl>
                                    </Grid>
                                    </Grid>
                                </form>
                            </TabPanel>
                        </TabContext>
                    </Collapse>
                <CardActions>
                    <Button variant="contained" onClick={handleExpandClick}>{expanded ? 'Hide Details' : 'Show Details'}</Button>
                </CardActions>
                </CardContent>
        </Card>
    )
}
