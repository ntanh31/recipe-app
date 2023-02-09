import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    const param = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
        )
        const recipes = await data.json()
        console.log(recipes.results)
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(param.type)
        console.log(param.type)
    }, [param.type])

    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Link to={"/recipe/" + item.id}>
                        <Card key={item.id}>
                            <img alt='food' src={item.image}></img>
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Cuisine