import { maxComputer, maxMobile, maxTablet } from '@app/styles'
import {
  BoxModelProperties,
  BoxPositionProperties,
  CustomProperties,
  FlexBoxProperties,
  TextProperties,
} from '@app/types'
import { css } from 'styled-components'

const boxModelProperties = css<BoxModelProperties>`
  border: ${({ border }) => border};
  ${({ displayComputer }) =>
    displayComputer &&
    css<BoxModelProperties>`
      @media (max-width: ${maxComputer}) {
        display: ${({ displayComputer }) => displayComputer};
      }
    `}
  ${({ displayTablet }) =>
    displayTablet &&
    css<BoxModelProperties>`
      @media (max-width: ${maxTablet}) {
        display: ${({ displayTablet }) => displayTablet};
      }
    `}
  ${({ displayMobile }) =>
    displayMobile &&
    css<BoxModelProperties>`
      @media (max-width: ${maxMobile}) {
        display: ${({ displayMobile }) => displayMobile};
      }
    `}

  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  display: ${({ display }) => display};

  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};

  margin-top: ${({ marginTop }) => marginTop};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};

  padding: ${({ padding }) => padding};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-top: ${({ paddingTop }) => paddingTop};
  transform: ${({ transform }) => transform};
  width: ${({ width }) => width};
`

const flexBoxProperties = css<FlexBoxProperties>`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};

  ${({
    flexComputer,
    flexGrowComputer,
    flexShrinkComputer,
    flexBasisComputer,
    flexDirectionComputer,
    flexWrapComputer,
    justifyContentComputer,
    alignContentComputer,
    alignItemsComputer,
    alignSelfComputer,
  }) => {
    if (
      flexComputer ||
      flexGrowComputer ||
      flexShrinkComputer ||
      flexBasisComputer ||
      flexDirectionComputer ||
      flexWrapComputer ||
      justifyContentComputer ||
      alignContentComputer ||
      alignItemsComputer ||
      alignSelfComputer
    )
      return css<FlexBoxProperties>`
        @media (max-width: ${maxComputer}) {
          flex: ${({ flexComputer }) => flexComputer};
          flex-grow: ${({ flexGrowComputer }) => flexGrowComputer};
          flex-shrink: ${({ flexShrinkComputer }) => flexShrinkComputer};
          flex-basis: ${({ flexBasisComputer }) => flexBasisComputer};
          flex-direction: ${({ flexDirectionComputer }) => flexDirectionComputer};
          flex-wrap: ${({ flexWrapComputer }) => flexWrapComputer};
          justify-content: ${({ justifyContentComputer }) => justifyContentComputer};
          align-content: ${({ alignContentComputer }) => alignContentComputer};
          align-items: ${({ alignItemsComputer }) => alignItemsComputer};
          align-self: ${({ alignSelfComputer }) => alignSelfComputer};
        }
      `
    else return css``
  }}

  ${({
    flexTablet,
    flexGrowTablet,
    flexShrinkTablet,
    flexBasisTablet,
    flexDirectionTablet,
    flexWrapTablet,
    justifyContentTablet,
    alignContentTablet,
    alignItemsTablet,
    alignSelfTablet,
  }) => {
    if (
      flexTablet ||
      flexGrowTablet ||
      flexShrinkTablet ||
      flexBasisTablet ||
      flexDirectionTablet ||
      flexWrapTablet ||
      justifyContentTablet ||
      alignContentTablet ||
      alignItemsTablet ||
      alignSelfTablet
    )
      return css<FlexBoxProperties>`
        @media (max-width: ${maxTablet}) {
          flex: ${({ flexTablet }) => flexTablet};
          flex-grow: ${({ flexGrowTablet }) => flexGrowTablet};
          flex-shrink: ${({ flexShrinkTablet }) => flexShrinkTablet};
          flex-basis: ${({ flexBasisTablet }) => flexBasisTablet};
          flex-direction: ${({ flexDirectionTablet }) => flexDirectionTablet};
          flex-wrap: ${({ flexWrapTablet }) => flexWrapTablet};
          justify-content: ${({ justifyContentTablet }) => justifyContentTablet};
          align-content: ${({ alignContentTablet }) => alignContentTablet};
          align-items: ${({ alignItemsTablet }) => alignItemsTablet};
          align-self: ${({ alignSelfTablet }) => alignSelfTablet};
        }
      `
    else return css``
  }}

  ${({
    flexMobile,
    flexGrowMobile,
    flexShrinkMobile,
    flexBasisMobile,
    flexDirectionMobile,
    flexWrapMobile,
    justifyContentMobile,
    alignContentMobile,
    alignItemsMobile,
    alignSelfMobile,
  }) => {
    if (
      flexMobile ||
      flexGrowMobile ||
      flexShrinkMobile ||
      flexBasisMobile ||
      flexDirectionMobile ||
      flexWrapMobile ||
      justifyContentMobile ||
      alignContentMobile ||
      alignItemsMobile ||
      alignSelfMobile
    )
      return css<FlexBoxProperties>`
        @media (max-width: ${maxMobile}) {
          flex: ${({ flexMobile }) => flexMobile};
          flex-grow: ${({ flexGrowMobile }) => flexGrowMobile};
          flex-shrink: ${({ flexShrinkMobile }) => flexShrinkMobile};
          flex-basis: ${({ flexBasisMobile }) => flexBasisMobile};
          flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile};
          flex-wrap: ${({ flexWrapMobile }) => flexWrapMobile};
          justify-content: ${({ justifyContentMobile }) => justifyContentMobile};
          align-content: ${({ alignContentMobile }) => alignContentMobile};
          align-items: ${({ alignItemsMobile }) => alignItemsMobile};
          align-self: ${({ alignSelfMobile }) => alignSelfMobile};
        }
      `
    else return css``
  }}
`

const boxPositionProperties = css<BoxPositionProperties>`
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  z-index: ${({ zIndex }) => zIndex};
`

const textProperties = css<TextProperties>`
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  word-spacing: ${({ wordSpacing }) => wordSpacing};
`

/* Custom properties that can be used to apply specific styles. */
const customProperties = css<CustomProperties>`
  ${({ fluid }) => (fluid ? 'width: 100%' : '')};
`

export const boxProperties = css`
  ${boxModelProperties};
  ${boxPositionProperties};
  ${flexBoxProperties};
  ${textProperties};
  ${customProperties};
`
