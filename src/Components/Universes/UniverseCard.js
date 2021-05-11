import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Collapse, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { StarsOutlined } from '@material-ui/icons';
// import {instance} from '../../Api/axios'
import axios from 'axios'
export const instance = axios.create({
    baseURL: 'http://localhost:2121/',
})
export default function UniverseCard(props) {
    const universe = props.info
    const [stars, setStars] = useState([])
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        async function fetchData() {
            await instance.request({
                method: 'GET',
                url: 'http://localhost:2121/stars',
                params: { universeId: universe.id }
            }).then(res =>
                setStars(res.data))
        }
        fetchData()
    }, [universe])

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <Card aria-expanded={expanded} style={{ minHeight: 330 + 'px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'stretch',
                                                    justifyContent: 'space-evenly'
                                                     }}>
                    <CardContent>
                        <Typography variant="h5" component="h2"> {universe.name} </Typography>
                        <Typography color="textSecondary" >  Max size: {universe.maxSize}  </Typography>
                        <Typography component="p"> Stars count: {stars.length}</Typography>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <List dense={'dense'}>
                                {stars.map(star => (
                                    <ListItem key={star.id}>
                                        <ListItemIcon>
                                            <StarsOutlined style={{ color: star.color.toLowerCase() }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={star.name}
                                        />
                                    </ListItem>))}
                            </List>
                        </Collapse>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" onClick={handleExpandClick}>Show Stars</Button>
                    </CardActions>
            </Card>
        </>
    )
}