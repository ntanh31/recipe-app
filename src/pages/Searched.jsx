import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {
    const [searched, setSearched] = useState([])
    const param = useParams()
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
        )
        const recipes = await data.json()
        console.log(recipes.results)
        setSearched(recipes.results)
    }

    useEffect(() => {
        getSearched(param.search)
    }, [param.search])

    return (
        <Grid>
            {searched.map((item) => {
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

export default Searched