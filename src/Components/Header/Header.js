import React from 'react'
import { TabList } from '@material-ui/lab'
import { Avatar, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from './logo.svg'

const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor: '#77FF00'
    }
}))

export default function Header(props) {
    const classes = useStyles()
    return (
        <TabList variant='fullWidth' classes={{ indicator: classes.indicator }} onChange={props.tabHandler}  aria-label="navbar tabs">
            <Tab icon={<Avatar alt="logo" src={logo}/>} disabled />
            <Tab label="Universes" value="1" />
            <Tab label='Stars' value="2" />
            <Tab label="Imprint" value="3" />
        </TabList>
    )
}
