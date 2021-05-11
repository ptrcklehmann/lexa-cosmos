import { TabPanel } from '@material-ui/lab'
import React from 'react'
import Stars from '../Stars/Stars'
import Universes from '../Universes/Universes'

export default function Container() {
    return (
        <>
            <TabPanel value="1">
                    <Universes fetchUrl='universes' />
            </TabPanel>
            <TabPanel value="2">
                    <Stars fetchUrl='stars' />
            </TabPanel>
            <TabPanel value="3">
                Imprint
                {/* <Imprint fetchUrl='/imprint' /> */}
            </TabPanel>
        </>
    )
}
