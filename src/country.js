import React from 'react'
import styled from 'styled-components'

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgb(0,0,0,.3);
  img {
    width: 100%;
    height: 160px;
  }
  .details {
    padding: 1.5em;
  }
  .country_data {
    padding-left: 20px;
    margin-top: 20px;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: .9em;
    margin-bottom: .5rem;
  }
`

function Country({
  code,
  flag,
  name,
  population,
  region,
  capital
}) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="" />
      <div className="country_data">
        <h2>{name}</h2>
        <h5>{code}</h5>
        <p><strong>Población:</strong> {population}</p>
        <p><strong>Región:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital}</p>
      </div>
    </CountryStyled>
  )
}

export default Country