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
            props.color === 'RED' ? '#e01e37' :
                props.color === 'BLUE' ? '#90e0ef' :
                    props.color === 'GREEN' ? '#7dd181' :
                        props.color === 'YELLOW' ? '#ffee32' :
                            props.color === 'BLACK' && '#011627',
        minWidth: 275,
        color: (props) => props.color === 'BLACK' && '#F6F5F3',
        boxShadow: 'none',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 6px 12px 0 ${Color('#011627')
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
        await axios.delete(`https://api.jsonbin.io/b/609c4f9473bb7e4ee41ca7da/${star.id}`)
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
                <Button size="small" onClick={deleteStar}><DeleteIcon style={{color: star.color === 'BLACK' && '#fafafa'}} /></Button>
            </CardActions>
        </Card>
    )
}
