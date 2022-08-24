import {
  ListItemContainer,
  CountryName,
  VisitedButton,
  VisitedText,
} from './styledComponents'

const CountryList = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <ListItemContainer>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>{text}</VisitedText>
      ) : (
        <VisitedButton
          type="button"
          bgColor={isVisited}
          color={isVisited}
          onClick={onClickButton}
        >
          {text}
        </VisitedButton>
      )}
    </ListItemContainer>
  )
}

export default CountryList
