import { TabPanel } from '@material-ui/lab'
import React from 'react'

export default function Container() {
    return (
        <>
            <TabPanel value="1">
                Universes
                    {/* <Universes fetchUrl='/universes' /> */}
                
            </TabPanel>
            <TabPanel value="2">
            Stars
                    {/* <Stars fetchUrl='/stars' /> */}
                
            </TabPanel>
            <TabPanel value="3">
                Imprint
                {/* <Imprint fetchUrl='/imprint' /> */}
            </TabPanel>
        </>
    )
}
