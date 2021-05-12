import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Color from 'color';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: (props) =>
            props.color === 'RED' ? '#EF2E10' :
                props.color === 'BLUE' ? '#64DFDF' :
                    props.color === 'GREEN' ? '#9EF01A' :
                        props.color === 'YELLOW' ? '#FFD60A' :
                            props.color === 'BLACK' && '#252422',
        minWidth: 275,
        color: (props) => props.color === 'BLACK' && '#F6F5F3',

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
}));


export default function StarCard(props) {
    const star = props.info
    const classes = useStyles(props.info);

    const deleteStar = async (e) => {
        e.preventDefault()
        await axios.delete(`http://localhost:8000/stars/${star.id}`)
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="caption" gutterBottom>
                    Star
                </Typography>
                <Typography variant="h5" component="h2">
                    {star.name}
                </Typography>
                <Typography  variant="body">
                    {star.color}
                </Typography>
                <Typography variant="body2"component="p">
                    id: {star.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={deleteStar}><DeleteIcon /></Button>
            </CardActions>
        </Card>
    )
}
