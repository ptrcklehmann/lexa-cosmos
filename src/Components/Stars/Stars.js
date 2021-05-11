import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
// import {instance} from '../../Api/axios'
import StarCard from './StarCard';
import { StarsOutlined } from '@material-ui/icons';
// import {instance} from '../../Api/axios'
import axios from 'axios'
export const instance = axios.create({
    baseURL: 'http://localhost:2121/',
})
export default function Stars({ fetchUrl }) {
    const [stars, setStars] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
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
