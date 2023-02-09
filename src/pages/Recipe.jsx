import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
  const param = useParams()
  const [detail, setDetail] = useState({})
  const [button, setButton] = useState("instruction")

  const fetchDetail = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const details = await data.json()
    setDetail(details)
  }

  useEffect(() => {
    fetchDetail();
  }, [param.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img alt='' src={detail.image} />
      </div>

      <Info>
        <Button className={button === "instruction" ? "active" : ""} onClick={() => setButton("instruction")}>
          Instruction
        </Button>

        <Button className={button === "ingredients" ? "active" : ""} onClick={() => setButton("ingredients")}>
          Ingredients
        </Button>

        {button === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        )}

        {button === "ingredients" && (
          <ul>
            {detail.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white
  }
  h2{
    margin-bottom: 2rem; 
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 400;
  height: 3rem;
  text-align: center;
  display: inline;
`

const Info = styled.div`
  margin-left: 10rem
`

export default Recipe