import React from 'react'
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

function Category() {
    return (
        <List>
            <SLink to={"/cuisine/vietnamese"}>
                <GiChopsticks />
                <h4>Vietnamese</h4>
            </SLink>

            <SLink to={"/cuisine/italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>

            <SLink to={"/cuisine/french"}>
                <FaHamburger />
                <h4>French</h4>
            </SLink>

            <SLink to={"/cuisine/korean"}>
                <GiNoodles />
                <h4>Korean</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    width: 100%;
    align-items: center;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 9rem;
    height: 9rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 1rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: rgb(253, 203, 110);
        h4{
            color: white;
        }

        svg{
            color: white;
        }
    }
`
export default Category