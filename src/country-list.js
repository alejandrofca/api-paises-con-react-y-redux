import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Country from './country'
import { v4 } from 'uuid'

const CountryListStyled = styled.div`
  display: inline-grid;
  grid-row-gap: 1.3em;
  justify-content: center;
  padding: 4em 2em;
`

function CountryList() {
  const dispatch = useDispatch()
  const countryList = useSelector(state => state.countryList)
  console.log('country-list: ', countryList)
  // const [countryList, setCountryList] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        return response.json()
      })
      .then(list => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        // setCountryList(data)
        console.log(list.length)
      })
      .catch(() => {
        console.log("Error al conectar a la API")
      })
  }, [])

  return (
    <CountryListStyled>
      {
        countryList.map(country => {
          return (
            <div>
              <Country
                key={() => v4()}
                code={country.alpha2Code}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital} />
            </div>
          )
        })
      }
    </CountryListStyled>
  )
}

export default CountryList