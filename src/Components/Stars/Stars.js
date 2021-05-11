import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import axios from '../../Api/axios'
import StarCard from './StarCard';

export default function Stars({ fetchUrl }) {
    const [stars, setStars] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setStars(request.data)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <>
           <Typography variant="h4" component="h2">
                Stars
                </Typography>
            <Grid container spacing={4}>
                {stars != null
                    && Object.values(stars).map((star) => (
                        <Grid item xs={12} md={3} sm={6} key={star.id}>
                            <StarCard info={star} />
                        </Grid>
                    ))}
            </Grid> 
        </>
    )
}
