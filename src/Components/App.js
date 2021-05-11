
import React from 'react';
import { TabContext } from '@material-ui/lab'
import Header from './Header/Header';
import Container from './Container/Container';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, Switch } from '@material-ui/core';
import '../Styles/scss/style.scss'
import { themeSchema } from '../Styles/themeOptions'


export default function App() {
  const [tabValue, setTabValue] = React.useState('1')
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }
  return (
    <ThemeProvider theme={themeSchema('light')}>
      <CssBaseline />
      <TabContext value={tabValue} variant="fullWidth">
        <Header tabHandler={handleTabChange} />
        <Container />
      </TabContext>
    </ThemeProvider>
  )
}
