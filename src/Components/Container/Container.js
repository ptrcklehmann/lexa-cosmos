import { TabPanel } from '@material-ui/lab'
import React from 'react'
import Imprint from '../Imprint/Imprint'
import Stars from '../Stars/Stars'
import Universes from '../Universes/Universes'

export default function Container() {
    return (
        <>
            <TabPanel value="1">
                <Universes fetchUrl='http://localhost:4242/universes' />
            </TabPanel>
            <TabPanel value="2">
                <Stars fetchUrl='http://localhost:4242/stars' />
            </TabPanel>
            <TabPanel value="3">
                <Imprint />
            </TabPanel>
        </>
    )
}
