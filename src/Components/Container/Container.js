import { TabPanel } from '@material-ui/lab'
import React, { createContext } from 'react'
import Stars from '../Universes/Stars/Stars'
import Universes from '../Universes/Universes'

export default function Container() {
    return (
        <>
            <TabPanel value="1">
                <Universes fetchUrl='http://localhost:8000/universes' />
            </TabPanel>
            <TabPanel value="2">
                <Stars fetchUrl='http://localhost:8000/stars' />
            </TabPanel>
            <TabPanel value="3">
                Imprint
                {/* <Imprint fetchUrl='/imprint' /> */}
            </TabPanel>
        </>
    )
}
