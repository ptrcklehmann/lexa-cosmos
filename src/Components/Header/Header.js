import React from 'react'
import { TabList } from '@material-ui/lab'
import { AppBar, Avatar, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from './lexa-logo.svg'

const useStyles = makeStyles(() => ({
    root: {
        boxShadow: 'none'
    },
    indicator: {
        backgroundColor: '#6411ad',
    }
}))

export default function Header(props) {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.root}>
            <TabList variant='fullWidth' classes={{ indicator: classes.indicator }} onChange={props.tabHandler} aria-label="navbar tabs">
                <Tab icon={<Avatar variant='square' alt="logo" src={logo} />} value="1" />
                <Tab label="Universes" value="1" />
                <Tab label='Stars' value="2" />
                <Tab label="Imprint" value="3" />
            </TabList>
        </AppBar>
    )
}
