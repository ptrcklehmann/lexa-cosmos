
import React from 'react';
import { TabContext } from '@material-ui/lab'
import Header from './Header/Header';
import Container from './Container/Container';
import '../Styles/style.scss'


export default function App() {
  const [tabValue, setTabValue] = React.useState('1')
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }
  return (
    <>
      <TabContext value={tabValue} variant="fullWidth">
        <Header tabHandler={handleTabChange} />
        <Container />
      </TabContext>
    </>
  )
}
