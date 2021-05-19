import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(5),
        },
    },
    grid: {
        padding: theme.spacing(2),

    },
}
))
export default function Imprint() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' component="h2">
                        ❕ Imprint
                    </Typography>

                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.grid}>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 0
                    </Typography>
                    <Typography variant='body1' component="h2">0.1</Typography>
                    <Typography variant='body1' component="h2">
                        I was very proud to take part in the Global Social Protection Week in 2019, which was organised by the International Labour Organisation, where I was in charge of designing all the visual material used at the event. My work being appreciated and being tasked with creating design solutions for an organisation that aims to make the world a better place was a thrilling experience.
                    <br />
                    </Typography>
                    <br />
                    <Typography variant='body1' component="h2">0.2</Typography>
                    <Typography variant='body1' component="h2">
                        Lately, most likely I would easily be caught listening to weekly podcasts in order to stay tuned. The one that most stroke me lately was the Developer Tea's Detaching to Seek an Outside View. where the host,Jonathan Cutrell, talks about the importance and the challenges of placing ourselves inside other's perspective when testing our products. To utterly leave our inside view and be able to to really imagine how someone else's take on our application is a rather difficult task that requires a lot of practice.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 1
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Task 1 is currently not merged with the main branch, the commit can be found under the following <a href="https://www.notion.so/ptrcklehmann/JS-Frontend-Test-2b73e6e4aad444528c105b8c4615151e#5286f98e12b54317a12de49378733844">link</a>.
                        <br />
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 2
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Boilerplate created with create-react-app and main layout built using Material UI. To <a href="https://github.com/ptrcklehmann/lexa-cosmos/commit/fe26df3da07d7aacbc9614a09c16ff0ea1cda086">commit</a>.
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 3
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Boilerplate created with create-react-app and main layout built using Material UI. To <a href="https://github.com/ptrcklehmann/lexa-cosmos/commit/fe26df3da07d7aacbc9614a09c16ff0ea1cda086">commit</a>.
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 4
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Installed node-sass and sass to minify the css. react-scrips is responsible to minify the production build via npm run build.
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 5
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Execute npm run test on your terminal to run the two written tests. The first one simple checks if the main component {'<App />'} renders correctly in the browser. If it's the time running, the test will generate a snapshot of the application and use it for future tests. </Typography>
                    <br />
                    <Typography variant='body1' component="h2">
                        The second Jest test checks the custom hook useFetch.js performance when given mock data. The test uses @testing-library/react-hooks, react-test-renderer and axios-mock-adapter.
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 6
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Link to the <a href="https://www.notion.so/ptrcklehmann/JS-Frontend-Test-2b73e6e4aad444528c105b8c4615151e#1cea758616fc41989ba568902a11818a">commit</a>.
                        <br />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' component="h2">
                        Task 7
                    </Typography>
                    <Typography variant='body1' component="h2">
                        Did't have enough time for that one :( <br />
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}
