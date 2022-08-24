import styled from 'styled-components'

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  background-color: #161624;
  background-size: cover;
  height: 100vh;
`
export const CountryHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #f8fafc;
  margin: 10px;
`
export const CountryListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  width: 90%;
  margin: 10px;
  max-height: 40vh;
  overflow-y: scroll;
  padding: 15px;
`
export const NoVisitedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  margin: 5px;
  align-self: center;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: 0px;
  padding: 10px;
  width: 90%;
  margin: 5px;
  margin-left: 30px;
  max-height: 50vh;
  overflow-y: scroll;
`
